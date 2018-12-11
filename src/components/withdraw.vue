<template>
  <div class="withdraw" v-wechat-title="$route.meta.title">
      <div class="warp">
       <div class="headerTop">
           <div class="topItem">到账银行卡：</div>
           <div class="topMoeny">
				<p>{{depositBank}}</p>
				<p>{{cardno}}</p>
           </div>
       </div>
       <div class="FromNum">
           <div class="title">提现金额</div>
           <div class="titleFrom">
               <span>￥</span><input type="number" placeholder='请输入提现金额' v-model="Num" />
           </div>
       </div>
       <div class="tip"><span class="qian">当前账户余额{{userInfo.advance}}元</span><span class="Allmoney" @click="Allmoney">全部提现</span></div>
       <!-- <div class="liTixian"><span @click="putforwardbtn">立即提现</span></div> -->
       <button class="btn" @click="putforwardbtn"  :disabled="isDisabled">提现申请</button>
       </div>
  </div>
</template>

<script>
import { Toast, Indicator} from 'mint-ui';
import store from '../store/store'
import ProtoTypeAPI from '../network/apiServer'
export default {
  name:'withdraw',
  data () {
    return {
    Num:'',
    cardno:'',
    depositBank:'',
    isDisabled:false,
    userInfo:{}
    }
  },
  methods:{
  	bindBankCard(){
  	  this.$router.push({ path:'bindBankCard'});
  	},
  	async putforwardbtn(){
  		let that = this;
  		if(that.userInfo.advance*1 <that.Num*1){
			Toast('余额不足');
  		}else{
  			Indicator.open({
  				text: '请稍等...',
  				spinnerType: 'fading-circle'
  			});
  			that.isDisabled=true;
  			let params = {}
  			params.memberId = that.userInfo.memberId
  			params.amount = that.Num
  			let res = await that.API.Withdraw(params)
  			if(res.data.code == 0){
  				Indicator.close();
  				Toast({
  					message: '提现申请成功',
  					iconClass: 'icon icon-success'
  				});
  				that.userInfo.advance = that.userInfo.advance-that.Num
  				store.commit("storeUserInfo",that.userInfo)
  				that.Num = ''
  				setTimeout(function(){
  					 that.$router.push({ path: 'Assets'});
  				},1000)
  			}
  		} 
  	},
  	Allmoney(){
 	   let that = this;
       that.Num = that.userInfo.advance
  	}
  },
  mounted(){
  	let that=this
  	that.userInfo=store.state.userInfo
  	that.cardno=that.$route.params.cardno
  	that.depositBank=that.$route.params.depositBank
  }
}
</script>
<style scoped lang='less'>
img{display: block;height: 100%;width: 100%}	
.withdraw{background: #f8f8f8;padding-top: 1rpx;min-height: 100%;}
.warp{margin: 7px;padding: 10px;background: #fff;padding-top: 1px;}
.headerTop{padding: 10px;font-size: 17px;font-weight: 100;display: flex;
.topItem{padding: 5px;box-sizing: border-box;}
}
.FromNum{padding: 10px;font-size: 17px;font-weight: 100;}

.tip{padding: 0 10px;font-size: 16px;font-weight: 100;
  .qian{color: #ccc;}
  .Allmoney{color: #FFA914;padding: 4px 7px;border-radius: 15px;}
}
.titleFrom{border-bottom: 1px solid rgba(204, 204, 204);height:50px;line-height: 50px;
span{
	font-size: 24px;
	padding: 5px;
	box-sizing: border-box;
	display: inline-block;
}
input{
	border: none;
	outline: 0;
	height:100%;
	font-size: 24px;
	display: inline-block;
	width: 200px;
	}}
.btn{
  	width: 90%;
  	height: 40px;
  	margin: 10px auto;
  	background:#FFA914;
  	font-size: 18px;
  	line-height: 40px;
  	color: #fff;
  	border-radius: 10px;
  	text-align: center;
  	border: none;
  	display: block;
  	padding: 0;
  }
 
</style>