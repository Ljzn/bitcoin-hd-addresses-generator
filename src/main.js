import './polyfills.js'; // 确保先导入polyfills
import './style.css';
import * as buffer from 'buffer';
import * as bip39 from 'bip39';
import * as bitcoin from 'bitcoinjs-lib';
import * as ecc from 'tiny-secp256k1';
import * as bip32 from 'bip32';

// 设置全局 Buffer
if (typeof window !== 'undefined') {
  window.Buffer = buffer.Buffer;
  window.global = window;
}

// 初始化签名库
bitcoin.initEccLib(ecc);
// 创建 BIP32 工厂，使用 tiny-secp256k1 作为底层椭圆曲线实现
const BIP32Factory = bip32.BIP32Factory(ecc);

// DOM元素
const mnemonicInput = document.getElementById('mnemonicInput');
const generateMnemonicBtn = document.getElementById('generateMnemonic');
const mnemonicLang = document.getElementById('mnemonicLang');
const usePassphrase = document.getElementById('usePassphrase');
const passphraseGroup = document.getElementById('passphraseGroup');
const passphrase = document.getElementById('passphrase');
const derivationPathPreset = document.getElementById('derivationPathPreset');
const customPath = document.getElementById('customPath');
const addressCount = document.getElementById('addressCount');
const deriveAddressesBtn = document.getElementById('deriveAddresses');
const resultSection = document.getElementById('resultSection');
const addressResults = document.getElementById('addressResults');
const copyResults = document.getElementById('copyResults');
const errorAlert = document.getElementById('errorAlert');

// 辅助函数：显示错误
function showError(message) {
  errorAlert.textContent = message;
  errorAlert.classList.remove('d-none');
  setTimeout(() => {
    errorAlert.classList.add('d-none');
  }, 5000);
}

// 辅助函数：清除错误
function clearError() {
  errorAlert.classList.add('d-none');
}

// 生成新助记词
generateMnemonicBtn.addEventListener('click', () => {
  try {
    const language = mnemonicLang.value;
    // 默认生成24个单词的助记词
    const mnemonic = bip39.generateMnemonic(256);
    mnemonicInput.value = mnemonic;
    clearError();
  } catch (error) {
    showError(`生成助记词失败: ${error.message}`);
  }
});

// 密码短语复选框控制
usePassphrase.addEventListener('change', () => {
  if (usePassphrase.checked) {
    passphraseGroup.classList.remove('d-none');
  } else {
    passphraseGroup.classList.add('d-none');
    passphrase.value = '';
  }
});

// 派生路径选择
derivationPathPreset.addEventListener('change', () => {
  if (derivationPathPreset.value === 'custom') {
    customPath.classList.remove('d-none');
  } else {
    customPath.classList.add('d-none');
  }
});

// 复制结果
copyResults.addEventListener('click', () => {
  const rows = Array.from(addressResults.querySelectorAll('tr'));
  const textToCopy = rows.map(row => {
    const cells = Array.from(row.querySelectorAll('td'));
    return cells.map(cell => cell.textContent.trim()).join('\t');
  }).join('\n');
  
  navigator.clipboard.writeText(textToCopy).then(() => {
    const originalText = copyResults.textContent;
    copyResults.textContent = '复制成功!';
    setTimeout(() => {
      copyResults.textContent = originalText;
    }, 2000);
  });
});

// 主要函数：派生地址
deriveAddressesBtn.addEventListener('click', async () => {
  clearError();
  
  try {
    // 获取并验证助记词
    const mnemonic = mnemonicInput.value.trim();
    if (!mnemonic) {
      showError('请输入助记词');
      return;
    }
    
    if (!bip39.validateMnemonic(mnemonic)) {
      showError('无效的助记词格式');
      return;
    }
    
    // 获取派生路径
    let path = derivationPathPreset.value;
    if (path === 'custom') {
      path = customPath.value.trim();
      if (!path || !path.startsWith('m/')) {
        showError('请输入有效的派生路径，例如 m/44\'/0\'/0\'/0');
        return;
      }
    }
    
    // 获取密码短语
    const passphraseValue = usePassphrase.checked ? passphrase.value : '';
    
    // 获取地址数量
    const count = parseInt(addressCount.value);
    if (isNaN(count) || count < 1 || count > 1000) {
      showError('请输入1-1000之间的地址数量');
      return;
    }
    
    // 派生地址
    const seed = await bip39.mnemonicToSeed(mnemonic, passphraseValue);
    const rootKey = BIP32Factory.fromSeed(seed);
    
    // 获取路径的基本部分（不含最后的索引）
    const pathBase = path.endsWith('/') ? path.slice(0, -1) : path;
    const lastSlashIndex = pathBase.lastIndexOf('/');
    const basePath = pathBase.substring(0, lastSlashIndex);
    
    // 清除旧结果
    addressResults.innerHTML = '';
    
    // 确定地址类型
    const addressType = getAddressTypeFromPath(path);
    
    // 生成地址
    for (let i = 0; i < count; i++) {
      const fullPath = `${basePath}/${i}`;
      const childKey = rootKey.derivePath(fullPath);
      
      // 根据不同路径创建不同类型的地址
      const address = generateAddress(childKey, addressType);
      
      // 添加到结果表格
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${i}</td>
        <td>${address}</td>
        <td>${fullPath}</td>
      `;
      addressResults.appendChild(row);
    }
    
    // 显示结果区域
    resultSection.classList.remove('d-none');
    
  } catch (error) {
    showError(`派生地址失败: ${error.message}`);
    console.error(error);
  }
});

// 根据路径确定地址类型
function getAddressTypeFromPath(path) {
  if (path.startsWith('m/44\'/0\'')) {
    return 'p2pkh'; // Legacy
  } else if (path.startsWith('m/49\'/0\'')) {
    return 'p2sh-p2wpkh'; // SegWit
  } else if (path.startsWith('m/84\'/0\'')) {
    return 'p2wpkh'; // Native SegWit
  } else if (path.startsWith('m/86\'/0\'')) {
    return 'p2tr'; // Taproot
  }
  
  // 默认为原生SegWit
  return 'p2wpkh';
}

// 根据不同类型生成地址
function generateAddress(childKey, addressType) {
  const publicKey = childKey.publicKey;
  
  switch (addressType) {
    case 'p2pkh': // Legacy
      return bitcoin.payments.p2pkh({ 
        pubkey: publicKey
      }).address;
    
    case 'p2sh-p2wpkh': // SegWit
      return bitcoin.payments.p2sh({
        redeem: bitcoin.payments.p2wpkh({ pubkey: publicKey })
      }).address;
    
    case 'p2wpkh': // Native SegWit
      return bitcoin.payments.p2wpkh({ 
        pubkey: publicKey
      }).address;
    
    case 'p2tr': // Taproot
      // 注意：bitcoinjs-lib的Taproot支持可能需要特殊处理
      try {
        // 对于Taproot，我们需要x-only公钥（32字节）
        const xOnlyPubKey = publicKey.slice(1, 33);
        return bitcoin.payments.p2tr({ 
          internalPubkey: xOnlyPubKey
        }).address;
      } catch (e) {
        console.error('Taproot地址生成失败:', e);
        return `Taproot暂不支持 (${e.message})`;
      }
    
    default:
      throw new Error(`不支持的地址类型: ${addressType}`);
  }
}
