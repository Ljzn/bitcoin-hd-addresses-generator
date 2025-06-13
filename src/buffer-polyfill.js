// buffer-polyfill.js
import * as BufferModule from 'buffer';

// 确保 Buffer 在全局对象上可用
if (typeof window !== 'undefined') {
  // 保存原始的 Buffer 引用（如果存在）
  const originalBuffer = window.Buffer;
  
  // 设置 Buffer，确保它是完整的 buffer 模块的 Buffer 类
  window.Buffer = BufferModule.Buffer;
  
  // 确保所有关键方法都可用
  if (window.Buffer && !window.Buffer.alloc) {
    // 如果 alloc 不可用，尝试使用 buffer 模块中的实现
    if (typeof BufferModule.Buffer.alloc === 'function') {
      window.Buffer.alloc = BufferModule.Buffer.alloc;
    } else {
      // 提供 alloc 的替代实现
      window.Buffer.alloc = function(size, fill, encoding) {
        const buf = new BufferModule.Buffer(size);
        if (fill !== undefined) {
          if (typeof encoding === 'string') {
            buf.fill(fill, encoding);
          } else {
            buf.fill(fill);
          }
        }
        return buf;
      };
    }
  }
  
  // 确保其他重要方法也可用
  const methods = ['from', 'isBuffer', 'concat', 'allocUnsafe'];
  methods.forEach(method => {
    if (window.Buffer && !window.Buffer[method] && BufferModule.Buffer[method]) {
      window.Buffer[method] = BufferModule.Buffer[method];
    }
  });
  
  // 如果没有 isBuffer 方法，添加一个基本实现
  if (window.Buffer && !window.Buffer.isBuffer) {
    window.Buffer.isBuffer = function(obj) {
      return obj != null && obj.constructor !== null &&
        typeof obj.constructor.isBuffer === 'function' && obj.constructor.isBuffer(obj);
    };
  }
  
  // 确保 INSPECT_MAX_BYTES 属性存在
  if (window.Buffer && BufferModule.Buffer.INSPECT_MAX_BYTES !== undefined) {
    window.Buffer.INSPECT_MAX_BYTES = BufferModule.Buffer.INSPECT_MAX_BYTES;
  }
  
  // 也可以直接添加 buffer 模块到全局对象
  window.buffer = BufferModule;
}
