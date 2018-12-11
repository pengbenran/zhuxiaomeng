<template>
  <div class="withdraw" v-wechat-title="$route.meta.title">
	  <div class="zhifu">
		  <div class="a">
			  <div>
				  <img src="../assets/img/weixin.png" alt=""  style="margin-right:2px;">
				  <span>微信支付</span>
		      </div>
			  <div>
				  <span>去绑定<img src="../assets/img/1.png" alt="" class="ItemRight"  style="margin-left:6px;"></span>
			  </div>
		  </div>
		  <div class="a " @click="bindBankCard">
			  <div>
				  <img src="../assets/img/yinghangka.png" alt="" style="margin-right:2px;">
				  <span>银行卡支付</span>
		       </div>
			   <div>
				   <span>去绑定<img  class="ItemRight" src="../assets/img/1.png" alt="" style="margin-left:6px;"></span>
			   </div>
		  </div>
	  </div>
	  <div  class="tixian">
		  <div class="tix">
		  	<span>提现记录</span>
		  </div>
		  <div class="btn1">
		  	<button>提现账号管理</button>
		  </div>
		  <div class="btn2">
		  	<button>确认</button>
		  </div>   
	  </div>  
  </div>
</template>

<script>
export default {
  name:'withdraw',
  data () {
    return {
    
    }
  },
  methods:{
  	bindBankCard(){
  	  this.$router.push({ path:'bindBankCard'});
  	}
  }
}
</script>
<style scoped lang='less'>
	
	.withdraw{
		width:100%;
		height:100%;
	    background:#F2F2F2;	
	}
	.zhifu{
		background: #fff;
	}
	.zhifu .a,.zhifu .b{
		display: flex;
		justify-content: space-between;
		text-align: center;
		padding:16px;
		border-top: 1px solid #f3f3f3;	
	}
	.zhifu img{
		display: inline-block;
		width:20px;
		height:20px;
		vertical-align: middle;
	}
	.tix span{
		color:#2B8CFF;
	} 
	.tixian{
		margin-top: 20px;
		text-align: center;
	}
	.btn1 button,.btn2 button{
		width:80%;
		height:40px;
		background:#FFA914;
		color:#fff;
		font-size:16px;
		margin-top:20px;
		border-radius:2px;
		border:0;
	}
	.btn2 button{
		background:#2B8CFF;

	}

   
   .zhifu .ItemRight{width: 14px;height: 20px;}
 
</style>