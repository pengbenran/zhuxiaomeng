<template>
	<div class="Prerogative" v-wechat-title="$route.meta.title">
		<!-- 头部 -->
		<div class="top">
			<img src="../assets/img/touxiang.png" alt="" class="pic">
			<p>熊出没战队熊大</p>
			<div class="he"><img src="../assets/img/4.png" alt="" class="pic1"><span>合伙人</span></div>
		</div>
		<!-- 信息 -->
		<div class="tuishou">
			<div class="inforright">
				<img src="../assets/img/tuandui1.png" alt="">
				<div class="a">
					<h3>金牌推手</h3>
					<p>现成为推手才能选择其它</p>
				</div>
			</div>
			<div class="inforleft">
				<span>申请</span>
				<img src="../assets/img/1.png" alt="">
			</div>
		</div>
		<div class="tuishou1">
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
		</div>
		<!--  -->

	</div>
</template>

<script>
	export default {
		name: 'Prerogative',
		data() {
			return {

			}
		}
	}
</script>
<style scoped>
	.top {
		width: 100%;
		height: 180px;
		background: #E7A433;
		text-align: center;
	}
	.top .pic {
		width: 60px;
		height: 60px;
		margin-top: 10px;
	}
	.top .he,
	.top p {
		padding-top: 10px;
	}
	.top span,
	.top p {
		color: #F3F2F1;
	}
	.top .pic1 {
		width: 20px;
		height: 20px;
		vertical-align: middle;
	}
	/*信息*/
	.tuishou{
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: 20px;
	}
	.tuishou1,.inforleft{
		margin-top:20px;
		}
	.tuishou1{
		background:#ECECEC;
	}
	.inforright .a,.inforright1 .b{
		display: inline-block;
		margin-left: 10px;
	}
	.inforright img {
		width: 36px;
		height: 23px;
	}
	.inforleft,
	.inforleft img {
		vertical-align: middle;
	}
	.inforleft img {
		width: 10px;
		height: 18px;
		margin-left: 6px;
	}
</style>
