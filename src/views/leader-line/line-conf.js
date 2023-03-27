export const lineConf={
  color: '', // 指引线颜色
  startPlug: 'square',
  endPlug: '', // 指引线结束点的样式 hand,disc
  endPlugSize: 1,
  endPlugOutline: true,
  size: 20, // 线条尺寸
  startSocket: 'left', //在指引线开始的地方从元素左侧开始
  endSocket: 'top', //在指引线开始的地方从元素右侧结束
  tartPlugColor: '#ff3792', // 渐变色开始色
  endPlugColor: '#fff386', // 渐变色结束色
  gradient: true, // 使用渐变色
  outline: true,
  outLineColor: 'blue',
  path: 'fluid', // straight,arc,fluid,magnet,grid
  dropShadow: true,
  dash: { // 虚线样式
    animation: false, // 让线条滚动起来
  }
}
