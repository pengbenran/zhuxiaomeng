<template>
  <div class="apply" v-wechat-title="$route.meta.title">
     <div class="top">
     	<img src="../assets/img/touxiang.png" alt="" class="pic">
     	<p>熊出没战队熊大</p>
     	<div class="he"><img src="../assets/img/tuandui1.png" alt="" class="pic1"><span>金牌推手</span></div>
     </div>
	 <div class="tis"><span>股东规则</span></div>
	 <div class="kuangwrap">
		 <div class="kuang">
			 <div class="picwrap">
				<img src="../assets/img/juxing.png" alt="" class="images1">
				<img src="../assets/img/saosao.png" alt="" class="images2">
			 </div>	
			 <div class="bom">
				 <p>恭喜你!</p>
				 <p>你现在已经是举世无双的高手了</p>
				 <p>赶紧去享受一下您的权益吧!</p>
			 </div>	
		 </div>		 
	 </div>
  </div>
</template>

<script>
export default {
  name: 'apply',
  data () {
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
   		width:18px;
   		height:12px;
		text-align:center;
   		vertical-align:middle;
   	}
	.tis {
		padding: 10px;
	}
	.kuangwrap{
		width:100%;
		height:260px;
	}
	.kuang{
		width:80%;
		height:260px;
		margin: 0 auto;
		border: 1px dashed #ccc;
	}
	.picwrap{
		text-align:center;
		line-height:30px;			
	}
	.picwrap .images1{  
		margin-top:20px;
		width:100px; 
		height:100px;
	}
	 .images2{
		width:44px; 
		height:28px;
		position: fixed;
		margin:55px -71px;
        text-align:center;		
	}
   .bom{
	   margin-bottom:40px;
	   text-align: center;
   }
   .bom p:first-child{
	   color:#F0A13C ;
	   font-size: 20px;
   }
   .bom p{
	   margin-top:10px;
   }
</style>
