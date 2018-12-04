<template>
  <div class="myself" v-wechat-title="$route.meta.title">
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