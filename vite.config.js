import { defineConfig } from 'vite';
import { resolve } from 'path';
import wasm from 'vite-plugin-wasm';
import topLevelAwait from 'vite-plugin-top-level-await';

// 获取仓库名称，用于GitHub Pages部署
const repositoryName = 'bitcoin-hd-addresses-generator'; // 请根据您实际的GitHub仓库名称修改

export default defineConfig({
  // 设置基础路径，用于GitHub Pages部署
  base: `/${repositoryName}/`,
  plugins: [
    wasm(),
    topLevelAwait()
  ],
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      assert: 'assert',
      buffer: 'buffer',
    },
  },
  define: {
    'process.env': {},
    global: 'globalThis',
    // 不要在这里定义Buffer，避免编译时混淆
  },
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
      },
      output: {
        manualChunks: {
          vendor: ['bip39', 'bitcoinjs-lib', 'bip32', 'tiny-secp256k1', 'buffer']
        }
      }
    },
    commonjsOptions: {
      transformMixedEsModules: true,
    }
  },
  optimizeDeps: {
    include: ['buffer', 'crypto-browserify', 'stream-browserify', 'assert'],
    esbuildOptions: {
      define: {
        global: 'globalThis'
      }
    }
  }
});
