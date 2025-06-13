// buffer-shim.js
// 这个文件提供了一个全局的 Buffer 实现，用于浏览器环境

// 从 buffer 模块导入
import * as BufferModule from 'buffer';

// 直接使用原生Buffer，而不是自己实现
const BufferClass = BufferModule.Buffer;

// 将 buffer 模块保存到全局对象
if (typeof window !== 'undefined') {
  window.bufferModule = BufferModule;

  // 确保Buffer类在全局可用
  window.Buffer = BufferClass;

  // 日志记录Buffer状态
  console.log('Buffer检查: ', {
    exists: !!BufferClass,
    alloc: typeof BufferClass.alloc === 'function',
    from: typeof BufferClass.from === 'function'
  });
}

// 导出Buffer类供其他模块使用
export default BufferClass;
