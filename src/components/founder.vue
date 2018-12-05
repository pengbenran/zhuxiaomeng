<template>
	<div class="founder">
		<div class="top">
			<img src="../assets/img/touxiang.png" alt="" class="pic">
			<p>熊出没战队熊大</p>
			<div class="he"><img src="../assets/img/tuandui.png" alt="" class="pic1"><span>金牌推手</span></div>
		</div>
		<div class="tis"><span>股东规则</span></div>
		<div class="people">
			<Progress :percent="50" status="wrong">
				<Icon type="checkmark-circled"></Icon>
			</Progress>
			<div class="txt"><span>直推人数</span><span>1/2</span></div>
			<div class="btn"><button>升级</button></div>
		</div>
	</div>
</template>

<script>
	import {
		Progress,
		Icon
	} from 'iview';
	export default {
		name: 'founder',
		data() {
			return {}
		},
		components: {
			Progress,
			Icon
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

	.top p {
		padding-top: 10px;
		color: #F3F2F1;
	}

	.top .he {
		padding-top: 10px;
	}

	.top span {
		color: #F3F2F1;
	}

	.top .pic1 {
		width: 20px;
		height: 20px;
		vertical-align: middle;
	}

	.tis {
		padding: 10px;
	}

	.people {
		width: 100%;
		height: 186px;
		border: 1px solid #ccc;
		text-align: center;
		padding: 10px;

	}

	.txt {
		display: flex;
		justify-content: space-around;
	}

	.txt span {
		color: red;
	}

	.btn {
		text-align: center;
	}

	.btn button {
		width: 80%;
		height: 40px;
		border: 0;
		margin-top: 60px;
		background: #7F7F7F;
		border-radius: 2px;
		font-size: 18px;
		color: #fff;
	}
</style>
