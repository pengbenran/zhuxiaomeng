<template>
	<div class="myselfInfo" v-wechat-title="$route.meta.title">
		<div class="myselfPanel">
			<div class="info">
				<span>头像</span>
				<span class="avator">
					<img src="../assets/img/touxiang.png" alt="">
				</span>		
			</div>
			<div class="info">
				<span>微信二维码</span>
				<span>123131313</span>	
			</div>
			<div class="info">
				<span>我的ID</span>
				<span>123131313</span>
			</div>
			<div class="info">
				<span>微信昵称</span>
				<span>123131313</span>		
			</div>
			<div class="info">
				<span>微信</span>
				<span>123131313</span>	
			</div>
			<div class="info">
				<span>QQ</span>
				<span>123131313</span>	
			</div>
		</div>
		<div class="myselfPanelmore">
			<div class="info">
				<span>真实姓名</span>
				<span>123131313</span>	
			</div>
			<div class="info">
				<span>性别</span>
				<span>123131313</span>		
			</div>
			<div class="info">
				<span>生日</span>
				<span>123131313</span>
			</div>
			<div class="info">
				<span>职业</span>
				<span>123131313</span>	
			</div>
		</div>		

	</div>
</template>

<script>
	export default {
		name: 'myselfInfo',
		data () {
			return {

			}
		}
	}
</script>
<style scoped>
#app{
	height:100%;
}
img{
	width: 100%;
	height:100%;
	display: block;
}
em{
	font-style:normal;
	vertical-align: middle;	
}
.myselfInfo{
 background:#F2F2F2; 
 width: 100%;
 height:100%;
}

.myselfPanel{
	background:#fff;	
}
.myselfPanelmore{
	background:#fff;
	margin-top: 20px;	
}
.info .avator{
	width: 50px;
	height:50px;
	overflow: hidden;
	display: inline-block;
	margin-top: 5px;
}	
.info{
	display: flex;
	justify-content: space-between;
	border-bottom: .5px solid #F0F0F0;
	padding: 0 10px;
	box-sizing: border-box;
	height:60px;
	line-height: 60px;
}
.info span{
	display: inline-block;
	height:100%;
}
</style>