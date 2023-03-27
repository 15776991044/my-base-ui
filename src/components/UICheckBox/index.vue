<template>
  <div>
    111
    <slot />
  </div>
</template>

<script>
import Emitter from "@/mixins/emitter"
export default {
  name: "UICheckBox",
  mixins: [Emitter],
  data(){
    return {
      
    }
  },
  mounted(){
    // console.log(this)
    // this.broadcast()
  }
}
</script>
