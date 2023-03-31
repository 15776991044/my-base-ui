<template>
  <div>
    <div id="a" class="s">a</div>
    <div id="b" class="s" style="width:100px">b</div>
    <button @click="des">aa</button>
    <button @click="des1">des1</button>
  </div>
</template>

<script>
// 导入兼容模块
import ResizeObserver from 'resize-observer-polyfill';
import { throttle, debounce } from 'throttle-debounce';

export default {
  data(){
    return {
      robserver: null
    }
  },
  mounted(){
    this.init()
  },
  methods: {
    des(){
      this.robserver.disconnect()
    },
    des1(){
      const element1 = document.getElementById('a');
      const element2 = document.getElementById('b');
      this.robserver.unobserve(element1);
      // this.robserver.unobserve(element2);
    },
    init(){
      const element1 = document.getElementById('a');
      const element2 = document.getElementById('b');
      /* 
 *  新建以一个观察者，传入一个当尺寸发生变化时的回调处理函数
 *  参数entries 是 ResizeObserverEntry 的数组，包含两个属性：
 *  ResizeObserverEntry.contentRect   包含尺寸信息（x,y,width,height,top,right,left,bottom)
 *  ResizeObserverEntry.target  目标对象，即当前观察到尺寸变化的对象
 *
 */   
      const robserver = new ResizeObserver( debounce(1600, entries => {
        for (const entry of entries) {
          // 可以通过 判断 entry.target得知当前改变的 Element，分别进行处理。
          console.log(entry.target)
          switch (entry.target){
            case element1 :
              entry.target.innerHTML = `第一个DIV尺寸 [${entry.contentRect.width} : ${entry.contentRect.height}]`;
              break;
            case element2 :
              entry.target.innerHTML = `第二个DIV尺寸 [${entry.contentRect.width} : ${entry.contentRect.height}]`;
              break;
          }
        }
      }));
      this.robserver=robserver
      robserver.observe(element1);
      robserver.observe(element2);
    }
  }
}
</script>

<style lang="scss" scoped>
.s{
  width: 100%;
}
</style>
