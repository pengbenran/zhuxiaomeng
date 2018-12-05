<template>
  <div class="memberInformation" v-wechat-title="$route.meta.title">
	  <div class="topwrap">
		  <div class="top">
			  
		  </div>
		  <div class="xiaof">
			  <div>
				  <img src="../assets/img/qiandai.png" alt="">
				  <span>消费总额</span>
			  </div>
			  <div class="edu">
				  <span class="span1">￥0.00</span>
			  </div>	  
		  </div>
	  </div>
	  <div class="jux">
		  <p>基本信息</p>
	  </div> 
	  <div class="inpwrap ">
		<div class="right">
				<div class="inp">
					<p>姓名:</p>
					<input type="text" >
				</div>
				<div class="inp">
					<p>性别:</p>
					<input type="text" >
					<div >
						<img src="../assets/img/nan.png" alt="" style="width: 16px; height: 16px;">
						<span>男</span>
					</div>
				</div>
				<div class="inp">
					<p>微信号:</p>
					<input type="text">
					<div><span>未填写</span></div>
				</div>
				<div class="inp">
					<p>QQ:</p>
					<input type="text" >
					<div><span>未填写</span></div>
				</div>
				<div class="inp">
					<p>生日:</p>
					<input type="text">
					<div><span>2018-11-19</span></div>
				</div>
				<div class="inp">
					<p>地区:</p>
					<input type="text" >
					<div >
						<img src="../assets/img/weiz.png" alt="" style="width: 10px; height: 16px;">
						<span>江西 南昌</span>
					</div>
				</div>
				<div class="inp">
					<p>微信二维码:</p>
					<input type="text" >
					<img src="../assets/img/saosao.png" alt="" style="border: 1px solid #ccc;">
				</div>
				<div class="inp">
					<p>职业:</p>
					<input type="text">
					<div><span>未填写</span></div>
				</div>
			</div>		
			</div>
		</div>	
  </div>
</template>

<script>
export default {
  name:'teamr',
  data () {
    return {
    
    }
  }
}
</script>
<style scoped>
	.top{
		width: 100%;
		height:150px ;
		background: #E7A433;
	}
	.xiaof{
		display: flex;
		justify-content: space-between;
		margin: 20px 10px;
		/* border: 1px solid red;*/
	}
	.xiaof img{
		width: 16px;
		height: 16px;
		vertical-align: middle;
	}
	.xiaof span{
		vertical-align: middle;		
	}
	.jux {
		display: flex;
		justify-content: space-between;
		line-height: 40px;
		padding: 0 5px;
		width: 100%;
		height: 40px;
		background:#EAEAEA;
		border-radius: 2px;
	}
	.inpwrap{
			display: flex;
			flex-direction:column;
			
			}
			.inp input{
				border: 0;
				
			}
		.inp{
			display: flex;
			justify-content: space-between;
			border-bottom: 1px solid #EAEAEA;;
			padding: 10px ;			
		}
	
	

</style>