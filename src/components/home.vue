<template>
  <div class="home" v-wechat-title="$route.meta.title">
    <div class="homeShop">
      <img src="../assets/img/homeShop.png" mode="widthFix">
      <div class="btn" @click="jumpShopDetail"></div>
    </div>
    <mTabbar v-model="select"></mTabbar>
  </div>
</template>

<script>
import mTabbar from './tabbar/Tabar.vue'
import ProtoTypeAPI from '../network/apiServer'
import store from '../store/store'
export default {
  name: 'home',
  data () {
    return {
      select:'tab1'
    }
  },
  components:{
    mTabbar,
  },
  async mounted () {
    let that=this
    that.getMemberInfo('o9CMA1D8Q9CmVSEOSZmTfduCXZus')
    let res=await that.API.getScoe()
    console.log(res)
  },
  methods:{
    jumpShopDetail(){
      this.$router.push({ path: 'shopDetail'});
    },
    async getMemberInfo(openId){
      let memberInfoRes=await this.API.getMemberInfo(openId)
      if(memberInfoRes.data.code==0){
        store.commit("storeUserInfo",memberInfoRes.data.member)
      }
    }
  }
}
</script>
<style scoped lang="less">
img{width: 100%;}
.homeShop{
  width: 100%;
  position: relative;
  .btn{
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 30px;
    left: 140px;
  }
}
</style>
