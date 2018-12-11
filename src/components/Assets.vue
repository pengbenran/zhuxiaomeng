<template>
  <div class="MenberVip" v-wechat-title="$route.meta.title">
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
         <ul
         v-infinite-scroll="loadMore"
         infinite-scroll-disabled="loading"
         infinite-scroll-distance="10">
         <li v-for="item in list">{{ item }}</li>
       </ul>
     </div>
  </div>
</template>

<script>
  import store from '../store/store'
  import { MessageBox,InfiniteScroll} from 'mint-ui';
export default {
  name: 'MenberVip',
  data () {
    return {
    userInfo:{},
    list:[1,2,3,4,5,6,7,8,9,10],
    loading:true,
    offset:0
    }
  },
  methods:{
    loadMore() {
      let that=this
      that.offset=that.offset+1
     if(loading){
      that.getaccountManagement(that.offset,10,that.userInfo.memberId)
     }
      
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
      params.offset=offset
      params.limit=limit
      params.memberId=memberId
     let accountManagementRes=await that.API.accountManagement(params)
     console.log(accountManagementRes)
    }
  },
  async mounted(){
    let that=this
    that.userInfo=store.state.userInfo
    that.getaccountManagement(0,1,that.userInfo.memberId)
  }
}
</script>
<style scoped lang='less'>
.Assets{background: #f3f3f3;min-height: 100vh;}
 .header{background: rgb(231,164,51);color: #fff;font-size: 16px;
   .top{display: flex;justify-content: space-between;padding: 10px;}
   .middle{text-align: center;}
   .middle img{width: 40px;width: 40px;}
   h1{font-weight: 400;font-size: 30px;}
   h1 span{font-size: 20px;}
 }

.Case{
 .Title{background: #fff;line-height: 35px;font-size: 18px;color: #8e8e8e;padding-left: 15px;border-bottom: 1px solid #f3f3f3;}
}

// .ListItem{display: flex;justify-content: space-between;align-items: center;flex-wrap: wrap;
//   .Item{box-sizing: border-box;display: flex;align-items: center;justify-content: center;background: #fff;width: 50%;padding: 10px 0;
//         border-bottom: 1px solid #f3f3f3;}
//   .Left span{display: inline-block;background: rgb(231,164,51);border-radius: 50%;width: 42px;height: 42px;text-align: center;margin-right: 15px;}
//   .Left img{width: 30px;height: 30px;margin-top: 6px;}
//   .Right{font-size: 14px;color: #666;}
//   .Item:nth-child(even){border-left: 1px solid #f3f3f3;}
// }

</style>
