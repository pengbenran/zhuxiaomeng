<template>
  <div class="apply" v-wechat-title="$route.meta.title">
     <div class="top">
     	<img :src="userInfo.face" alt="">
     	<p>{{userInfo.uname}}</p>
     	<!-- <div class="he"><img src="../assets/img/tuandui1.png" alt="" class="pic1"><span>{{userInfo.lvidname}}</span></div> -->
     </div>
	 <div class="tis"></div>
	 <div class="kuangwrap">
		 <div class="kuang">
			 <div class="picwrap">
				<img src="../assets/img/juxing.png" alt="" class="images1">
				<img src="../assets/img/saosao.png" alt="" class="images2">
			 </div>	
			 <div class="bom">
				 <p>恭喜你!</p>
				 <p>你现在已经是金牌推手</p>
				 <p>赶紧去享受一下您的权益吧!</p>
			 </div>	
		 </div>		 
	 </div>
  </div>
</template>

<script>
import store from '../store/store'
export default {
  name: 'apply',
  data () {
    return {
    userInfo:{},
    }
  },
  mounted(){
  	this.userInfo=store.state.userInfo
  }
}
</script>
<style scoped>
   .top {
   		width: 100%;
        padding: 10px;
   		background: #E7A433;
   		text-align: center;
   		height:150px;
   	}   
   	.top img{
   		width: 60px;
   		height: 60px;
   		border-radius: 50%;
   	}  
   	.top p{
   		height:20px;
   		line-height: 20px;
   		color: #F3F2F1;
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
