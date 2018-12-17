<template>
  <div class="home" v-wechat-title="$route.meta.title">
    <div class="homeShop">
      <!-- <img :src="bcgImg.imageUrl" mode="widthFix"> -->
      <img src="../assets/img/homeShop.jpg" mode="widthFix">
      <div class="btn" @click="jumpShopDetail(goodsId)"></div>
    </div>
    <mTabbar v-model="select"></mTabbar>
  </div>
</template>

<script>
import mTabbar from './tabbar/Tabar.vue'
import ProtoTypeAPI from '../network/apiServer'
import store from '../store/store'
import { Indicator } from 'mint-ui';
import queryString from 'query-string'
export default {
  data () {
    return {
      select:'tab1',
      goodsId:''
    }
  }, 
  components:{
    mTabbar,
  },
  created () {  
    let that=this
    // this.$router.push({path:'home'});
    let openId=location.href.split('openId=')[1]
    if(openId!=undefined){ 
      that.getMemberInfo(openId) 
    }
    else{
      that.getMemberInfo(store.state.userInfo.openId)
    }
  },
  async mounted () {
    let that=this 
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    let indexImgRes=await that.API.getIndexImg()
    // that.bcgImg=indexImgRes.data.image 
    that.goodsId= indexImgRes.data.image.goodsId   
    Indicator.close();
  },
  methods:{
    jumpShopDetail(goodsId){
      this.$router.push({ name: 'ShopDetail',query:{goodsId:goodsId}});
    },
    async getMemberInfo(openId){ 
      let memberInfoRes=await this.API.getMemberInfo(openId)
      if(memberInfoRes.data.code==0){
        Indicator.close();
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
