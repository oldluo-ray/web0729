// 处理移动端适配的代码

// 1. 计算根标签字体
document.documentElement.style.fontSize =
  (document.documentElement.clientWidth * 100) / 375 + 'px'

// 2. 1px边框不参与适配
// 动态计算,让布局视口变大n倍(像素比决定多少倍)
const viewport = document.querySelector('meta[name=viewport]')
console.log(viewport)
// 计算应该放大多少倍
const scale = 1 / window.devicePixelRatio
viewport.setAttribute('content', 'width=device-width, initial-scale=' + scale)

const fontSize =
  parseFloat(document.documentElement.style.fontSize) * window.devicePixelRatio
// console.log(fontSize)
document.documentElement.style.fontSize = fontSize + 'px'
