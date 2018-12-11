<template>
  <div class="income" v-wechat-title="$route.meta.title">
	  <div class="top">
		  <h1>2013.14</h1>
		  <p>查看具体参数与报表<img src="../assets/img/fanhui.png" alt="指示头"></p>  
		  <div class="jishuan">
			  <span>待结算<p>0</p></span>
			  <span>已结算<p>2013.14</p></span>
		  </div>
	  </div>
	  <!-- 结算详细 -->
	  <div class="xianxi">
		  <div class="left">小明<p>2018-11-13 12:00:00</p></div>
		  <!-- <p>已结算<img src="../assets/img/qiandai.png" alt=""><h3></h3></p> -->
		  <div class="right"><span class="info">已结算</span><img src="../assets/img/qiandai.png" alt=""><span class="price">2013.14</span></div>
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
<style scoped lang='less'>
	em{
		font-style:normal;
		vertical-align: middle;	
	}
	.income{background: #f3f3f3;min-height: 100vh;
		width:100%;
		height:100%;
	}
	.top{		font-size: 15px;
		background:url(../assets/img/beijing.png);
		background-size: 100% 100%;
		width:100%;
		height:220px;	padding-top: 16px;		
	}
	.top h1,.top p{
		color:#fff;
		text-align:center;
		vertical-align:middle;
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
		padding: 10px;
		background: #fff;
		font-size: 16px;
	}
	.xianxi{
	   .right{height: 35px;line-height: 35px;}
	   .info{margin-right: 12px;}
	   .price{margin-left: 8px;font-size: 14px;}
	   .left p,.info{color: #8e8e8e;font-size: 14px}
	}

	.xianxi img{
		width:20px;
		height:20px;
		vertical-align: middle;
	}

</style>
