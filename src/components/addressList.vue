<template>
  <div class="address" v-wechat-title="$route.meta.title">
    <div class="addressList" v-for="(item,index) in addressArray" :key="item.addrId":index="index">
    	<div class="name">
    		<span>{{item.name}}</span>
    		<span class="icon">默认</span>
    	</div>
    	<div class="tel">
    		{{item.mobile}}	
    	</div>
    	<div class="addre">
    		{{item.province}}-{{item.city}}
    	</div>
    	<div class="addressBottom">
    		<span class="moren">
    			<!-- <span class="selectIcon"></span> -->
    			<img src="../assets/img/nochoose.png"/>
				<!-- <img src="../assets/img/choose.png"/> -->
    				设为默认地址</span>
    		<span class="edit"><Icon type="ios-create-outline" />编辑</span>
    		<span class="del"><Icon type="ios-trash-outline" />删除</span>
    	</div>
    </div>
    <div class="addAddressBtn" @click="addAddress">新增地址</div>
  </div>
</template>

<script>
import {Icon} from 'iview';
import ProtoTypeAPI from '../network/apiServer'
import store from '../store/store'
export default {
  name: 'addressList',
  data () {
    return {
    
    }
  },
  components:{
    Icon
  },
  async mounted(){
   let that=this
   let memberId=store.state.userInfo.memberId
   let addressRes=that.API.getAllAddress(memberId)
   that.addressArray=addressRes.data.memberAddressList
  },
  methods:{
  	addAddress(){
  		this.$router.push({ path:'addAddress'});
  	}
  }
}
</script>
<style scoped>
.address{
	height: 100%;
	background: #f3f3f3;
}
.addressList{
	background: #fff;
	padding: 10px;
	box-sizing: border-box;
}
.name{
	height:30px;
	line-height: 30px;
	font-size: 18px;
}
.icon{height:25px;line-height:25px;float: right;font-size: 14px;width: 60px;text-align: center;background: #E7A433;color: #fff;border-radius: 15px;}
.tel{height:35px;line-height: 35px;}
.addre{
	color: #A6A6A6;border-bottom: 1px solid #ccc;height:35px;line-height: 35px;
}
.addressBottom{
	height:40px;line-height: 40px;font-size: 16px;display: flex;justify-content: space-between;
}
.moren{display: inline-block;width: 200px;}
.edit,.del{display: inline-block;flex-grow: 1;}
.moren img{display: inline-block;width: 25px;height:25px;vertical-align:middle;}
.addAddressBtn{
position: absolute;bottom: 40px;left: 5%;width: 90%;background:rgb(252,154,47);margin: auto;text-align: center;
   color: #fff;font-weight: 100;font-size: 16rpx;line-height: 40px;line-height: 40px;border-radius: 10px;
}
</style>