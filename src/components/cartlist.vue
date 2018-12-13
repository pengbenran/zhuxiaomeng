<template>
   <div class="CartWarp">
     <div class="shopList"  v-for="(Shop_List,index) in ShopList"  :key="index">
       <div class="selectico" @click="SelectIco(index)">
          <img src="../assets/img/check.png" v-show="!Shop_List.ShopSelect"/>
          <img src="../assets/img/eglass-check.png" v-show="Shop_List.ShopSelect"/>
       </div>
       <div class="itemLeft"><img :src="Shop_List.image"/></div>
       <div class="itemRight">
          <div class="title">
            <div>
              {{Shop_List.name}}
            </div>  
          </div>
          <small>{{Shop_List.specvalue}}</small>
          <div class="price">
             <div class="priceleft"><span>￥{{Shop_List.price}}元</span>
                <!-- <span>￥{{Shop_List.p2}}</span> -->
              </div>
             <div class="priceright">
                <span class="icon"   @click="handleItemDec(index)"  ><img src="../assets/img/dec.png" ></span> 
                <span class="num">{{Shop_List.num}}</span>  
                <span class="icon" @click="handleItemAdd(index)"   ><img src="../assets/img/add.png" ></span>        
             </div>
          </div>
       </div>
     </div>

</div>
</template>
<script>

import ProtoTypeAPI from '../network/apiServer'
import store from '../store/store'
export default {
  props: ['ShopList','shopname'],
  data () {
    return {
      AllTotal:0,
      value:[],
      options:[{
        label: ' ',
        value: true,
        disabled: false
      }],
   
    }
  },

  methods:{
     async updateItemNum(index,isAdd){
      let that= this 
      let shopItem = that.ShopList[index] 
      // console.log("加减", that.ShopList,index)
      let cartNumParams = {} 
      cartNumParams.memberId =  store.state.userInfo.memberId
      if(isAdd){
        that.ShopList[index].num = shopItem.num + 1 
      }else{
        that.ShopList[index].num = shopItem.num - 1 
      }
       cartNumParams.num = that.ShopList[index].num 
      cartNumParams.cartId = shopItem.cartId
      let cartNumRes = await that.API.editCartNum(cartNumParams)
      // this.$emit('updateShopList')
        console.log("数量添加参数",cartNumRes)
      if(cartNumRes.data.code == 0){
        this.$emit('Updata',this.ShopList)
      }
    
    }, 
     handleItemAdd(index){
       this.updateItemNum(index,true)
    },
    handleItemDec(index){
      let that= this 
      let shopItem = that.ShopList[index] 
       let  num = shopItem.num
      if( num <=1){
          return ;
      }
       this.updateItemNum(index,false)
    },

    //选中商品
    SelectIco(index){
       let that = this;
      if(that.ShopList[index].ShopSelect == true){
         that.ShopList[index].ShopSelect = false
      } else{
         that.ShopList[index].ShopSelect = true
      }
    }
  
  },
 
}

</script>
<style scoped lang='less'>

img{
  width: 100%;
  height: 100%;
  display: block;
}

.CartHeader{display: flex;align-items: center;
padding: 10px 25px;border-bottom: 1px solid #f5f5f5;
   img{width: 35px;height: 35px;margin-right: 15px;}
   text{font-size: 32px;font-weight: 100;color: #666;display: inline-block;width: 420px;overflow: hidden;text-overflow:ellipsis;
white-space: nowrap;}
}

.Classradio{margin-top: -8px;}
.CartWarp{box-shadow: 0 0 40px rgba(0, 0, 0, 0.123);border-radius: 30px;margin: 15px;}
.shopList{display: flex;align-items: center;
padding: 15px 10px; 
   .selectico{box-sizing: border-box;width: 30px;height: 45px;overflow: hidden;}
   .selectico img{width: 20px;height: 20px;;}
   .itemLeft{width: 35%}
   .itemLeft img{width: 100px;height: 105px;margin: auto}
   .itemRight{width: 55%;padding-right: 20px; padding-left: 20px;box-sizing: border-box;}
   .itemRight .status{height: 40px;text-align: right;color:#8e8e8e;font-size: 0.8em;
    span{color: #fc9b2d;}
   }
   .itemRight .title{height: 51px;font-weight: 100;font-size: 15px;color: #8e8e8e;
    div{white-space:normal;overflow: hidden;display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;}
   }
   .itemRight small{font-size: 13px;color: #ccc;font-weight: 100;display: inline-block;width: 100%;overflow: hidden;text-overflow:ellipsis;white-space: nowrap;}
   .price{display: flex;align-items: center;
justify-content: space-between;}
   .priceleft{
     span{font-size: 16px;font-weight: 100;color: rgb(252,78,79);}
   }
   .priceright{background:#e7e7e7;display: flex;align-items: center;
height: 24px;
     .icon{color: #fff;display: inline-block;width: 24px;height: 24px;overflow: hidden;padding:5px;box-sizing: border-box;}
     .num{background: #fff;height: 20px;line-height: 20px;color: rgb(248,193,92);display: inline-block;padding:0 7px;font-size: 14px;}
   }
}
</style>
