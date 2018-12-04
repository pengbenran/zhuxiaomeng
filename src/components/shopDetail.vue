<template>
  <div class="shopdetail" v-wechat-title="$route.meta.title">
   <Carousel autoplay>
    <CarouselItem>
      <div class="bannerImgList">
        <img src="https://shop.guqinet.com/shopimages/test/b308a25b-acb5-4ae2-8662-c29af45b7b54.png" mode="widthFix">
      </div>            
    </CarouselItem>
    <CarouselItem>
      <div class="bannerImgList">
        <img src="https://shop.guqinet.com/shopimages/test/4c75dcab-080f-4266-b318-63b0a379d402.png" mode="widthFix">
      </div>            
    </CarouselItem>
  </Carousel>
  <!-- 商品名称及详情 -->
  <div class="goods">
    <div class="title">小孟共享金服VIP卡</div>
    <div class="price"><span class="nowprice">￥399</span><span class="oldprice">￥39900</span></div>
    <div><span class="tip">包邮</span><span class="buycount">已售10000</span></div>
  </div>
</div>
</template>

<script>
import { Carousel,CarouselItem} from 'iview';
export default {
  name: 'shopdetail',
  data () {
    return {
     
    }
  },
    created(){
        
    },
    components:{
  Carousel,
  CarouselItem
  }
}
</script>
<style scoped>
img{
  width: 100%;
  display: block;
}
.bannerImgList{
  width: 100%;
}
.goods{
  padding: 10px;
  box-sizing: box-sizing;
  border-bottom: 3px solid #ddd;
}
.title{
    height: 40px;line-height: 40px;font-size: 22px;
}
.price{
  margin-bottom:10px;margin-top: 10px;
}
.nowprice{
  color:#FF0302;font-size: 22px;
}
.oldprice{text-decoration: line-through;font-size: 16px}
.tip{display: inline-block;height:40px;width: 80px;text-align: center;border-radius: 5px;border:1px solid #ff0302;line-height: 40px;font-size: 20px;color:#FF0302;}
.buycount{display: inline-block;float: right;line-height: 40px;font-size: 16px;}
</style>