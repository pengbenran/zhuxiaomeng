<template>
	<div class="shopping" v-wechat-title="$route.meta.title">
		<div class="kong">
			<img src="../assets/img/kong.png" alt="" style="width: 150px;height: 160px;">
			<h3>购物车快饿扁了</h3>
			<p style="color: #DCDEE2;">主任快点给我挑点宝贝吧!</p>
		</div>
		<div class="qu">
			<p>去逛逛</p>
		</div>
	</div>
</template>
<script>
	export default {
		name: 'shopping',
		data() {
			return {

			}
		}
	}
</script>
<style scoped>
	.kong{
		margin-top: 120px;
		text-align: center;
	}
	.qu{
		width: 20%;
		height: 30px;
		margin: 0 auto;
		margin-top: 10px;
		border: 1px solid #F0A13C;
	}
	.qu p{
		text-align: center;
		line-height: 30px;
		color: #F0A13C;
	}
</style>
