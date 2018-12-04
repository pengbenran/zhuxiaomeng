<template>
  <div class="myTeam" v-wechat-title="$route.meta.title">
     <div class="teamSearch">
       <div class="searchInput">
          <img src="../assets/img/search.png">
          <input type="text" placeholder="搜索队员">
       </div>
       <div class="searchBtn">搜索</div>
     </div>
     <div class="teamCount">
       <div class="kind"><img src="../assets/img/kind.png">全部</div>
       <div class="teamTotal">团队总人数:1222</div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'myTeam',
  data () {
    return {
     
    }
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
  width: 60px;
  height:30px;
  text-align: center;
  background: #fff;
  border-radius: 15px;
  margin-top: 15px;
  line-height: 30px;
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
</style>