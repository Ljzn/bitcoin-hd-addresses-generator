// polyfills.js
import * as buffer from 'buffer';

// 确保Buffer在全局对象上可用
if (typeof window !== 'undefined') {
  window.Buffer = buffer.Buffer;
  // 若全局Buffer未定义，确保定义它
  if (!window.Buffer) {
    window.Buffer = buffer.Buffer;
  }
  window.global = window;
}

// 确保process对象在全局可用
if (typeof window !== 'undefined' && !window.process) {
  window.process = { env: {} };
}
