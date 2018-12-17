<template>
	<div class="founder" v-wechat-title="$route.meta.title">
		<div class="top">
			<img :src="userInfo.face" alt="">
			<p>{{userInfo.uname}}</p>
			<!-- <div class="he"><img src="../assets/img/tuandui.png" alt="" class="pic1"><span>{{userInfo.lvidname}}</span></div> -->
		</div>
		<div class="tis"><span></span></div>
		<div class="people" v-show="userInfo.defaultLv==3">
			<mt-progress :value="prevalue" :bar-height="10"></mt-progress>
			<div class="txt"><span>一度合伙人</span><span>{{count}}/{{condition}}</span></div>
			<button class="btn" :disabled="isEnough" @click="upgrade" :style="{background: isEnough ? '#7f7f7f':'#E7A433'}">升级</button>
		</div>
		<div class="kuangwrap" v-if="userInfo.defaultLv==4">
			<div class="kuang">
				<div class="picwrap">
					<img src="../assets/img/juxing.png" alt="" class="images1">
					<img src="../assets/img/saosao.png" alt="" class="images2">
				</div>	
				<div class="bom">
					<p>恭喜你!</p>
					<p>你现在已经是联合创始人</p>
					<p>赶紧去享受一下您的权益吧!</p>
				</div>	
			</div>		 
		</div>
		<Nav></Nav>
	</div>
</template>
<script>
    import store from '../store/store'
    import { Progress,Indicator,Toast} from 'mint-ui';
    import Nav from '@/components/Nav';
    import ProtoTypeAPI from '../network/apiServer'
	export default {
		name: 'Partner',
		data() {
			return {
				userInfo:{},
				count:'',
				isEnough:false,
				condition:'',
				prevalue:0,
				membership:''
			}
		},
		components: {
		  "mt-progress":Progress,
		  Nav
		},
		methods:{
			async upgrade(){
			  let that=this 
			  Indicator.open({
			  	text: '请稍等...',
			  	spinnerType: 'fading-circle'
			  });
			  let upgradeRes=await that.API.upshift(that.userInfo.memberId)	
			  if(upgradeRes.data.code==0){
			  	Toast({
			  		message: '升级成功',
			  		iconClass: 'icon icon-success'
			  	});
			  	Indicator.close();
			  	that.userInfo.defaultLv=4
			    that.getMemberInfo(that.userInfo.openId)
			  }
			},
			async getMemberInfo(openId){ 
				let memberInfoRes=await this.API.getMemberInfo(openId)
				if(memberInfoRes.data.code==0){
					Indicator.close();
					store.commit("storeUserInfo",memberInfoRes.data.member)
				}
			}
		},
		destroyed: function () {
			Indicator.close();
		},
		async mounted(){
			let that=this
			Indicator.open({
				text: '请稍等...',
				spinnerType: 'fading-circle'
			});
			that.userInfo=store.state.userInfo
			that.membership=that.$route.query.lvTitle
			let Res=await that.API.selectSubordinate(this.userInfo.memberId)
			Indicator.close();
			that.condition=Res.data.condition
			that.count=Res.data.count
			// that.count=3
            that.prevalue=parseInt((that.count/that.condition)*100)
            if(that.count>=that.condition){
            	that.isEnough=false
            }
            else{
            	that.isEnough=true
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

	.top>img{ 
		width: 60px;
		height: 60px;
		margin-top: 10px;
		border-radius:50%; 
	}

	.top p {
		padding-top: 10px;
		color: #F3F2F1;
	}


	.top span {
		color: #F3F2F1;
	}
	.tis{
		padding: 10px;
	}

	.people {
		width: 90%;
		margin: 0 auto;
		height: 186px;
		border: 1px solid #ccc;
		text-align: center;
	}
	.mt-progress{
		width: 80%;
		margin: 10px auto;
	}
	.mt-progress-content{
		overflow: hidden  !important;
	}
	.txt {
		width:80%;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		color: red;
	}

	.btn{
		width: 80%;
		height: 40px;
		border: 0;
		margin-top: 40px;
		/*background: #E7A433;*/
		border-radius: 2px;
		font-size: 18px;
		color: #fff;
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
