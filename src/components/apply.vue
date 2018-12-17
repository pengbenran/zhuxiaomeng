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
				 <p>你现在已经是会员</p>
				 <p>赶紧去享受一下您的权益吧!</p>
			 </div>	
		 </div>		 
	 </div>
	 <Nav></Nav>
  </div>
</template>

<script>
import store from '../store/store'
import Nav from '@/components/Nav';
export default {
  name: 'apply',
  data () {
    return {
    userInfo:{},
    }
  },
  components:{
  	Nav
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
   		box-sizing: border-box;
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
	    padding: 20px;
	    box-sizing: border-box;
		margin: 0 auto;
		border: 1px dashed #ccc;
	}
	.picwrap{
		text-align:center;
		position: relative;			
	}
	.picwrap .images1{  
		width:100px; 
		height:100px;
	}
	 .images2{
		width:44px; 
		height:28px;
		position: absolute;
	    left: 42%;
	    top:34px;		
	}
   .bom{
	   text-align: center;
   }
   .bom p:first-child{
	   color:#F0A13C ;
	   font-size: 20px;
   }
   .bom p{
	 height:30px;
	 line-height: 30px;
   }
</style>
