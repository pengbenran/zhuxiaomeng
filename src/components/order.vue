<template>
<div class="order" v-wechat-title="$route.meta.title">
	<div class="AddressWarp">
		<div class="AddressBtn" v-if="!isAddr" @click="addAddr">
			请选择收货地址
		</div>
		<div class="Address" v-if="isAddr" @click="addAddr">
			<div class="Address-item">
				<div class="itemLeft">收货人</div>
				<div class="itemRight"><span>{{addr.name}}</span><span>{{addr.mobile}}</span></div>
			</div>
			<div class="Address-item">
				<div class="itemLeft">收货地址</div>
				<div class="itemRight">{{addr.province}}{{addr.city}}{{addr.region}}{{addr.addr}}</div>
			</div>
		</div>
	</div>
	<shopList :Shop_List='GoodItem':shopname='shopname'></shoplist>
  <Nav></Nav>
		<div class="footerBnt">
			<div class="selectBtn"></div>
			<div class="cartBtn">
				<div class="price">合计：{{goodsAmount}}元</div>
				<button class="btn" @click="orderSave"  :disabled="isDisabled">结算</button>
			</div>
		</div>
	</div>
</template>

<script>
import shopList from '@/components/shoplist'
import Nav from '@/components/Nav';
import store from '../store/store'
import { Indicator } from 'mint-ui';
import { Toast } from 'mint-ui';
export default {
  name: 'order',
  data () {
    return {
    isAddr:false,
    GoodItem:[],
    goodsAmount:'',
    shopname:'小萌共享金服',
    addr:{},
    userInfo:{},
    order:{},
    payRes:'',
    isDisabled:false
    }
  },
  components:{
  	shopList,
    Nav
  },
  methods:{
  	addAddr(){
    store.commit("storeJumpFrom",'Order') 
  	this.$router.push({ name:'addressList'})
  	},
    orderSave(){
      let that = this;
      if(that.isAddr){
       Indicator.open({
        text: '请稍等...',
        spinnerType: 'fading-circle'
      });
       that.isDisabled=true;
       let bean = {}
       let goodObj = {}
       let orderParms = {}  
       bean.memberId = that.userInfo.memberId;
       bean.province = that.addr.province
       bean.city = that.addr.city
       bean.addr = that.addr.addr
       bean.region = that.addr.region
       bean.shipMobile = that.addr.mobile
       bean.addrId = that.addr.addrId
       bean.shipName = that.addr.name
       bean.orderAmount =  that.goodsAmount 
         //提交方式不同
       if(store.state.orderType == 0){      
        bean.googitem = []
        goodObj=that.GoodItem[0]
        bean.googitem[0] = goodObj                
      }else{
          //购物车提交订    
          bean.googitem = that.GoodItem
        }
        that.saveOrder(bean) 
      } 
      else{
        Toast('请选择收货地址');
      }
         
    },
    async saveOrder(bean){
      let that = this;
      let orderRes =await that.API.OrderSave(bean)
      if(orderRes.data.code==0){
        that.order=orderRes.data.order
        that.wxPay()
      }

    },
    // 微信支付
    wxPay(){
     let that = this;
     let params ={}
     params.orderid = that.order.orderId
     params.sn = that.order.sn
     params.total_fee = that.order.orderAmount * 100
     params.openId=store.state.userInfo.openId
      //请求支付
      that.API.ConfirmPay(params).then(function(PayRes){
        WeixinJSBridge.invoke('getBrandWCPayRequest',{
            timeStamp: PayRes.data.timeStamp, //时间戳从1970年1月1日00:00:00至今的秒数,即当前的时间,
            nonceStr: PayRes.data.nonceStr, //随机字符串，长度为32个字符以下,
            package: PayRes.data.package, //统一下单接口返回的 prepay_id 参数值，提交格式如：prepay_id=*,
            signType: PayRes.data.signType, //签名算法，暂支持 MD5,
            paySign: PayRes.data.paySign, //签名,具体签名方案参见小程序支付接口文档,
            appId:'wx1da7f3bd1349088e',
          },function(res){
            Indicator.close();
            if(res.err_msg=="get_brand_wcpay_request:ok"){
                that.payReturen()
              if(that.userInfo.remark==0){
                that.getQuick()
              }
              // windows.location.href="https://customs.guqinet.com/dist/#/apply"
              that.$router.push({ path: 'apply'});
            }else if(res.err_msg=="get_brand_wcpay_request:cancel"){
              console.log('用户取消支付');
            }  
            else{
              console.log("支付失败");
            }
          });
      })
         
    },
    // 支付成功之后修改订单状态
    async payReturen(){
      let that=this
      let orderParams = {}
      // orderparms.order = order
      orderParams.orderId = that.order.orderId
      orderParams.code = 200
      orderParams.memberId = that.userInfo.memberId
      orderParams.paymoney = that.order.orderAmount
      orderParams.agentHigh = that.userInfo.agentHigh
      let orderPayRes=await that.API.PaypassOrder(orderParams)
  },
  async getQuick(){
    let that=this
    let ermarRes=await that.API.getQuick(that.userInfo.openId)
    //把二维码图片地址存入服务器
    that.userInfo.remark=ermarRes.data
    let params={}
    params.memberId=that.userInfo.memberId
    params.face=that.userInfo.face
    params.remark=ermarRes.data
    let setQrcodeRes=await that.API.setQrcode(params)
    if(setQrcodeRes.data.code=="0"){
      store.commit("storeUserInfo",that.userInfo)
    }     

  },
      //获取默认地址
    async getdefaultAddr(){
      let that=this
      let addressRes=await that.API.getdefaultAddr(that.userInfo.memberId)
      if (addressRes.data.code == 1) { 
        if(store.state.userAddr=='noAddr'){
           that.isAddr=false
        }
        else{
          that.isAddr=true
          that.addr=store.state.userAddr
        }
      }
      else {
        that.isAddr=true
        that.addr=addressRes.data.memberAddressDO
      }
  },
  },
  beforeMount(){
  	let that=this	
    that.userInfo=store.state.userInfo
    // that.memberId=store.state.userInfo.memberId
    that.getdefaultAddr()
  	that.GoodItem=store.state.shopList
  	let totalPice=0
  	for(var i in that.GoodItem){
  	  totalPice+=that.GoodItem[i].price*that.GoodItem[i].num
  	}
  	that.goodsAmount=totalPice 

  }
}
</script>
<style scoped lang="less">
.AddressWarp{padding: 20px 0;box-sizing: border-box;}
.Address{padding: 0 12px;border-bottom: 1px solid rgb(244,244,244);
    .Address-item{display: flex;align-items: center;font-weight: 100;font-size: 16px;padding: 7px;box-sizing: border-box;}
    .itemLeft{width: 30%;}
    .itemRight{width: 70%;display: flex;align-items: center;justify-content: space-between;color: #8e8e8e;}
}
.AddressBtn{text-align: center;width: 90%;margin: auto;line-height: 35px;background: rgb(252,154,47);border-radius: 22px;color: #fff;font-weight: 100;font-size: 15px;
   span{display: inline-block;text-align: center;}
}
.footerBnt{display: flex;align-items: center;justify-content: space-between;position: fixed;bottom: 0;width: 100%;height: 45px; 
           box-shadow: 0px -2px 15px rgba(0,0,0,0.1);z-index: 10;
    .selectBtn{display: flex;align-items: center;padding-left: 7px;font-size: 18px;font-weight: 100;color: #8e8e8e;}
    .cartBtn{display: flex;justify-content: center;align-items: center;font-size: 18px;font-weight: 100;color: #8e8e8e;}
    .price{margin-right: 15px;font-size: 17px;}
    .price span{display: block;font-size: 24px;color: rgb(252,110,1);}
    .btn{background-image: -webkit-linear-gradient(0deg, rgb(255,191,3), rgb(252,148,53));height: 45px;line-height: 45px; width: 90px;text-align: center;color: #fff;border: none;outline: 0;}
}
</style>