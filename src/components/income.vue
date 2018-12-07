<template>
  <div class="income" v-wechat-title="$route.meta.title">
	  <div class="top">
		  <h3>2013.14</h3>
		  <p>查看具体参数与报表<img src="../assets/img/fanhui.png" alt="指示头"></p>  
		  <div class="jishuan">
			  <span>待结算<p>0</p></span>
			  <span>已结算<p>2013.14</p></span>
		  </div>
	  </div>
	  <!-- 结算详细 -->
	  <div class="xianxi">
		  <h3>小明<p>2018-11-13 12:00:00</p></h3>
		  <p>已结算<img src="../assets/img/qiandai.png" alt=""><h3>2013.14</h3></p>
	  </div>   
  </div>
</template>

<script>
export default {
  name: 'income',
  data () {
    return {
    
    }
  }
}
</script>
<style scoped>
	em{
		font-style:normal;
		vertical-align: middle;	
	}
	.income{
		width:100%;
		height:100%;
	}
	.top{
		background:url(../assets/img/beijing.png);
		background-size: 100% 100%;
		width:100%;
		height:200px;			
	}
	.top h3,.top p{
		color:#fff;
		text-align:center;
		vertical-align:middle;
		padding-top: 20px;
	}
	.top img{
		width:6px;height:12px;
		margin-left:8px;
		vertical-align:middle;
	}
	.jishuan{
		margin-top:20px;
		display:flex;
		justify-content:space-around;
		vertical-align:middle;	
	}
   .jishuan span{
		color:#fff;
		vertical-align:middle;
		text-align: center;     
	}
	.xianxi{
		display: flex;
		justify-content: space-between;
		vertical-align: middle;
		margin-top: 5px;
	}
	.xianxi h3{
		font-weight:normal;
	}
	.xianxi img{
		width:20px;
		height:20px;
		vertical-align: middle;
	}

</style>
