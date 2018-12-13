<template>
	<div class="Prerogative" v-wechat-title="$route.meta.title">
		<!-- 头部 -->
		<div class="top">
			<div class="avator">
			  <img :src="userInfo.face" alt="">
			</div>
			<p>{{userInfo.uname}}</p>
			<div class="identity"><img src="../assets/img/4.png" alt=""><span>{{userInfo.lvidname}}</span></div>
		</div>
		<!-- 信息 -->
		<div class="privilege" @click="jumpApply">
			<div class="icon">
			  <img src="../assets/img/tuandui1.png" alt="">
			</div>		
			<div class="itro">
				<p>{{memberList[1].name}}</p>
				<p class="identityitro">购买商品立刻成为</p>
			</div>
		</div>
		<div class="privilege" @click="jumpPartner">
			<div class="icon">
			  <img src="../assets/img/2.png" alt="">
			</div>		
			<div class="itro">
				<p>{{memberList[2].name}}</p>
				<p class="identityitro">培养{{memberList[1].point}}个金牌代理可成为合伙人</p>
			</div>
		</div>
		<div class="privilege" @click="jumpFounder">
			<div class="icon">
			  <img src="../assets/img/3.png" alt="">
			</div>		
			<div class="itro">
				<p>{{memberList[3].name}}</p>
				<p class="identityitro">培养{{memberList[2].point}}个合伙人可成为联合创始人</p>
			</div>
		</div>
<!-- 		<div class="tuishou1">
			<div class="inforright1">
				<img src="../assets/img/2.png" alt="" style="width: 32px;height:36;">
				<div class="b">
					<h3>合伙人</h3>
					<p>现成为推手才能选择其它</p>
				</div>
			</div>
			<div class="inforright1" style="margin-top: 30px;">
				<img src="../assets/img/3.png" alt="" style="width: 36px;height:36;">
				<div class="b">
					<h3>联合创始人</h3>
					<p>现成为推手才能选择其它</p>
				</div>
			</div>
		</div> -->
		<!--  -->

	</div>
</template>

<script>
	import store from '../store/store'
	import { MessageBox,Toast } from 'mint-ui';
	import ProtoTypeAPI from '../network/apiServer'
	export default {
		name: 'Prerogative',
		data() {
			return {
				userInfo:{},
				memberList:[{name:''},{name:''},{name:''},{name:''}]
			}
		},
		methods:{
		  jumpApply(){
		  	let that=this
		  	if(that.userInfo.defaultLv==1){
		  		MessageBox({
		  			title: '提示',
		  			message: '您还不是金牌代理,是否立即成为',
		  			showCancelButton: true,
		  			confirmButtonText:'立即成为'
		  		}).then(action => {
		  			if(action=="confirm"){
		  				that.$router.push({ path: 'home'});
		  			}
		  		})
		  	}
		  	else{
		  	  that.$router.push({ path: 'apply',query:{lvTitle:'金牌代理'}});
		  	}
		  },
		  jumpPartner(){
		  	let that=this
		  	if(that.userInfo.defaultLv==1){
		  		MessageBox({
		  			title: '提示',
		  			message: '您还不是金牌代理,是否立即成为',
		  			showCancelButton: true,
		  			confirmButtonText:'立即成为'
		  		}).then(action => {
		  			if(action=="confirm"){
		  				this.$router.push({ path: 'home'});
		  			}
		  		})
		  	}
		  	else{
		  		this.$router.push({ path: 'Partner',query:{lvTitle:that.memberList[2].name}});
		  	}
		  },
		  jumpFounder(){
		  	let that=this
		  	if(that.userInfo.defaultLv==1){
		  		MessageBox({
		  			title: '提示',
		  			message: '您还不是金牌代理,是否立即成为',
		  			showCancelButton: true,
		  			confirmButtonText:'立即成为'
		  		}).then(action => {
		  			if(action=="confirm"){
		  				this.$router.push({ path: 'home'});
		  			}
		  		})
		  	}
		  	else if(that.userInfo.defaultLv==2){
                Toast('请先成为合伙人');
		  	}
		  	else{
		  		this.$router.push({ path: 'Founder',query:{lvTitle:that.memberList[3].name}});
		  	}
		  }
		},
		async mounted(){
			let that=this
			that.userInfo=store.state.userInfo
			let memberListRes=await that.API.memberLvList()
			that.memberList=memberListRes.data.memberLvList
		}
	}
</script>
<style scoped lang="less">
 img{
 	width:100%;
 	height:100%;
 	display: block;
 }
	.top {
		width: 100%;
		height: 180px;
		padding: 20px;
		box-sizing: border-box;
		background: #E7A433;
		text-align: center;
		color: #fff;
		font-size: 16px;
		.avator{
			width:60px;
			height:60px;
			overflow: hidden;
			margin: 0 auto;
			border-radius: 50%;
		}
		p{margin: 10px 0;}
		.identity{
			margin: 0 auto;
			img{
				width:20px;
				height:20px;
				display: inline-block;
				vertical-align:middle;
			}
		}
	}

	/*信息*/
	.privilege{
		width:100%;
		display: flex;
		height:80px;
		padding: 10px;
		box-sizing: block;
		.icon{
			width:60px;
			height:60px;
			padding: 12px;
			box-sizing: border-box;
			overflow: hidden;
		}
		.itro{
			padding: 10px 0;
			box-sizing: border-box;
		}
		.itro p{
			font-size: 18px;
		}
		p.identityitro{
			font-size: 14px;
		}
	}
</style>
