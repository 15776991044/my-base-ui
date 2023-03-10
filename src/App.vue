<template>
  <div id="app">
    <Menu v-if="navFlag" />
    <router-view />
  </div>
</template>

<script>
import Menu from './components/Menu.vue'
export default {
  components: { Menu },
  computed: {
    navFlag() {
      return !window.__POWERED_BY_QIANKUN__&& process.env.NODE_ENV == 'development'
    }
  }

}
</script>
