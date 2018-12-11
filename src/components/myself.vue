<template >
	<div id="myself" v-wechat-title="$route.meta.title">    
		<mTabbar v-model="select"></mTabbar>  
		<div class="heid">
			<p class="avator"><img :src="userInfo.face"></p> 
			<p class="name">{{userInfo.uname}}</p>  
			<p class="from">推荐人:小猪共享金服</p>  	
		</div>
		<div class="pannel" >
			<div v-for="(item,index) in pannelItem" @click='jump(item.url,index)'>
				<p>{{item.number}}</p >
				<p>{{item.name}}</p>
			</div>		
		</div>
		<div class="orderwrap">
			<div class="order">
				<div class="orderright" @click='jump("orderList",-1)'>
					<img src="../assets/img/shangcheng.png"/>
					<span>商城订单</span>
				</div>
			</div>						
			<div class="titlepic">
				<div v-for="(item,index) in orderItem" @click='jump(item.url,index)'>
					<img :src="item.icon" alt=""/>
					{{item.name}}
				</div>					
			</div>
		</div>	 		 
		<div class="titlemodle">
			<div v-for="(item,index) in functionItem" @click='jump(item.url,index)'>
				<img :src="item.icon" alt="">
				{{item.name}}
			</div>							
		</div> 
		<mt-popup
		v-model="popupVisible"
		popup-transition="popup-fade">
		<div class="poup">
			<img src="../assets/img/ercode.png" mode="widthFix">
		</div>
	   </mt-popup>
	</div>
</template>
<script>
	import mTabbar from './tabbar/Tabar.vue'
	import store from '../store/store'
	import ProtoTypeAPI from '../network/apiServer'
	import { Popup } from 'mint-ui';
	export default {
		name:'myself',
		data () {
			return {
				select:'tab4',
				popupVisible:false,
				pannelItem:[{name:'零钱',number:'0.00',url:'withdraw'},{name:'积分',number:'0',url:''},{name:'消费总额',number:'0.00',url:''}],
				orderItem:[{name:'待付款',icon:require('../assets/img/daifukuan.png'),url:'orderList'},{name:'已付款',icon:require('../assets/img/daifahuo.png'),url:'orderList'},{name:'待收货',icon:require('../assets/img/daishouhuo.png'),url:'orderList'},{name:'已完成',icon:require('../assets/img/daipinjia.png'),url:'orderList'}],
				functionItem:[{name:'我的资产',icon:require('../assets/img/zhichang.png'),url:''},{name:'我的特权',icon:require('../assets/img/dequan.png'),url:'Prerogative'},{name:'收货地址',icon:require('../assets/img/shouhuodizhi.png'),url:'addressList'},{name:'我的团队',icon:require('../assets/img/tuandui.png'),url:'myTeam'},{name:'累计收益',icon:require('../assets/img/shouyi.png'),url:'income'},{name:'二维码',icon:require('../assets/img/erweima.png'),url:'erweima'},],
				userInfo:{}
			}
		},
		components:{
		 mTabbar,
		 "mt-popup":Popup
		},
		methods:{
			async jump(url,index){
				let that=this
				if(url=="orderList"){
					this.$router.push({ name: url,query:{
						index:index
					}});
				}
				else if(url=='erweima'){
					this.popupVisible=true
					let res=await that.API.getScoeImg()
					console.log(res);
				}
				else{
					  this.$router.push({ path: url});
				}
				
			},
		},
		async mounted(){
			let that=this
			let scoreRes=await that.API.getScoe()
			console.log(scoreRes);
			that.userInfo=store.state.userInfo
		}
	}
</script>
<style scoped>
img{
	width: 100%;
	height:100%;
	display: block;
}
.poup{
	width: 300px;
}
#myself{
	background: #EAEAEA;
}
.heid{
	width: 100%;
	height: 160px;
	padding: 10px;
	background: #E7A433;
	color: #fff;
	text-align: center;
}
.avator{
	width: 70px;
	height:70px;
	overflow: hidden;
	margin: 0 auto;
	border-radius: 50%;
}
.name{
	font-size: 20px;
}
.pannel {
	display: flex;
	justify-content: space-around;
	background:#F3F3F3;
	padding:10px 0;
	box-sizing: border-box; 
}
.from{font-size: 16px;}
.pannel div{
	flex-grow: 1;
	border-right: 1px solid #ccc ;
	text-align: center;
}
.pannel div:last-child{
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
	display: inline-block;
}
.orderright span{
	vertical-align: middle;	
	display: inline-block;
}

.titlepic{
	display: flex;
	justify-content:space-around;
	margin-top: 10px;				
}
.titlepic div{
	
	flex-grow: 1;  
	text-align:center; 
}
.titlepic img{
	margin:10px auto;
	width: 28px;
	height: 28px;
	display: block; 
}
.titlemodle{
	background:#F3F3F3;
	display: flex;
	flex-wrap:wrap;
	margin-top: 10px;
}
.titlemodle div{
	margin-bottom: 10px;
	text-align:center;
	width: 25%;
}	

.titlemodle img{	
	display: block;
	width: 30px;
	height: 30px;
	margin: 10px auto;
}

</style>