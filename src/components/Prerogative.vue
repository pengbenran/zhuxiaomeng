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
		<div class="privilege">
			<div class="icon">
			  <img src="../assets/img/tuandui1.png" alt="">
			</div>		
			<div class="itro">
				<p>金牌推手</p>
				<p class="identityitro">现成为推手才能选择其它</p>
			</div>
		</div>
		<div class="privilege">
			<div class="icon">
			  <img src="../assets/img/2.png" alt="">
			</div>		
			<div class="itro">
				<p>合伙人</p>
				<p class="identityitro">现成为推手才能选择其它</p>
			</div>
		</div>
		<div class="privilege">
			<div class="icon">
			  <img src="../assets/img/3.png" alt="">
			</div>		
			<div class="itro">
				<p>联合创始人</p>
				<p class="identityitro">现成为推手才能选择其它</p>
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
	export default {
		name: 'Prerogative',
		data() {
			return {
				userInfo:{}
			}
		},
		mounted(){
			this.userInfo=store.state.userInfo
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
