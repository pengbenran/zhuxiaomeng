<template>
  <div class="myTeam" v-wechat-title="$route.meta.title" @scroll="loadMore">
     <div class="teamSearch">
       <div class="searchInput">
          <img src="../assets/img/search.png">
          <input placeholder="搜索队员" @input="searchInput">
       </div>
       <div class="searchBtn"> <button @click="Search">搜索</button></div>
     </div>
     <div class="teamCount">
       <!-- <div class="kind" @click="openDrawer"><img src="../assets/img/kind.png">全部</div> -->
       <div class="teamTotal">团队总人数:{{teamTotalcount}}</div>
     </div>
       <!-- <Button @click="value1 = true" type="primary">Open</Button> -->
 <!--    <Drawer :closable="false" v-model="isOpen">
      <div class="drawer">
        <div class="drawerTitle">
          <span class="chooseTitle">角色</span>
          <span class="choosed">当前选择:  <span>合伙人</span></span>
        </div>
        <div class="btn">
          <div class="btnlist select">全部</div>
          <div class="btnlist">金牌推手</div>
          <div class="btnlist">合伙人</div>
          <div class="btnlist">联合创始人</div>
        </div>
      </div>  
      <div class="drawer">
       <div class="drawerTitle">
        <span class="chooseTitle">合伙人身份</span>
        <span class="choosed">当前选择:  <span>全部</span></span>
      </div>
      <div class="btn">
        <div class="btnlist select">全部</div>
        <div class="btnlist">一度合伙人</div>
        <div class="btnlist">二度合伙人</div>
      </div>
      </div>
    </Drawer> -->
    <div class="teamList"  v-for='(item,index) in UserList' >  
      <div class="avator">
        <img :src="item.face">
      </div>
      <div class="right">
        <p class="name">{{item.uname}}</p>
        <p>推荐人:{{item.downName}}</p>
        <p>{{item.time}}</p>
        <p class="teamIdCard">{{item.lvidname}}</p>
      </div>
    </div>
    <div class="Tip" v-if="!hasmore">这已经是小萌的底线~~~~~</div>
  </div>
</template>

<script>
import { InfiniteScroll,Indicator} from 'mint-ui';
import store from '../store/store'  //引用Vuex
export default {
  name: 'myTeam',
  data () {
    return {
     isOpen:false,
     limit:7,
     offset:0,
     UserList:[],
     hasmore:true,
     memberId:'',
     searchCi:'',
     teamTotalcount:0
    }
  },
  methods:{
    openDrawer(){
      this.isOpen=true
    },
    teamDetail(){
      this.$router.push({ path: 'memberInformation'});
    },
    searchInput(e){
      let that = this;
      that.searchCi = e.data
    },
    loadMore() {
      let that=this
      if(that.hasmore){
        if(that.$el.scrollTop+that.$el.offsetHeight==that.$el.scrollHeight){
          that.offset=that.offset+1
          that.getmyTeam(that.memberId)
        }
      }
    },

    //搜索
     async Search(){
      let that = this;
      let params = {}
      params.memberId = that.memberId
      params.offset = that.offset
      params.limit = that.limit
      params.searchName = that.searchCi
      let res = await that.API.allSubordinate(params)
      that.UserList = res.data.rows.map(v=>{
        v.time = that.formatTime(v.regtime) 
        return v
      })
    },

    async getmyTeam(memberId){
      let that = this;
      let params = {}
      Indicator.open({
        text: '加载中',
        spinnerType: 'fading-circle'
      });
      params.memberId = memberId
      params.offset = that.offset
      params.limit = that.limit
      let res = await that.API.allSubordinate(params)
      that.teamTotalcount=res.data.total
      let arr = res.data.rows.map(v=>{
        v.time = that.formatTime(v.regtime)
        return v
      })
      that.UserList = that.UserList.concat(arr)
      if((res.data.rows.length+1) <= that.limit){
         that.hasmore = false
      }
      Indicator.close();
      // that.UserList = res.data.rows
    },


      formatTime (timestamp) {
      var date = new Date(timestamp);
      const year = date.getFullYear()
  
      const month = date.getMonth() + 1
      const day = date.getDate()
      const hour = date.getHours()

      const minute = date.getMinutes()
      const second = date.getSeconds()
      const t1 = [year, month, day].map(this.formatNumber).join('/')
      const t2 = [hour, minute, second].map(this.formatNumber).join(':')

      return `${t1} ${t2}`
    },
   formatNumber (n) {
      const str = n.toString()
      return str[1] ? str : `0${str}`
    }

  },
  mounted () {
    let that = this;
    let memberId = store.state.userInfo.memberId
    that.memberId = memberId
    that.getmyTeam(memberId)
  },
  components:{
  }
}
</script>
<style scoped>
img{
  width: 100%;
  height:100%;
  overflow: hidden;
}
.myTeam{
  height:100%;
  overflow: scroll;
}
.teamSearch{
  /* height: 400px; */
  background: #F8F8F8;
  display: flex;
}
.searchInput{
  height:30px;
  background: #fff;
  width: 300px;
  border-radius: 15px;
  margin:15px; 
  padding: 3px;
}
.searchInput img{
  width:24px;
  height:24px;
  display: inline-block;
  vertical-align: middle;
}
.searchInput input{
  display: inline-block;
  width: 210px;
  border: none;
  height:24px;
  outline: 0;
  vertical-align: middle;
}
.searchBtn{
  margin-top: 15px;

}
.searchBtn button{
    width: 60px;
    text-align: center;
    height:30px;
    line-height: 30px;
    border-radius:15px; 
    border: 1px solid #ddd;
    padding: 0;
    background:#fff;
    outline: none;
  }
.teamCount{
  background: #f8f8f8;
  display: flex;
  height:30px;
  line-height: 30px;
  justify-content: space-between;
  padding: 0 10px;
  font-size: 15px;
}
.kind img{
  width: 24px;
  height:24px;
  display: inline-block;
  vertical-align:middle;
  margin-bottom:4px; 
}
.drawer{
  margin-bottom: 20px;
}
.drawerTitle span{
  display: inline-block;
  font-size: 16px;
}
.choosed{
  float: right;
}
.choosed span{
  color: #E7A433;
}
.btn{
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  margin-top: 10px;
}
.btnlist{
  height:40px;
  line-height: 40px;
  border:1px solid #ddd;
  padding: 0 5px;
  box-sizing: border-box;
}
.select{
  border:1px solid #E7A433;
}
.teamList{
  display: flex;
  justify-content: space-between;
  padding: 15px;
  box-sizing: border-box;
  border-bottom: 1px solid #ccc;
}
.avator{
  width:80px;
  height:80px;
  overflow: hidden;
}
.right{
  padding-left: 10px;
  box-sizing: border-box;
  flex-grow: 1;
  color:#aaa;
}
.name{
  font-size: 16px;
  color: #000;
}
.teamIdCard{
  height:20px;
  background: #6CAD5B;
  color: #fff;
  max-width: 60px;
  text-align: center;
  border-radius: 5px;
  line-height: 20px;
}
.Tip{margin-top: 25px;display: block;width: 100%;text-align: center;font-weight: 100;font-size: 14px;color: #8e8e8e;}
</style>