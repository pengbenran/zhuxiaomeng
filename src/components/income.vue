<template>
  <div class="income" v-wechat-title="$route.meta.title" @scroll="loadMore">
	  <div class="top">
		  <h1>{{total}}</h1>
		  <p>查看具体参数与报表<img src="../assets/img/fanhui.png" alt="指示头"></p>  
		  <div class="jishuan">
			  <span>待结算<p>0</p></span>
			  <span>已结算<p>{{total}}</p></span>
		  </div>
	  </div>
	  <!-- 结算详细 -->
	  <div class="xianxi" v-for="(item,index) in shareDetails" :key="item.payId">
		  <div class="left">{{item.uname}}<p>{{item.payTime}}</p></div>
		  <!-- <p>已结算<img src="../assets/img/qiandai.png" alt=""><h3></h3></p> -->
		  <div class="right"><span class="info">已结算</span><img src="../assets/img/qiandai.png" alt=""><span class="price">{{item.payMoney}}</span></div>
	  </div> 
	  <div class="tip" v-if="!hasmore">~~~小萌是有底线~~~</div>  
  </div>
</template>

<script>
import store from '../store/store'
import ProtoTypeAPI from '../network/apiServer'
import { Indicator } from 'mint-ui';
export default {
  name: 'income',
  data () {
    return {
    shareDetails:[],
    hasmore:true,
    offset:0,
    limit:8,
    total:0
    }
  },
  methods:{
  	  loadMore() {
      let that=this
      if(that.hasmore){
        if(this.$el.scrollTop+this.$el.offsetHeight==this.$el.scrollHeight){
          that.offset=that.offset+1
          that.getShare(that.offset,that.limit,that.userInfo.memberId)
        }
      }     
    },
  	async getShare(offset,limit,memberId){
  		let that=this
  		let params={}
  		 Indicator.open({
          text: '加载中',
          spinnerType: 'fading-circle'
        });
  		params.offset=offset
  		params.limit=limit
  		params.memberId=memberId
		let shareDetailsRes=await that.API.shareDetails(params)
		Indicator.close();
		if(shareDetailsRes.data.total==0){
			that.hasmore=false
		}else{
			that.shareDetails=that.shareDetails.concat(shareDetailsRes.data.rows)
			if(shareDetailsRes.data.rows.length<that.limit){
				that.hasmore=false
			}
			that.total=shareDetailsRes.data.total
		} 
		

  	}
  },
  mounted(){
   let that=this
   that.userInfo=store.state.userInfo
   that.getShare(that.offset,that.limit,that.userInfo.memberId)
  }
}
</script>
<style scoped lang='less'>
	em{
		font-style:normal;
		vertical-align: middle;	
	}
	.income{background: #f3f3f3;
		width:100%;
		height:100%;
		overflow: scroll;
	}
	.top{		font-size: 15px;
		background:url(../assets/img/beijing.png);
		background-size: 100% 100%;
		width:100%;
		height:220px;	padding-top: 16px;		
	}
	.top h1,.top p{
		color:#fff;
		text-align:center;
		vertical-align:middle;
	}
	.top img{
		width:6px;height:12px;
		margin-left:8px;
		vertical-align:middle;
	}
	.jishuan{
		margin-top:20px;
		display:flex;
		justify-content:space-around;
		vertical-align:middle;
	
	}
   .jishuan span{
		color:#fff;
		vertical-align:middle;
		text-align: center;     
	}
	.xianxi{
		display: flex;
		justify-content: space-between;
		vertical-align: middle;
		margin-top: 5px;
		padding: 10px;
		background: #fff;
		font-size: 16px;
	}
	.xianxi{
	   .right{height: 35px;line-height: 35px;}
	   .info{margin-right: 12px;}
	   .price{margin-left: 8px;font-size: 14px;}
	   .left p,.info{color: #8e8e8e;font-size: 14px}
	}

	.xianxi img{
		width:20px;
		height:20px;
		vertical-align: middle;
	}
.tip{text-align:center;height:30px;line-height: 30px;}
</style>
