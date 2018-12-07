<template>
  <div class="addr">
   <div class="topImg"><img :src="topImg"/></div><span>{{shopname}}</span>
  </div>
</template>

<script>
export default {
  props: ['shopname'],
  data () {
    return {
      topImg:'https://shop.guqinet.com/html/images/shuiguo/cart/home.jpg'	
    }
    },
    methods: {
  		
    }
}
</script>

<style scoped lang='less'>
img{
  width: 100%;
  height: 100%;
  display: block;
}
.addr{display: flex;align-items: center;
font-size: 13px;font-weight: 100;color: rgb(170, 170, 170);height: 39px;padding: 0 5px;border-bottom: 3px solid rgb(243,243,243);
   .topImg{height: 23px;width: 23px;margin-left: 5px;margin-right: 5px;}
   small{display: inline-block;margin-left: 3px;color: rgb(236,189,87);}
}
</style>
