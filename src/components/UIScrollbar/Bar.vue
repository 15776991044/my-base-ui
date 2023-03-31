<template>
  <div class="el-scrollbar__bar">
    <div ref="thumb" class="el-scrollbar__thumb" />
  </div>
</template>

<script>
export default {
  data(){
    return {
      
    }
  }
}
</script>

<style lang="scss" scoped>
.el-scrollbar__bar{
    position: absolute;
    right: 2px;
    bottom: 2px;
    z-index: 1;
    border-radius: 4px;
    /* opacity: 0; */
    transition: opacity .12s ease-out;

    width: 6px;
    top: 2px;
}

.el-scrollbar__thumb{
         width: 100%;
      position: relative;
    display: block;

    cursor: pointer;
    border-radius: inherit;
    background-color: red;
    transition: background-color .3s;

        height: 27.3454%;
    transform: translateY(141.957%);
}
</style>


