<template>
  <div>
    <div class="showmodel" v-if="selectbtnbool_s"></div>
        <div class="itemmask" :class="{'selectbtn':selectbtnbool_s}">
        <div class="bntlistt">
            <div class="btn1" v-for="(item,index) in lisbtn" @click="toclick(item.url)">
            <div class="btnimg"><img :src="item.btnimg"></div>
            <div class="titless">{{item.btnname}}</div>
            </div>
        </div>
        <div class="itemleft" @click="dingjidong">{{tip}}</div>
    </div>
  </div>
</template>

<script>
export default {
//   props: ['lisbtn_s'],
  data () {
    return {
        tip:'快速导航',
        selectbtnbool_s:false,
        lisbtn:[
        {btnname:'首页',btnimg:require('../assets/img/homeselect.png'),url:'home'},
        {btnname:'个人中心',btnimg:require('../assets/img/myselfselect.png'),url:'myself'},
        {btnname:'购物车',btnimg:require('../assets/img/cartselect.png'),url:'cart'},
        ],
      }
    },
    methods: {
      toclick(url){
        let that=this 
        that.$router.push({ path:url});
      },
      dingjidong(){
       this.selectbtnbool_s=!this.selectbtnbool_s;
       if(this.selectbtnbool_s){
       this.tip='收缩'
       }
       else{
        this.tip='快速导航'
       }
      },
    }
}
</script>

<style>
/*itemmask*/
.itemmask{position: fixed;z-index: 3;left:-207px;bottom:83px;display:flex;align-items: center;transition: all 0.4s;}
.bntlistt{display: flex;align-items:center;}
.selectbtn{left:0px;}
.itemleft{font-size: 13px;color: #fff;background: #000;opacity: 0.2;width: 30px;height: 42px;text-align: center;
border-top-right-radius: 5px;border-bottom-right-radius: 5px;padding-left:9px;padding-right:9px;display: flex;align-items: center;justify-content: center;}
.showmodel{position: fixed;z-index: 2;height: 100vh;width: 100%;top: 0;left: 0;;background:#000;opacity:0.2;}
.btnimg{text-align: center;height: 27px;}
.btnimg img{width: 27px;height: 27px;margin: auto;}
.bntlistt  .titless{color: #666;font-size: 13px;display: block;text-align: center;}
.btn1{padding:7px 13px;}
.bntlistt{background: #fff;border-radius: 3px;}
</style>