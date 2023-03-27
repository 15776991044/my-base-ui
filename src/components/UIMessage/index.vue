<template>
  <!-- <div>
    <span @click="showToast=!showToast">aaa</spab> -->
  <transition appear @after-leave="handleAfterLeave">
    <div v-show="showToast" class="cust-toast">
      {{ message||'message' }}
    </div>
  </transition>
  <!-- </span>
  </div> -->
</template>

<script>
export default {
  name: 'CustToast',
  data(){
    return {
      showToast: false,
      type: 'normal',
      message: '消息提示',
      duration: 3000
    }
  },
  computed: {
    
  },
  methods: {
    handleAfterLeave(){
      console.log(this.$el, this.$el.parentNode)
      // this.$destroy(true);
      // this.$el.parentNode.removeChild(this.$el);
    }
  }
}
</script>

<style lang="scss" scoped>
.cust-toast{
  position: fixed;
  left: 50%;
  top: 50%;
  background: rgb(233, 233, 235);
  padding: 10px;
  border-radius: 5px;
  transform: translate(-50%, -50%);
  color: #909399;
  overflow: hidden;
  display: flex;
  align-items: center;
  // animation: run-scale 1s linear 0s;

}


// 元素开始进入的状态 | 元素离开结束的状态
.run-enter-from,
.run-leave-to {
  opacity: 0;
}


// 元素进入结束的状态 ｜ 元素开始离开的状态。     这里不写也可以！！！！！！
.run-enter-to,
.run-leave-from {
  opacity: 1;
}


.run-enter-active {
  animation: run-scale 10s linear 0s;
}
// 离开的时候设置成相反哒
.run-leave-active {
  animation: run-scale 10s linear 0s reverse;

}

@keyframes run-scale {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

</style>
