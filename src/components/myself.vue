<template>
  <div class="hello">
     这是我的页面
     <mTabbar v-model="select"></mTabbar>
  </div>
</template>

<script>
import mTabbar from './tabbar/Tabar.vue'
export default {
  name: 'myself',
  data () {
    return {
     select:'tab4'
    }
  },
    components:{
    mTabbar
  }
}
</script>
<style scoped>

</style>