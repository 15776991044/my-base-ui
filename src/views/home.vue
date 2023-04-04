<template>
  <div> 
    hello world
    <!-- <UICheckBox ref="saa" :aa="'a'" a="q" @a="handlea">
      <div>222</div>
    </UICheckBox>  -->
    <!-- <UIDatePicker ref="UIDatePicker">
      时间选择器
    </UIDatePicker> -->
    <!-- <UIScrollbar ref="UIScrollbar">sss</UIScrollbar> -->
    <UIImage ref="UIImage" />
  </div>
</template>

<script>
import Emitter from "@/mixins/emitter"
export default {
  name: 'Home',
  components: {},
  mixins: [Emitter],
  data(){
    return {

    }
  },
  // mounted(){
  //   console.log(this)
  //   this.broadcast('UICheckBox', 'a', 'qq')

  // },
  methods: {
    handlea(p){
      console.log('handleaqq', p)
    }
  }
}
</script>
