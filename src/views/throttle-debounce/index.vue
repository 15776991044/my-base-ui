<template>
  <div>throttle-debounce</div>
</template>

<script>
import { throttle, debounce } from 'throttle-debounce';
export default {
  data(){

  },
  mounted(){
    // this.init1()
    // this.init2()
  },
  methods: {
    init1(){
      // delay, callback
      const fooWrapper = throttle(200, this.foo);
      for (let i = 1; i < 10000; i++) {
        setTimeout(fooWrapper(i), 30*i);
        // fooWrapper(i)
      }
      // 如果经过的时间大于设置的时间间隔 delay，那么立即执行函数，并更新最近一次函数的执行时间。
      // 如果经过的时间小于设置的时间间隔 delay，那么通过 setTimeout 设置一个计数器，让函数在 delay - elapsed 时间后执行。

    },
    init2(){
      const barWrapper = debounce(20, this.bar);

      for (let i = 1; i < 10000; i++) {
        setTimeout(barWrapper(i), i * 30);
      }
    },    
    foo(time) { console.log('foo..', time); },
    bar(time) { console.log('bar..', time); },
  }

}
</script>
