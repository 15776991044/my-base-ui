<template>
  <div class="el-scrollbar">
    <!-- scroll-wrap -->
    <div ref="wrap" class="el-scrollbar__wrap">
      <div ref="resize" class="el-scrollbar__view">
        <div class="page">scroll组件</div>
      </div>
    </div>
    <!-- horizontal 纵轴 -->
    <bar />
    <!-- vertical 横轴 -->
    <!-- <bar /> -->
  </div>
</template>

<script>
import Bar from "./Bar.vue"
export default {
  name: 'UIScrollbar',
  componentName: 'UIScrollbar',
  components: {Bar},
  data(){
    return {
      
    }
  },
  render(createElement){
    let nodes=([
      111,
      333,
      this.$slots.default
    ])
    // return h('', {}, nodes)
    return createElement('div', {class: 'base-node'}, nodes)
  }
}
</script>

<style lang='scss' scoped>
.el-scrollbar{
  overflow: hidden;
  position: relative;

  width:300px;
  height: 40vh;
  margin-top: 80px;
  margin-left:300px;
  background: #333;
  color: #fff;
}
.el-scrollbar__wrap{
  overflow: scroll;
  height: 100%;
  overflow-x: auto;

}
.page{
  height:40vh;
  padding-top:20vh
}
::-webkit-scrollbar {
  display: none;
}
</style>


