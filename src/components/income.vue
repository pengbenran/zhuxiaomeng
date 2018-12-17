<template>
  <div class="income" v-wechat-title="$route.meta.title" @scroll="loadMore">
	  <div class="top">
	  	  <div class="bcg">
	  	  	<img src="../assets/img/beijing.png" mode="widthFix">
	  	  </div>
	  	  <div class="panel">
	  	  	<h1>{{total}}元</h1>
	  	  	<div class="jishuan">
	  	  		<div>待结算<p>0元</p></div>
	  	  		<div>已结算<p>{{total}}元</p></div>
	  	  	</div>
	  	  </div>	  
	  </div>
	  <!-- 结算详细 -->
	  <div class="xianxi" v-for="(item,index) in shareDetails" :key="item.payId">
		  <div class="left">{{item.uname}}<p>{{item.payTime}}</p></div>
		  <!-- <p>已结算<img src="../assets/img/qiandai.png" alt=""><h3></h3></p> -->
		  <div class="right">
		  	<div class="info">已结算</div>
		  	<div class="countmoney">
		  		<img src="../assets/img/qiandai.png" alt=""><span class="price">{{item.payMoney}}元</span>
		  	</div>
		  </div>
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
	img{width: 100%;
		height:100%;
		display: inline-block;
	}
	.income{
		background: #f3f3f3;
		width:100%;
		height:100%;
		overflow: scroll;
	}
	.top{
		font-size: 15px;
		width:100%;
		height:200px;
		position: relative;
		color:#fff;
		text-align:center;
		.bcg{
			width: 100%;
			height:100%;
			overflow: hidden;
		}
		.panel{
			position: absolute;
			top:0;
			left:0;
			width: 100%;
			height:100%;
			.jishuan{
				display:flex;
				justify-content:space-around;
				div{
					flex-grow: 1;  
				}
			}
		}

	}
	.xianxi{
		display: flex;
		justify-content: space-between;
		margin-top: 5px;
		padding: 10px;
		background: #fff;
		font-size: 16px;
		height:50px;
		.left{
			width: 250px;
			p{
			  color: #8e8e8e;
			  font-size: 14px;
			  height:30px;
			  line-height: 30px;
			}
		}
		.right{
			flex-grow: 1;
            .countmoney{
            	height:30px;
            	line-height: 30px;
            	img{
            		width:20px;
            		height:20px;
            		vertical-align: middle;
            	}
            	.price{
				  height:100%;
				  line-height: 30px;
				  display: inline-block;
				  padding-left:5px;
				  box-sizing: border-box; 
            	}
            }
		}
	}
.tip{text-align:center;height:30px;line-height: 30px;}
</style>
