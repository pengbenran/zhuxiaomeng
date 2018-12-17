<template>
  <div class="address" v-wechat-title="$route.meta.title">
    <div class="addressList" v-for="(item,index) in addressArray" :key="item.addrId":index="index">
    	<div @click="jumpOrder(index)">
       <div class="name">
        <span>{{item.name}}</span>
        <span class="icon" v-if="item.defAddr==1">默认</span>
      </div>
      <div class="tel">
        {{item.mobile}} 
      </div>
      <div class="addre">
        {{item.province}}-{{item.city}}-{{item.region}}-{{item.addr}}
      </div> 
      </div>  
    	<div class="addressBottom">
    		<span class="moren" v-if="item.defAddr==0" @click="defaultAddr(item.addrId)">
    			<!-- <span class="selectIcon"></span> -->
    		<img  src="../assets/img/nochoose.png"/>
        设为默认地址
        </span>
        <span class="moren" v-if="item.defAddr==1" @click="defaultAddr(item.addrId)">
				<img src="../assets/img/choose.png"/>
    				默认地址</span>
    		<span class="edit"  @click="edits(item.addrId)"><img src="../assets/img/edit.png">编辑</span>
    		<span class="del" @click="delAddr(item.addrId)"><img src="../assets/img/del.png">删除</span>
    	</div>
    </div>
    <div class="addAddressBtn" @click="addAddress">新增地址</div>
  </div>
</template>

<script>
import ProtoTypeAPI from '../network/apiServer'
import { Toast, MessageBox} from 'mint-ui';
import store from '../store/store'
export default {
  name: 'addressList',
  data () {
    return {
    addressArray:[]
    }
  },
  components:{
   
  },
  mounted(){
   let that=this
   that.getAllAddress()
  },
  methods:{
    jumpOrder(e){
      let that=this
      if(store.state.jumpFrom=="Order"){
        store.commit("storeuserAddr",that.addressArray[e])
        that.$router.push({ path:'order'})
      }
    },
    async getAllAddress(){
      let that=this
      let memberId=store.state.userInfo.memberId
      let addressRes=await that.API.getAllAddress(memberId)
      that.addressArray=addressRes.data.memberAddressList 
    },
    async defaultAddr(addrId){
      let that=this
      let params = {}
      let address={}
      address.memberId=store.state.userInfo.memberId
      address.defAddr=1
      address.addrId=addrId
      params.address = address
      let editAddr=await that.API.editAddr(params)
      if(editAddr.data.code==0){
        Toast('设置成功');
        that.getAllAddress()
      }
    },
  	addAddress(){
  		this.$router.push({ path:'addAddress'});
  	},
   edits(addrId){
    let that=this
    that.$router.push({ name:'addAddress',params:{
        addrId:addrId
    }});
  },
  delAddr(addrId){
    var that= this  
    var parms = {}
    parms.addrId =addrId
    MessageBox({
      title: '提示',
      message: '是否删除该地址',
      showCancelButton: true,
      confirmButtonText:'确定'
    }).then(action => {
      if(action=="confirm"){
       that.API.deleteAddress(parms).then(function(res){
        if(res.data.code==0){
         that.addressArray=that.addressArray.filter((item => item.addrId!=addrId ))  
         Toast('删除成功'); 
       }
     })
     }
   })
  }
  }
}
</script>
<style scoped>
.address{
	height: 80%;
	background: #f3f3f3;
  overflow: scroll;
}
.addressList{
	background: #fff;
	padding: 10px;
	box-sizing: border-box;
  margin-bottom: 10px;
}
.name{
	height:30px;
	line-height: 30px;
	font-size: 18px;
}
.icon{height:25px;line-height:25px;float: right;font-size: 14px;width: 60px;text-align: center;background: #E7A433;color: #fff;border-radius: 15px;}
.tel{height:35px;line-height: 35px;}
.addre{
	color: #A6A6A6;border-bottom: 1px solid #ccc;height:35px;line-height: 35px;overflow: hidden;
text-overflow:ellipsis;white-space: nowrap;width: 350px;
}
.addressBottom{
	height:40px;line-height: 40px;font-size: 16px;display: flex;justify-content: space-between;
}
.moren{display: inline-block;width: 200px;}
.edit,.del{display: inline-block;flex-grow: 1;}
.edit img,.del img{width: 20px; height:20px;display: inline-block;vertical-align:middle;margin-right: 3px;}
.moren img{display: inline-block;width: 25px;height:25px;vertical-align:middle;}
.addAddressBtn{
position: fixed;bottom: 40px;left: 5%;width: 90%;background:rgb(252,154,47);margin: auto;text-align: center;
   color: #fff;font-weight: 100;font-size: 16rpx;line-height: 40px;line-height: 40px;border-radius: 10px;
}
</style>