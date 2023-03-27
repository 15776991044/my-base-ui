

<template>
  <div>
    leader-line
    <div id="block-a" class="block">a</div>

    <div id="block-b" class="block">b</div>

    <br>
    <div class="scroll-wrap">
      <div class="scroll-con">
        <div id="block-c" class="block">c</div>

      </div>
    </div>
    <div id="block-d" class="block">c</div>

  </div>
</template>

<script>
import LeaderLine from 'leader-line'
import {lineConf} from './line-conf'
export default {
  data(){
    return {
      lineTime: null,
      lineContainer: null,
      lineContainer2: null
    }
  },


  // 注册监听
  mounted() {
    this.initLine()
    // 他自己会监听，不过滚动条里的不行
    // window.addEventListener('resize', this.getLine)
  },
  // 销毁监听，防止内存泄露
  destroyed() {
    window.removeEventListener('resize', this.getLine)
    clearTimeout(this.lineTime)
  },
  methods: {
    getLine(){
      clearTimeout(this.lineTime)
      this.lineTime=setTimeout(this.initLine, 300);
    },
    initLine(){
      console.log(1)
      let startEle = document.getElementById('block-a')
      let endEle = document.getElementById('block-b')
      let endEle2 = document.getElementById('block-c')
      let endEle3 = document.getElementById('block-d')
      let draggable = new PlainDraggable(endEle3);
      this.lineContainer = new LeaderLine(startEle, endEle, {color: 'red', size: 8})
      this.lineContainer2 = new LeaderLine(startEle, endEle2, lineConf)
      console.log('lineContainer', this.lineContainer, this.lineContainer2)
      let showEffectName = 'draw'
      // 动画参数
      let animOptions = {
        duration: 1000, //持续时长
        timing: 'ease-in' // 动画函数
      }
      this.lineContainer.show(showEffectName, animOptions)
      this.lineContainer3 = new LeaderLine(
        LeaderLine.mouseHoverAnchor(startEle),
        LeaderLine.pointAnchor(endEle3, {
          x: 0,
          y: 0
        }),
        {endLabel: LeaderLine.pathLabel('This is additional label')}
      );

    }
  }
}
</script>

<style lang="scss" scoped>
.block{
  margin:10vh 10vh;
  width: 10vh;
  height:10vh;
  background:rgba(0,0,0,0.1);
  text-align: center;
  display: inline-block;
}
.scroll-wrap{
  background: rgba(255,2,2,0.5);
  height:30vh;
  width: 40vh;
  overflow: auto;
  .scroll-con{
    height:60vh;
  }
}
</style>
