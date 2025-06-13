<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# 比特币钱包地址派生工具

这是一个纯前端的比特币钱包地址派生工具。它允许用户输入不同格式的比特币助记词，选择不同的派生路径，指定要派生的地址数量，然后显示派生出的地址。

## 技术栈

- Vite (构建工具)
- JavaScript
- bitcoinjs-lib (比特币库)
- bip39 (助记词处理)
- hdkey (HD钱包派生)
- Bootstrap (UI框架)

## 代码结构

- `src/main.js`: 主要应用逻辑，包括助记词处理和地址派生
- `index.html`: 应用的HTML结构
- `src/style.css`: 应用的样式
- `vite.config.js`: Vite配置，包括对Node.js模块的polyfill支持

## 常用功能

- 助记词生成与验证
- 不同格式BIP39助记词支持
- 从助记词派生比特币地址
- 支持多种派生路径 (BIP44/BIP49/BIP84/BIP86)
- 支持密码短语
