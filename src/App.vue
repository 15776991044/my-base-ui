<template>
  <div id="app">
    <Menu v-if="navFlag" />
    <router-view />
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
import Emitter from "@/mixins/emitter"
export default {
  components: { Menu },
  mixins: [Emitter],
  computed: {
    navFlag() {
      return !window.__POWERED_BY_QIANKUN__&& process.env.NODE_ENV == 'development'
    }
  },
  mounted(){
    // console.log(this)
    // this.broadcast('UICheckBox', 'a', 'qq')
    console.log(this.$toast(111, null, 20000))
  },
  methods: {
    handlea(p){
      console.log('handlea', p)
    }
  }

}
</script>
