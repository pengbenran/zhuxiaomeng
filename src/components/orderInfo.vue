<template>
<div class="OrderInfo">
    <div class="header">
<!--         <div class="left">
          <text v-if="selectIndex == 1">待收货</text>
          <text v-if="selectIndex == 2">待发货</text>
          <text v-if="selectIndex == 3">待收货</text>
          <text v-if="selectIndex == 4">待自提</text>
        </div>
        <div class="right">
          <img v-if="selectIndex == 1" src="../assets/img/header01.png" />
          <img v-if="selectIndex == 2" src="../assets/img/header02.png"/>
          <img v-if="selectIndex == 3" src="../assets/img/header03.png" />
          <img v-if="selectIndex == 4" src="../assets/img/header04.png"/>
        </div> -->
    </div>
    <!--header end-->

    <div class="AddInfo">
       <div class="left"><img src="../assets/img/dz.png"/></div>
       <div class="right">
           <div class="name"><text>{{orderDO.shipName}}</text><text>{{orderDO.shipMobile}}</text></div>
           <div class="addressInfo">{{orderDO.shipAddr}}</div>
       </div>
    </div>
    <!--AddInfo end-->

    <div class="OrderList">
        <!-- <div ></div> -->
          <div class="OrderItem" v-for="(item,index) in orderDO.item" :index = 'index' :key='item.orderId'>
    
             <div class="orderWarp">
                  <div class="left"><img :src="item.image" /></div>
                  <div class="right">
                    <div class="orderName fontHidden">{{item.name}}</div>
                    <div class="tagNum">
                      <span class="tag"></span><span>x {{item.num}}</span></div>
                    <div class="price"><span>￥{{item.price}}</span></div>
                  </div>
             </div>
        </div>
        <div class="itemInfo">订单编号：{{orderDO.sn}}</div>
         <div class="itemInfo">收货人：{{orderDO.shipName}}</div>
         <div class="itemInfo">号码：{{orderDO.shipMobile}}</div>
    </div>
    <!--OrderList end-->

    <div class="MaskWarp">
        <div class="MaskItem"><text class=''>运费</text><text>￥0.00</text></div>
        <div class="MaskItem"><text class=''>积分折扣</text><text>￥{{orderDO.gainedpoint}}</text></div>
        <!-- <div class="MaskItem"><text class=''>优惠券</text><text>￥52.00</text></div> -->
        <div class="MaskItem"><text class=''>实付款</text><text class="pri">￥{{orderDO.goodsAmount}}</text></div>
    </div>
    <!--MaskWarp end-->

    <div class="footBtn">
       <!-- <text class="que">确认收货</text> -->
    </div>

</div>
</template>

<script>
import store from '../store/store'  //引用Vuex

export default {
  components: {

  },

  data () {
    return {
       shopname:'八一店',
       indexdata:'',
       orderDO:[],
       selectIndex:1
    }
  },
  methods:{ 
   async onLoads(orderId){
      let that = this;
      let params = {}
      params.orderId=orderId
      let res = await that.API.OrderIntRo(params);
      that.orderDO = res.data.orderDO

    }
  
  },
  mounted(){
    let that = this;
    console.log("进来查看参数",that.$route.query)
     that.selectIndex = that.$route.query.orderTyep
     that.onLoads(that.$route.query.orderid);
  }
  
}
</script>

<style scoped lang='less'>

img{
  width: 100%;
  height: 100%;
  overflow:hidden;
}

.header{display: flex;align-items: center;background: linear-gradient(90deg, rgb(253,113,0), rgb(255,86,5));height: 150px;
  .left{width: 50%;text-align: center;}
  .left text{font-weight: 100;color: #fff;font-size: 20px;}
  .right{width: 50%;text-align: center;}
  .right img{width: 70px;height: 70px;margin: auto;}
}

.AddInfo{display: flex;align-items: center;justify-content: center;padding: 10px 5px;border-bottom: 1px solid #f5f5f5;
    .left{width: 16%;text-align: center;}
    .left img{width: 35px;height: 33px;}
    .right{width: 84%;font-weight: 100;font-size: 15px;}
}


.OrderList{padding: 10px 5px;border-bottom: 1px solid #f5f5f5;
   .orderWarp{display: flex;align-items: center;padding: 5px;}
   .left{width: 30%;text-align: center;}
   .left img{width: 85px;height: 85px;margin: auto;}
   .right{width: 70%;font-weight: 100;font-size: 15px;}
   .orderName{height: 44px;}
   .tagNum{display: flex;align-items: center;height: 25px;justify-content:space-between;padding-right: 5px;font-size: 13px;font-size: rgb(129, 129, 129);margin-top: 8px;}
   .tag{color: rgb(251,194,2)}
   .price{text-align: right;font-size: 15px;color: rgb(251,194,2);padding-right: 10px;}
}

.MaskWarp{font-weight: 100;font-size: 15px;padding: 10px;}
.MaskItem{display: flex;align-items: center;justify-content: space-between;padding: 3px 0;
   .pri{font-size: 18px;color: rgb(251,194,2)}
}
.itemInfo{padding: 10px;font-size: 14px;}

.footBtn{text-align: right;padding: 15px 8px;
  .que{display: inline-block;padding: 4px 13px;border-radius: 12px;font-size: 14px;border:1px solid rgb(251,194,2);color: rgb(251,194,2);}
}

</style>