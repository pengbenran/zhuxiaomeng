<template>
  <div class="orderList" v-wechat-title="$route.meta.title">
  	<Tabs @listenToChild='onselect' :find_item='find_item' :wid='width'></Tabs>
  	<div class="shopList" v-if="kong != 0">
        <div class="Item" v-for="(orderItem,index) in orderList">
          <div class="ItemHeader">
            <div class="orderBh">订单编号：{{orderItem.sn}}</div>
             <!-- <div class="addr"><div class="topImg"><img :src="topImg"/></div><span>{{shopname}}</span><small>[切换]</small> </div> -->
             <div class="addInfo">
               <span class="status_Box" v-if="orderItem.status==0&&orderItem.shipStatus==0">待付款</span>
               <span class="status_Box" v-if="orderItem.status==1 || orderItem.status == 2&&orderItem.shipStatus==0&&orderItem.payStatus==2">待发货</span>
               <span class="status_Box" v-if="orderItem.status==3&&orderItem.shipStatus==1&&orderItem.payStatus==2">待收货</span>
               <span class="status_Box" v-if="orderItem.status==4||orderItem.status == 3&&orderItem.shipStatus==2&&orderItem.payStatus==2">已完成</span>
             </div>
          </div>
           <div class="shopWarp">
            <div class="List" v-for="(shopItme,ind) in orderItem.item">
              <div class="left"><img :src="shopItme.image"/></div>
              <div class="right">
                  <div class="Itemtitle fontHidden">{{shopItme.name}}</div>
                  <div class="NumInfo">
                     <!-- <span class="tag">桃子水密桃</span> -->
                     <span><span class="Num">x {{shopItme.num}}</span><span class="price">￥{{shopItme.price}}</span></span> 
                  </div>
              </div>
            </div>
          </div>
          <div class="shopWarpInfo"><span>共{{orderItem.shopNum}}件商品</span><span class="zongji">合计：￥{{orderItem.orderAmount}}</span></div>
          <div class="warpBtn" v-show="btnSelect!=0">
            <div class="Btn" v-show='btnSelect==1'>
              <span class="btn1" @click="CancelOrder('取消订单',orderItem.orderId,index)">取消订单</span>
              <!-- <span class="btn2" @click="Payoff('确认付款',orderItem.orderId,index,orderItem.status,orderItem.needPayMoney,orderItem.sn)">确认付款</span> -->
            </div>
            <div class="Btn" v-show='btnSelect==2'>
              <span @click="SelectOrder(orderItem.orderId)" class="btn2">查看订单</span>
            </div>
            <div class="Btn" v-show='btnSelect==3'>
              <span class="btn1" @click="SelectOrder(orderItem.orderId)">查看订单</span>
              <span class="btn2" @click="queShop(index,orderItem.orderId)">确认收货</span>
            </div>
            <div class="Btn" v-show='btnSelect==4'>
              <span class="btn1" @click="SelectOrder(orderItem.orderId)">查看订单</span>
              <span class="btn2" @click="DelShop(index,orderItem.orderId)">删除订单</span></div>
          </div>
        </div>
      </div>
      <div class="kong" v-if="orderList.length == 0">
        <img :src="kong" mode='aspectFit'/>
        <div class="Konginfo">订单空空如也~~~</div>
      </div>
  </div>
</template>

<script>
import Tabs from "@/components/tab.vue"
import store from '../store/store'
import { MessageBox } from 'mint-ui';
import ProtoTypeAPI from '../network/apiServer'
export default {
  name: 'orderList',
  data () {
    return {
    topImg:'https://shop.guqinet.com/html/images/shuiguo/cart/home.jpg',
    shopImg:'https://shop.guqinet.com/html/images/shuiguo/cart/shopimg01.jpg',
    find_item:[{name:"全部",selected:true},{name:"待付款",selected:false},{name:"待发货",selected:false},{name:"待收货",selected:false},{name:"已完成",selected:false}],
    width:"20%",
    kong:'https://shop.guqinet.com/html/images/shuiguo/myself/kong.png',
    btnSelect:0,
    shopname:'',
    InfoTypeIndex:0,
    total_fee:'',
    orderId:'',
    memberId:'',
    orderArry:[],
    orderList:[]
    }
  },
  methods:{
  	 onselect(e){
       let that = this;
       that.btnSelect = e
       that.find_item=that.find_item.map((item)=>{
         item.selected=false;
         return item
        })
       that.find_item[e].selected=true
       if(e==0){
           that.OnAllGoodList()
       }
       else if(e==1){
          let stauts=1;
          let cat="待付款"
          that.OrderRequest(0,0,0,stauts,cat)
       }
      else if(e==2){
          let stauts = 2;
          let cat = "待发货" 
          var statuss = "2,1"
          that.OrderRequest(statuss,2,0, stauts, cat)
      }
      else if(e==3){
          let stauts = 3;
          let cat = "已发货" 
          that.OrderRequest(3,2,1, stauts, cat) 
      }
      else if(e==4){
          let stauts = 4;
          let cat = "已完成"
          that.OrderRequest("3,4",2,2,stauts, cat) 
      }
        that.btnSelect = e
     },
      async OnAllGoodList(){
        let that = this;
        var params = {}
        params.memberId = that.memberId
        let res = await that.API.AllGoodList(params); 
        that.orderList =  res.data.orderList.map(v=>{ 
          v.shopNum=v.item.length
          return v
        })
       that.length = that.orderList.length
      //  console.log("所有的商品",res,that.orderList )
     },
         //订单按钮事件
    async CancelOrder(value,orderId,index){
      let that = this;
      var status = 6
      var params = {}
      var order = {}       
      if(value = '取消订单'){
        MessageBox({
          title: '提示',
          message: '是否继续取消订单',
          showCancelButton: true,
          confirmButtonText:'确认'
        }).then(action => {
          order.orderId = orderId
          order.status = 6
          order.payStatus = 0
          order.shipStatus = 0
          params.order = order
          that.API.OrderCancel(params).then(function(res){
            if(res.data.code==0){
              that.orderList.splice(index,1)
            }
          })
        })
      }
    },
     async OrderRequest(statuss, payStatus, shipStatus, status,cat){
        let that = this;
        let params = {}
        let order = {}
        order.statuss = statuss//状态
        order.payStatus = payStatus
        order.shipStatus = shipStatus
        order.memberId = that.memberId       
        params.order = order
        let res =await that.API.OrderSelectList(params)
        that.orderList =  res.data.orderList.map(v=>{ 
          v.shopNum=v.item.length
          return v
        })
        that.length = that.orderList.length
      },

      SelectOrder(orderId){
        let that = this;
         console.log("点击查看参数",orderId,that.btnSelect)
        that.$router.push({
          name:'OrderInfo',
          params:{
            orderid:orderId,
            orderTyep:that.btnSelect
          }
        })
      }
 },
 async mounted () {
  let that = this;
  that.memberId = store.state.userInfo.memberId;
  that.btnSelect = that.$route.query.index+1
  that.find_item=that.find_item.map((item)=>{
   item.selected=false;
   return item
 })
  that.find_item[that.btnSelect].selected=true
  if(that.btnSelect==0){
    that.OnAllGoodList()
  }
  else if(that.btnSelect==1){
    let stauts=1;
    let cat="待付款"
    that.OrderRequest(0,0,0,stauts,cat)
  }
  else if(that.btnSelect==2){
    let stauts = 2;
    let cat = "待发货" 
    var statuss = "2,1"
    that.OrderRequest(statuss,2,0, stauts, cat)
  }
  else if(that.btnSelect==3){
    let stauts = 3;
    let cat = "已发货" 
    that.OrderRequest(3,2,1, stauts, cat) 
  }
  else if(that.btnSelect==4){
    let stauts = 4;
    let cat = "已完成"
    that.OrderRequest("3,4",2,2,stauts, cat) 
  }
 },
  components:{
  Tabs
  }
}
</script>
<style scoped lang="less">
img{display: block;height: 100%;width: 100%;}

.tab{border-bottom: 2px solid rgb(244,244,244);}
.ItemHeader{display: flex;align-items: center;justify-content: space-between;padding:4px 10px;font-size: 16px;font-weight: 100;
   .addInfo{color: rgb(252,156,56);}
}

.shopList{
  .Item{padding: 7px 10px;box-shadow: 0px 2px 15px rgba(0, 0, 0, 0.116);margin: 10px;border-radius: 15px;}
}

.shopWarp{border-bottom:1px solid #f5f5f5;
   .left{width: 30%}
   .left img{width: 75px;height: 75px;margin: auto;}
   .right{font-size:100%;width: 70%;}
   .right .Itemtitle{font-size: 14px;color: #666;height: 48px;}
   .List{display: flex;align-items: center;}
   .right .NumInfo{display: flex;align-items: center;justify-content: space-between;font-size: 14px;margin-top: 5px;}
   .NumInfo .tag{color: #8e8e8e;font-size: 14px;}
   .NumInfo .Num{color: #8e8e8e;margin-right: 7px;font-size: 14px;}
   .NumInfo .price{font-size: 16px;color: rgb(251,147,37);}
}

.warpBtn{display: flex;align-items: center;justify-content:flex-end;
  span{display: inline-block;border:1px solid #8e8e8e;padding: 2px 10px;margin: 3px 7px;font-weight: 100;font-size: 14px;border-radius: 15px;}
  .btn2{color:#fc9c38;border:1px solid #fc9c38; }
}

.shopWarpInfo{display: flex;align-items: center;justify-content: flex-end;font-weight: 100;font-size: 16px;color: #666;}

.addr{font-size: 100;font-size: 12px;display: flex;align-items: center;color: rgb(170, 170, 170);height: 36px;padding: 0 5px;
   .topImg{height: 35px;width: 17px;margin-left: 10px;margin-right: 10px;}
   small{display: inline-block;margin-left: 6px;color: rgb(236,189,87);}
}
.kong{
  img{height: 200px;width: 200px;margin: 10px auto;}
  .Konginfo{text-align: center;font-weight: 100;color: rgb(234,89,95);}
}


</style>