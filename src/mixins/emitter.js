/**
 * 广播方法定义
 * @param String componentName 组件名称 
 * @param String eventName 事件名称 
 * @param Object params 参数
 */

function broadcast(comName, evtName, params){
  // 遍历子组件，对子组件的name进行匹配
  this.$children.forEach(child => {
    let name = child.$options._componentTag
    if (name===comName){
      child.$emit.apply(child, [evtName].concat(params))
      // child.$emit(evtName, params)
    } else {
      broadcast.apply(child, [comName, evtName].concat([params]));
    }
  })
}

export default {
  methods: {
    broadcast(comName, evtName, params){
      broadcast.call(this, comName, evtName,  params)
    }
  }
}
