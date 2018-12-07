<template>
  <div class="myTeam" v-wechat-title="$route.meta.title">
     <div class="teamSearch">
       <div class="searchInput">
          <img src="../assets/img/search.png">
          <input type="text" placeholder="搜索队员">
       </div>
       <div class="searchBtn"> <Button shape="circle" icon="ios-search">搜索</Button></div>
     </div>
     <div class="teamCount">
       <div class="kind" @click="openDrawer"><img src="../assets/img/kind.png">全部</div>
       <div class="teamTotal">团队总人数:1222</div>
     </div>
       <!-- <Button @click="value1 = true" type="primary">Open</Button> -->
    <Drawer :closable="false" v-model="isOpen">
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
    </Drawer>
    <div class="teamList" @click="teamDetail">
      <div class="avator">
        <img src="../assets/img/touxiang.png">
      </div>
      <div class="right">
        <p class="name">熊大</p>
        <p>推荐人:光头钱</p>
        <p>2018-11-3- 12:00:00</p>
        <p class="teamIdCard">合伙人</p>
      </div>
    </div>
  </div>
</template>

<script>
import { Drawer,Button,Icon} from 'iview';
export default {
  name: 'myTeam',
  data () {
    return {
     isOpen:false
    }
  },
  methods:{
    openDrawer(){
      this.isOpen=true
    },
    teamDetail(){
      this.$router.push({ path: 'memberInformation'});
    }
  },
  components:{
    Drawer,
    Button,
    Icon
  }
}
</script>
<style scoped>
img{
  width: 100%;
  height:100%;
  overflow: hidden;
}
.teamSearch{
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
  width: 250px;
  border: none;
  height:24px;
  outline: 0;
  vertical-align: middle;
}
.searchBtn{
  margin-top: 15px;
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
</style>