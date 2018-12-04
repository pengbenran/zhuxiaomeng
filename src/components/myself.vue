<template >
  <div id="myself">    
  <!--<mTabbar v-model="select"></mTabbar> --> 
       <div class="heid">      	
       </div>
			 <div class="title">
				  <div>
						<span>0.00</span >
						<span>零钱</span>
					</div>
					<div>
						<span>0</span >
						<span>全部积分</span>
					</div>
					<div>
						<span>0.00</span >
						<span>消费总额</span>
					</div>			
			 </div>
      <div class="orderwrap">
			 <div class="order">
				  <div class="orderright">
						<img src="../assets/img/shangcheng.png"/>
						<span>商城订单</span>
					</div>
					<div class="orderleft">
						 <img src="../assets/img/fanhui.png"/> 
					</div>	
				</div>						
				 <div class="titlepic">
						<div>
							<img src="../assets/img/daifukuan.png" alt="">
							<span>待付款</span>
						</div>
						<div>
							<img src="../assets/img/daifahuo.png" alt="">
							<span>待发货</span>
						</div>
						<div>
							<img src="../assets/img/daishouhuo.png" alt="">
							<span>待收货</span>
						</div>
						<div>
							<img src="../assets/img/daipinjia.png" alt="">
							<span>待评价</span>
						</div>
						<div>
							<img src="../assets/img/shouhouzhong.png" alt="">
							<span>售后中</span>
						</div>							
				 </div>
			 </div>	 		 
			 <div class="titlemodle">
					<div>
						<img src="../assets/img/zhichang.png" alt="">
						<p>我的资产</p>
					</div>
					<div>
						<img src="../assets/img/dequan.png" alt="">
						<p>我的特权</p>
					</div>
					<div>
						<img src="../assets/img/shouhuodizhi.png" alt="">
						<p>收货地址</p>
					</div>	
					<div>
						<img src="../assets/img/tuandui.png" alt="">
						<p>我的团队</p>
					</div>
					<div>
						<img src="../assets/img/shouyi.png" alt="">
						<p>累计收益</p>
					</div>
					<div>
						<img src="../assets/img/erweima.png" alt="">
						<p >二维码</p>
					</div>									
			 </div>    
  </div>
</template>

<script>
import mTabbar from './tabbar/Tabar.vue'
export default {
  name:'myself',
  data () {
    return {
     select:'tab4'
    }
  },
    components:{
    mTabbar
  }
}
</script>
<style scoped>
  #myself{
		background: #EAEAEA;
	}
	.heid{
		width: 100%;
		height: 180px;
		background: #E7A433;
	}
	.title {
		display: flex;
		justify-content: space-between;
		padding-left: 40px;
		padding: 10px 10px;
		background:#F3F3F3;
	}
	.title span{	
		display: block;
	}
	.title div{
		border-right: 1px solid #ccc ;
		padding-right: 40px ;
	}
	.title div:last-child{
		border:0;
	}
	.orderwrap{
		background:#F3F3F3;
		padding: 10px 10px;
		margin-top: 10px;
		
	}
	.order{
		display: flex;
		justify-content:space-between;
		margin-top: 10px;
		
		border-bottom:1px solid #F0F0F0;		
	}
	.orderright{
    
		padding-left: 10px;
	}
	.orderright img{
		width: 20px;
		height: 20px;
		vertical-align: middle;
	}
	.orderright span{
		vertical-align: middle;	
	}
	.orderleft img{
		width: 20px;
		height: 20px;
		padding-right: 10px;
	}
	.titlepic{
		display: flex;
		justify-content:space-around;
		margin-top: 10px;				
	}
	.titlepic img{
		vertical-align: middle;
	   display: block;
		width: 28px;
		height: 28px;
		margin-bottom: 10px;    
	}
	.titlepic span{
		margin-top: 10px;
		vertical-align: middle;
	}
	.titlemodle{
		padding: 10px 10px;
		background:#F3F3F3;
		display: flex;
		flex-wrap:wrap;
		margin-top: 10px;
	}
	.titlemodle div{
	   margin-bottom: 10px;
		width: 20%;
	}	
	
	.titlemodle img{
		vertical-align: middle;		
		display: inline-block;
		width: 30px;
		height: 30px;
		margin-bottom: 10px;
		
	}
		
		

</style>