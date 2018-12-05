<template>
<div class="order" v-wechat-title="$route.meta.title">
	<div class="AddressWarp">
		<div class="AddressBtn" v-if="!isAddr">
			请填写收货地址
		</div>
		<div class="Address" v-if="isAddr">
			<div class="Address-item">
				<div class="itemLeft">收货人</div>
				<div class="itemRight"><span>{{addr.name}}</span><span>{{addr.mobile}}</span></div>
			</div>
			<div class="Address-item">
				<div class="itemLeft">收货地址</div>
				<div class="itemRight">{{addr.addr}}</div>
			</div>
		</div>
	</div>
	<shopList :Shop_List='GoodItem'></shoplist>
		<div class="footerBnt">
			<div class="selectBtn"></div>
			<div class="cartBtn">
				<div class="price">合计：{{goodsAmount}}元</div>
				<div class="btn">结算</div>
			</div>
		</div>
	</div>
</template>

<script>
import shopList from '@/components/shoplist'
export default {
  name: 'order',
  data () {
    return {
    isAddr:false,
    GoodItem:[{image:'https://shop.guqinet.com/shopimages/guoran/d94c439e-5e45-4c5d-9cd6-307916091d74.png',name:'大葡萄',specvalue:'两斤装',price:'1.00',num:'2'}],
    goodsAmount:122
    }
  },
  components:{
  	shopList
  }
}
</script>
<style scoped lang="less">
.AddressWarp{padding: 40px 0;box-sizing: border-box;}
.Address{padding: 5px 12px;border-bottom: 1px solid rgb(244,244,244);
    .Address-item{display: flex;align-items: center;font-weight: 100;font-size: 16px;}
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
    .btn{background-image: -webkit-linear-gradient(0deg, rgb(255,191,3), rgb(252,148,53));height: 45px;line-height: 45px; width: 90px;text-align: center;color: #fff;}
}
</style>