<template >
	<div id="myself" v-wechat-title="$route.meta.title">    
		<mTabbar v-model="select"></mTabbar>  
		<div class="heid">
			<p class="avator"><img id="avator" :src="userInfo.face" ></p> 
			<p class="name">{{userInfo.uname}}</p>  
			<p class="from">推荐人:{{userInfo.upName}}</p>  	
		</div>
		<div class="pannel" >
			<div>
				<div>{{userInfo.advance}}</div>
				<div>零钱</div>
			</div>
			<div>
				<div>0</div >
				<div>积分</div>
			</div>	
			<div>
				<div>0</div>
				<div>消费总额</div>
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
			<div @click='jump("Assets")'>
				<img src="../assets/img/daifukuan.png" alt="">
				我的资产
			</div>	
			<div  @click='jump("Prerogative")'>
				<img src="../assets/img/dequan.png" alt="">
				我的特权
			</div>	
			<div  @click='jump("addressList")'>
				<img src="../assets/img/shouhuodizhi.png" alt="">
				收货地址
			</div>	
			<div @click='jump("myTeam")' v-if="userInfo.defaultLv!=1">
				<img src="../assets/img/tuandui.png" alt="">
				我的团队
			</div>	
			<div @click='jump("income")' v-if="userInfo.defaultLv!=1">
				<img src="../assets/img/shouyi.png" alt="">
				累计收益
			</div>	
			<div  @click='jump("erweima")' v-if="userInfo.defaultLv!=1">
				<img src="../assets/img/erweima.png" alt="">
				二维码
			</div>						
		</div>
		<img id="bcgimg" src="../assets/img/bcg.jpg" mode="widthFix" v-show="false"> 
		<img :src="userInfo.remark" id="erweima" v-show="false">
		<canvas id="myCanvas" :width="canvasWidth" :height="canvasHeight" v-show="false">
	    </canvas >
		<mt-popup
		v-model="popupVisible"
		popup-transition="popup-fade">
		<div v-bind:style="{width:canvasWidth+'px',height:canvasHeight+'px'}" id="postImg">
		</div>
		<div class="tip"><p>长按保存推广海报</p></div>	  
		<!-- <canvas id="myCanvas" :width="canvasWidth" :height="canvasHeight">
	    </canvas > -->
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
				canvasWidth:'',
				canvasHeight:'',
				bbb:'',
				postUrl:'',
				orderItem:[{name:'待付款',icon:require('../assets/img/daifukuan.png'),url:'orderList'},{name:'已付款',icon:require('../assets/img/daifahuo.png'),url:'orderList'},{name:'待收货',icon:require('../assets/img/daishouhuo.png'),url:'orderList'},{name:'已完成',icon:require('../assets/img/daipinjia.png'),url:'orderList'}],
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
				else if(url=="addressList"){
					store.commit("storeJumpFrom",'myself') 
					this.$router.push({ path: url})
				}
				else if(url=='erweima'){
					that.popupVisible=true
					var canvas=document.getElementById("myCanvas");
					var ctx=canvas.getContext("2d");
					var bcgimg=document.getElementById("bcgimg");
					// bcgimg.setAttribute("crossOrigin",'Anonymous')
					var avator=document.getElementById('avator')
					// avator.setAttribute("crossOrigin",'Anonymous')	
					var erweimaImg=document.getElementById("erweima")
					// erweimaImg.setAttribute("crossOrigin",'Anonymous')
					var postImg=document.getElementById("postImg")
					ctx.drawImage(bcgimg,0,0,that.canvasWidth,that.canvasHeight);	
					ctx.drawImage(avator,33,90,80,80);
					ctx.drawImage(erweimaImg,110,that.canvasHeight*0.5997,90,90);
					ctx.fillStyle  = '#f7d87c';
					ctx.lineWidth=1; 
					ctx.font = "bold 18px '微软雅黑'";
					var str=that.userInfo.uname
					var lineWidth = 0;
					var initHeight=150;//绘制字体距离canvas顶部初始的高度
					var lastSubStrIndex= 0; //每次开始截取的字符串的索引
					var textWidt=that.canvasWidth-125
					for(let i=0;i<str.length;i++){ 
						lineWidth+=ctx.measureText(str[i]).width; 
						if(lineWidth>textWidt){  
					        ctx.fillText(str.substring(lastSubStrIndex,i),125,initHeight);//绘制截取部分
					        initHeight+=20;//20为字体的高度
					        lineWidth=0;
					        lastSubStrIndex=i;
					    } 
					    if(i==str.length-1){//绘制剩余部分
					    	ctx.fillText(str.substring(lastSubStrIndex,i+1),125,initHeight);
					    }
					}
					let postUrl = canvas.toDataURL("image/jpeg");
					postImg.innerHTML="<img src='"+postUrl+"' alt='from canvas'/>"
					that.popupVisible=true

				}
				else{
					  this.$router.push({ path: url});
				}
				
			},

		},
		async mounted(){
			let that=this
			that.userInfo=store.state.userInfo
			that.canvasWidth=document.body.clientWidth-74
			that.canvasHeight=that.canvasWidth*1.778
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
	font-size: 12px;
}
.heid{
	width: 100%;
	height: 160px;
	padding: 10px;
	box-sizing: border-box;
	background: #E7A433;
	color: #fff;
	text-align: center;
}
.name,.from{
	height:30px;
	line-height: 30px;
}
.avator{
	width: 60px;
	height:60px;
	overflow: hidden;
	margin: 0 auto;
	border-radius: 50%;
}
.pannel {
	display: flex;
	justify-content: space-around;
	background:#F3F3F3;
	padding:10px 0;
	box-sizing: border-box; 
}
.pannel>div{
	flex-grow: 1;
	border-right: 1px solid #ccc ;
	text-align: center;
}
.pannel div:last-child{
	border:0;
}
.orderwrap{
	background:#F3F3F3;
	padding: 5px;
	margin-top: 10px;
	box-sizing: border-box;
}
.order{
	display: flex;
	justify-content:space-between;
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
.tip{
	height:30px;
	line-height: 30px;
	text-align: center;
	font-size: 16px;
	background: #000;
	filter:Alpha(opacity=0);/* 只支持IE6、7、8、9 */
	position:static; /* IE6、7、8只能设置position:static(默认属性) ，否则会导致子元素继承Alpha值 */
	*zoom:1; /* 激活IE6、7的haslayout属性，让它读懂Alpha */
}
.tip p{
	 color: #FFFFFF;
    position: relative;
}
</style>