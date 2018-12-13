<template>
  <div class="MenberVip" v-wechat-title="$route.meta.title"  @scroll="loadMore">
     <div class="header">
         <div class="top"><span>记录</span><span @click="jumpWithdraw">提现</span></div>
         <div class="middle">
             <img src="../assets/img/linqian.png" />
             <p>零钱</p>
            <h1><span>￥</span>{{userInfo.advance}}</h1>
         </div>
     </div>
     <!--header end-->

     <div class="Case">
         <div class="Title">提现记录</div>
         <ul class="caseContent">
         <li v-for="item in list" class="caseList">
           <div class="left">
             <p v-if="item.withdrawStatus==0">待审核</p>
             <p v-if="item.withdrawStatus==1">已审核</p>
             <p v-if="item.withdrawStatus==2">未通过</p>
             <p>{{item.withdrawTime}}</p>
           </div>
           <div class="right">
             {{item.amount}}
           </div>
         </li>
       </ul>
     </div>
     <div class="tip" v-if="!hasmore">~~~小萌是有底线~~~</div>
  </div>
</template>

<script>
  import store from '../store/store'
  import { MessageBox,InfiniteScroll} from 'mint-ui';
  import { Indicator } from 'mint-ui';
export default {
  name: 'MenberVip',
  data () {
    return {
    userInfo:{},
    list:[],
    hasmore:true,
    offset:0,
    limit:8
    }
  },
  methods:{
    loadMore() {
      let that=this
      if(that.hasmore){
        if(this.$el.scrollTop+this.$el.offsetHeight==this.$el.scrollHeight){
          that.offset=that.offset+1
          that.getaccountManagement(that.offset,that.limit,that.userInfo.memberId)
        }
      }
     
     //  console.log("加载了");
     //  that.offset=that.offset+1   
     // if(that.loading){
     //  that.getaccountManagement(that.offset,10,that.userInfo.memberId)
     // }
      
    },
    async jumpWithdraw(){
      // 判断是否绑定了银行卡
      let that=this
      let isBindRes= await that.API.isBind(that.userInfo.memberId)
      if(isBindRes.data.code=="0"){
        that.$router.push({ name:'Withdraw',params:{
          cardno:isBindRes.data.distribeDO.cardno,
          depositBank:isBindRes.data.distribeDO.depositBank
        }});
      }else{
        MessageBox({
          title: '绑卡通知',
          message: '您还未绑定银行卡,请先绑定银行卡',
          showCancelButton: true,
          confirmButtonText:'立即绑定'
        }).then(action => {
          if(action=="confirm"){
           this.$router.push({ path: 'bindBankCard'});
         }
       });
      }

      // this.$router.push({ path: 'withdraw'});
    },
    async getaccountManagement(offset,limit,memberId){
      let params={}
      let that=this
       Indicator.open({
          text: '加载中',
          spinnerType: 'fading-circle'
        });
      params.offset=offset
      params.limit=limit
      params.memberId=memberId
      let accountManagementRes=await that.API.accountManagement(params)
      that.list=that.list.concat(accountManagementRes.data.financeCashDOList)
      if(accountManagementRes.data.financeCashDOList.length<that.limit){
        that.hasmore=false
      }
      Indicator.close();
    }
  },
  async mounted(){
    let that=this
    that.userInfo=store.state.userInfo
    that.getaccountManagement(0,8,that.userInfo.memberId)
  }
}
</script>
<style scoped lang='less'>
.MenberVip{background: #f3f3f3;height: 100%;overflow: scroll;}
 .header{background: rgb(231,164,51);color: #fff;font-size: 16px;
   .top{display: flex;justify-content: space-between;padding: 10px;}
   .middle{text-align: center;}
   .middle img{width: 40px;width: 40px;}
   h1{font-weight: 400;font-size: 30px;}
   h1 span{font-size: 20px;}
 }

.Case{
 .Title{background: #fff;line-height: 35px;font-size: 18px;color: #8e8e8e;padding-left: 15px;border-bottom: 1px solid #f3f3f3;}
 .caseContent{
  // height:400px;
  // overflow: scroll;
 }
 .caseList{
  display: flex;
  justify-content: space-between;
  padding: 10px;
  border-bottom:1px solid #ddd;
  height: 60px;
  box-sizing: border-box;
  .left{
    flex-grow: 1;
    p{
      height:20px;
      line-height: 20px;
    }
  }
  .right{
    width: 100px;
    text-align: center;
    line-height: 40px;
    font-size: 18px;
    color:#E7A433;
  }
 }
}
.tip{text-align:center;height:30px;line-height: 30px;}
// .ListItem{display: flex;justify-content: space-between;align-items: center;flex-wrap: wrap;
//   .Item{box-sizing: border-box;display: flex;align-items: center;justify-content: center;background: #fff;width: 50%;padding: 10px 0;
//         border-bottom: 1px solid #f3f3f3;}
//   .Left span{display: inline-block;background: rgb(231,164,51);border-radius: 50%;width: 42px;height: 42px;text-align: center;margin-right: 15px;}
//   .Left img{width: 30px;height: 30px;margin-top: 6px;}
//   .Right{font-size: 14px;color: #666;}
//   .Item:nth-child(even){border-left: 1px solid #f3f3f3;}
// }

</style>
