<template>
  <div class="shopdetail" v-wechat-title="$route.meta.title">
    <mt-swipe :auto="4000">
      <mt-swipe-item  v-for="(item,index) in Gallery" :index="index" :key="item.imgId">
       <img :src="item.original" mode="widthFix">
      </mt-swipe-item>
    </mt-swipe>
  <!-- 商品名称及详情 -->
  <div class="goods">
    <div class="title">{{Goods.name}}</div>
    <div class="price"><span class="nowprice">￥{{Goods.price}}</span></div>
    <div><span class="tip">包邮</span><span class="buycount">已售{{Goods.buyCount}}</span></div>
  </div>
  <div v-html="Goods.intro" class="intro"></div>
  <div class="foot">
    <div class="home" @click="jumpHome">
      <img src="../assets/img/home.png">
      首页
    </div>
    <div class="cart" @click="jumpCart">
      <img src="../assets/img/cart.png">
      购物车
    </div>
    <div class="addcart" @click="addCart">加入购物车</div>
    <div class="buynow" @click="buyNow">立即购买</div>
  </div>
</div>
</template>

<script>
import { Swipe, SwipeItem } from 'mint-ui';
import ProtoTypeAPI from '../network/apiServer'
import store from '../store/store'
import { Indicator } from 'mint-ui';
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
export default {
  name: 'shopdetail',
  data () {
    return {
     Gallery:[],
     Goods:{}
    }
  },
  async mounted () {
    let that=this
    Indicator.open({
      text: '加载中...',
      spinnerType: 'fading-circle'
    });
    let goodRes=await this.API.getGoodDetail(33)
    if(goodRes.data.code==0){
      that.Gallery=goodRes.data.Gallery
      that.Goods=goodRes.data.Goods
    }
  Indicator.close();
  },
  methods:{
    async addCart(){  
     // 加入购物车
      let that=this
      let cartparms = {};
      cartparms.memberId = store.state.userInfo.memberId
      cartparms.goodsId = that.Goods.goodsId
      cartparms.itemtype = that.Goods.typeId
      cartparms.image = that.Goods.thumbnail
      cartparms.num = 1
      cartparms.point = that.Goods.point
      cartparms.weight = that.Goods.fenrunAmount
      cartparms.name = that.Goods.name
      cartparms.price = that.Goods.price
      let res = await  that.API.toCartSave(cartparms)
      this.$Message.success('添加成功');
      console.log(res);
    },
    buyNow(){
        // 立即购买
        let that = this; 
        // var goodarr=[]
        let goodlist={}
        let GoodItem=[]
        goodlist.pic = 1
        goodlist.num = 1;
        goodlist.price = that.Goods.price;
        // goodlist.cost = that.data.goodDetail.cost;
        goodlist.image = that.Goods.thumbnail
        goodlist.name = that.Goods.name
        goodlist.goodsId = that.Goods.goodsId
        goodlist.cart=0
        // goodlist.productId = productsSelect.productId
        // goodlist.gainedpoint = that.pic * that.GoodsInfo.point
        // goodlist.shareMoney =  productsSelect.fenrunAmount*that.pic
        // goodlist.specvalue = that.GoodsInfo.specs
        // goodarr[0] = goodlist;
        // let goodsAmount=Number(productsSelect.price*that.pic).toFixed(2)
        // wx.navigateTo({
        // url: "/pages/orderOne/main?goodItem=" + JSON.stringify(goodarr) + '&cart=0&goodsAmount='+goodsAmount
        // })
      GoodItem[0]=goodlist
      store.commit("storeShopList",GoodItem)
      this.$router.push({ name:'order',params:{
        cart:0
      }});
    },
    jumpCart(){
      // 跳转购物车页面
      this.$router.push({ path: 'cart'});
    },
    jumpHome(){
      // 跳转首页
      this.$router.push({ path: 'home'});
    }
  },
    created(){
        
    },
    components:{
   'mt-swipe': Swipe,
   'mt-swipe-item': SwipeItem
  }
}
</script>
<style scoped>
img{
  width: 100%!important;
  display: block;
}
.bannerImgList{
  width: 100%;
  height:300px;
}
.intro{
   width: 100%;
   overflow: hidden;
   margin-bottom:50px;
}
<<<<<<< HEAD
 .mint-swipe {

 height: 218px;

 }
=======
.intro img{width: 100%;}
>>>>>>> 84d719d208cff314a05a8db931991e2ca0253091
.goods{
  padding: 10px;
  box-sizing: box-sizing;
  border-bottom: 3px solid #ddd;
}
.title{
    height: 40px;line-height: 40px;font-size: 22px;
}
.price{
  margin-bottom:10px;margin-top: 10px;
}
.nowprice{
  color:#FF0302;font-size: 22px;
}
.oldprice{text-decoration: line-through;font-size: 16px}
.tip{display: inline-block;height:40px;width: 80px;text-align: center;border-radius: 5px;border:1px solid #ff0302;line-height: 40px;font-size: 20px;color:#FF0302;}
.buycount{display: inline-block;float: right;line-height: 40px;font-size: 16px;}
.foot{
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height:50px;
  box-sizing:content-box;
  display: flex;
  justify-content: space-around;
  background: #fff;
  padding: 10px 0;
}
.home,.cart{
  width: 50px;
  text-align: center;
}
.home img,.cart img{
  width: 30px;
  height:30px;
  margin: 0 auto;
}
.addcart,.buynow{width: 130px; height: 42px;margin-top: 4px;line-height: 42px;text-align: center;background: #F55253;color: #fff;}
.addcart{background:#5D9CEC; }
</style>