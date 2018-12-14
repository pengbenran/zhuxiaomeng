<template>
	<div class="bindBankCard" v-wechat-title="$route.meta.title">
		<div class="top">
			<img src="../assets/img/yinghangka.png" alt="" mode="widthFix">
		</div>
		<mt-field label="用户姓名" placeholder="请输入真实姓名" v-model="UserName"></mt-field>
		<mt-field label="手机电话" placeholder="请输入真实手机号码" type="tel" v-model="UserPhone"></mt-field>
		<mt-field label="身份证号码" placeholder="请输入身份证号码" v-model="UserIdCard"></mt-field>
		<mt-field label="银行卡卡号" placeholder="请输入收款银行卡卡号" v-model="UserBankCard"></mt-field>
		<mt-field label="开户银行" placeholder="请输入开户银行" v-model="bankName"></mt-field>
		<button class="btn" @click="submit" :disabled="isDisabled">绑定银行卡</button>
	</div>
</template>

<script>
	import { Field } from 'mint-ui'
	import { Button } from 'mint-ui';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	import store from '../store/store'
	export default {
		name: 'bindBankCard',
		data() {
			return {
				isDisabled:false,
				UserName:'',
				UserPhone:'',
				UserIdCard:'',
				UserBankCard:'',
				bankName:''
			}
		},
		components:{
		  "mt-field":Field,
		  "mt-button":Button
		},
		methods:{
			async submit(){
				let that=this
				if (that.UserName == '') {
					Toast('姓名不能为空');
					// Lib.Show('姓名不能为空','loading',1000)
				} 	
				else if (that.UserPhone == '') {
					Toast('电话不能为空');
					
				}
				else if(that.UserIdCard == "" || that.UserIdCard.length!=18){
					Toast('身份证格式错误');
				}
				else if (that.UserBankCard == "") {
		  		  Toast('银行卡号为空');
				
				}
				else if (that.bankName == "") {
					Toast('开户银行为空');
				} else {
					Indicator.open({
						text: '请稍等...',
						spinnerType: 'fading-circle'
					});
					that.isDisabled=true;
					var params = {}
					params.name = that.UserName
					params.mobile = that.UserPhone
					params.memberId = store.state.userInfo.memberId
					params.midentity = that.UserIdCard
					params.cardno = that.UserBankCard
					params.depositBank = that.bankName
 					let submitBankCardRes = await that.API.SubmitBankCard(params)
 					if(submitBankCardRes.data.code==0){
 						Toast({
 							message: '绑定成功',
 							iconClass: 'fa fa-check fa-5x'
 						});

 					}
 					else{
 						Toast({
 							message: '您已绑定过银行卡了',
 						});
 					}
 				   that.$router.push({ path: 'Assets'});
 				   Indicator.close();
				}
			}
		}
	}
</script>
<style scoped>
	.top {
		margin: 30px auto;
		text-align: center;
	}
  .btn{
  	width: 90%;
  	height: 50px;
  	margin: 10px auto;
  	background:#FFA914;
  	font-size: 18px;
  	line-height: 50px;
  	color: #fff;
  	border-radius: 10px;
  	text-align: center;
  	border: none;
  	display: block;
  	padding: 0;
  }
	
</style>
