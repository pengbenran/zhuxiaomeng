<template>
  <div class="cart" v-wechat-title="$route.meta.title">
     <mTabbar v-model="select"></mTabbar>
      <div class="ShopHeader"><span>购物车</span><span @click="EditClick">{{EditsName}}</span></div>
      <CartList :ShopList='ShopLists' @Updata='Updata'  ref="childs" v-if="ShopLists.length != 0"></CartList>
       <div class="footerBnt">
       <div class="selectBtn">
          <!-- <mt-Checklist class="Classradio"
          :value.sync="value"
          :options="options">
        </mt-Checklist> -->
       </div>
       <div class="cartBtn">
         <div class="price" v-show='!BtnDelete'>合计：{{AllPrice}}元</div>
         <div class="price MaskInfo" v-show='BtnDelete'>注：请选择删除</div>
         <div class="btn" v-show='!BtnDelete' @click="Next">结算</div>
         <div class="btn" v-show='BtnDelete' @click="Del">删除</div>
       </div>
     </div>
      <div class="Kong"  v-if="ShopLists.length == 0">
       <img :src="KongImg" mode='aspectFit'/>
            <div class="Konginfo">购物车空空如也~~~</div>
     </div>
    
  </div>
</template>

<script>
import { Checklist,Toast } from 'mint-ui'
import CartList from '@/components/cartlist'
import mTabbar from './tabbar/Tabar.vue'
import ProtoTypeAPI from '../network/apiServer'
import store from '../store/store'  //引用Vuex
export default {
  name: 'cart',
  data () {
    return {
    EditsName:'编辑',
    BtnDelete:false,
    AllPrice:0,
    KongImg:'https://shop.guqinet.com/html/images/shuiguo/cart/kong.png',
    ShopLists:[],
  catsId:0,
  cherkOption:[],
  value:[true],
  options:[{
    label: '全部',
    value: true,
    disabled: false
  }],
	 select:'tab3'
    }
  },
  components:{
  	CartList,
    mTabbar,
    'mt-Checklist': Checklist 
  },
  methods:{
     async  loadShopList(){
        let that=this
        let memberId = store.state.userInfo.memberId
        
        let shopListRes = await that.API.getShopList(memberId)
        console.log("查看参数",shopListRes,shopListRes.data.cartList )
        if(shopListRes.data.cartList.length != 0){
          that.catsId = shopListRes.data.cartList[0].cartId
          that.ShopLists = shopListRes.data.cartList.map(v=>{
            v.ShopSelect = false
            return v
          })
          console.log("查看商品",that.ShopLists)
          let  totalPrice =0 ;
          for( let  inedx in that.ShopLists ){
            totalPrice += that.ShopLists[inedx].price*that.ShopLists[inedx].num
          }
          that.AllPrice = totalPrice
        }
    },
    
    //点击删除
    async Del(){
        let that = this;
        let parms = {}
        let cartIdgood=[]
        cartIdgood.push(that.catsId)
        parms.cartS = cartIdgood
        let res = await that.API.DeleteAll(parms)
        console.log(res,"查看是否删除成功")
    },
    //点击编辑改为删除
    EditClick(){
      let that = this;
      if(!that.BtnDelete){
          that.BtnDelete = true
          that.EditsName ='删除'
      }else{
         that.BtnDelete = false
         that.EditsName ='编辑'
      }
    },
    
    Updata(e){
      let that = this;
      that.ShopLists == e;
    },
    //点击跳转
    Next(){  
      let that =this   
      if(that.ShopLists[0].ShopSelect){
        let that = this;
        let goodlist={}
        let GoodItem=[]
        goodlist.pic = that.ShopLists[0].num
        goodlist.num = that.ShopLists[0].num;
        goodlist.price = that.ShopLists[0].price;
        goodlist.image = that.ShopLists[0].image
        goodlist.name = that.ShopLists[0].name
        goodlist.goodsId = that.ShopLists[0].goodsId
        goodlist.cart=1
        GoodItem[0]=goodlist
        store.commit("storeShopList",GoodItem)
        this.$router.push({ name:'order',params:{
        cart:1
        }});
      }else{
        Toast({
          message: '提示',
          position: 'bottom',
          duration: 5000
        });
      }
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
.footerBnt{overflow: hidden;display: flex;align-items: center;justify-content: space-between;position: fixed;bottom: 60px;width: 100%;height: 45px;border-top:1px solid #f3f3f3;
    .selectBtn{display: flex;align-items: center;padding-left: 7px;font-size: 18px;font-weight: 100;color: #8e8e8e;}
    .cartBtn{display: flex;justify-content: center;font-size: 18px;font-weight: 100;color: #8e8e8e;}
    .price{height: 45px;line-height: 45px;margin-right: 7px;}
    .btn{background-image: -webkit-linear-gradient(0deg, rgb(255,191,3), rgb(252,148,53));height: 45px;line-height: 45px; width: 90px;text-align: center;color: #fff;}
}
.Kong{height: 225px;text-align: center;
   .Konginfo{text-align: center;font-weight: 100;color: rgb(234,89,95);font-size: 20px;}
}

.Classradio{
  /deep/ .mint-cell{overflow: hidden;}
  /deep/ .mint-checkbox-core::after{width: 6px;height: 9px;}
  border:none;height: 65px;
}
</style>