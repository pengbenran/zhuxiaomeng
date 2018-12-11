<template>
  <div class="cart" v-wechat-title="$route.meta.title">
     <mTabbar v-model="select"></mTabbar>
      <div class="ShopHeader"><span>购物车</span><span>{{EditsName}}</span></div>
      <CartList :ShopList='ShopLists' @updateShopList='loadShopList'  ref="childs" v-if="ShopLists.length != 0"></CartList>
       <div class="footerBnt">
       <div class="selectBtn">全选</div>
       <div class="cartBtn">
         <div class="price" v-show='!BtnDelete'>合计：{{AllPrice}}元</div>
         <div class="price MaskInfo" v-show='BtnDelete'>注：请选择删除</div>
         <div class="btn" v-show='!BtnDelete'>结算</div>
         <div class="btn" v-show='BtnDelete'>删除</div>
       </div>
     </div>
      <div class="Kong"  v-if="ShopLists.length == 0">
       <img :src="KongImg" mode='aspectFit'/>
            <div class="Konginfo">购物车空空如也~~~</div>
     </div>
    
  </div>
</template>

<script>
import CartList from '@/components/cartlist'
import mTabbar from './tabbar/Tabar.vue'
import ProtoTypeAPI from '../network/apiServer'
import store from '../store/store'
export default {
  name: 'cart',
  data () {
    return {
    EditsName:'编辑',
    BtnDelete:false,
    AllPrice:0,
    KongImg:'https://shop.guqinet.com/html/images/shuiguo/cart/kong.png',
    ShopLists:[{
		cartId: 185,
		goodsId: 23,
		productId: 30,
		memberId: 244,
		itemtype: 12,
		num: 1,
		weight: 2.00,
		name: "秘鲁蓝莓2盒(约125g/盒) 新鲜水果 蓝莓鲜果",
		price: 20.00,
		image: "https://shop.guqinet.com/shopimages/guoran/d94c439e-5e45-4c5d-9cd6-307916091d74.png",
		specvalue: "大香蕉",
		point: 50,
		marketEnable: 1
	}],
	 select:'tab3'
    }
  },
  components:{
  	CartList,
  	mTabbar
  },
  methods:{
     async  loadShopList(){
        let that=this
        let memberId = store.state.userInfo.memberId
        let shopListRes = await that.API.getShopList(memberId)
        that.ShopLists = shopListRes.data.cartList
        let  totalPrice =0 ;
        for( let  inedx in that.ShopLists ){
          totalPrice += that.ShopLists[inedx].price*that.ShopLists[inedx].num
        }
        that.AllPrice = totalPrice
    }
  },
  mounted() {
    this.loadShopList()
  },
}
</script>
<style scoped lang="less">
.ShopHeader{display: flex;align-items: center;justify-content: space-between;padding: 10px 30px;border-bottom: 1px solid #f4f4f4;
   span{color: rgb(252,155,45);font-weight: 100;font-size: 17px;display: inline-block;}
}
.footerBnt{display: flex;align-items: center;justify-content: space-between;position: fixed;bottom: 60px;width: 100%;height: 45px;
    .selectBtn{display: flex;align-items: center;padding-left: 7px;font-size: 18px;font-weight: 100;color: #8e8e8e;}
    .cartBtn{display: flex;justify-content: center;font-size: 18px;font-weight: 100;color: #8e8e8e;}
    .price{height: 45px;line-height: 45px;margin-right: 7px;}
    .btn{background-image: -webkit-linear-gradient(0deg, rgb(255,191,3), rgb(252,148,53));height: 45px;line-height: 45px; width: 90px;text-align: center;color: #fff;}
}
.Kong{height: 225px;
   .Konginfo{text-align: center;font-weight: 100;color: rgb(234,89,95);}
}
</style>