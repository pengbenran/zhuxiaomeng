<template>
  <div class="hello">
	<div class="top">
	  <img src="../assets/img/yinghangka.png" alt="">
	  <span>银行卡</span>
	</div>
	<div class="inpwrap ">
	  <div class="inp">
		<p>真实姓名</p>
		<input type="text" placeholder="请填写您的真实姓名">
	  </div>
	  <div class="inp">
		  <p>手机号码</p>
		  <input type="text" placeholder="请填写您的电话号码">
	  </div>
	  <div class="inp">
		 <input type="text" placeholder="请填写您需要绑定得账号">
	  </div>
	  <div class="inp">	 
		 <input type="text" placeholder="请填写您的开户银行">
	  </div>
	  <div class="inp">
		  <input type="text" placeholder="开户行所属支行">
	  </div>  
	</div> 
	<div  class="btn">
	   <button>确认</button>
	</div>
  </div>
</template>

<script>
export default {
  name: 'card',
  data () {
    return {
    
    }
  }
}
</script>
<style scoped>
	.top{
		width: 100%;
		margin-top: 30px;		
		border-bottom: 1px solid #EAEAEA;
		padding: 20px ;	
		}
	.top img{
		display: block;
		margin: 0 auto;		
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

	.btn button{
		color: #fff;
		line-height: 40px;
		width: 80%;
		height: 40px;
		background: #2B8CFF;
		border-radius:4px;
		border: 0;
		margin-top: 20px;
	}				
</style>