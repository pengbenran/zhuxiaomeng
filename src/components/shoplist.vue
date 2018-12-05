<template>
<div class="shopWarp">
     <div class="shopList" v-for="(item,index) in Shop_List">
       <!-- <div class="selectico"> <icon type="circle" class="ico" size="21" /></div> -->
       <div class="itemLeft"><img :src="item.image"/></div>
       <div class="itemRight">
          <div class="title">{{item.name}}</div>
          <small>{{item.specvalue}}</small>
          <div class="price">
             <div class="priceleft"><span>￥{{item.price}}元</span></div>
             <div class="priceright">
                 x {{item.num}}
             </div>
          </div>
       </div>
     </div>
     </div>
</template>
<script>
export default {
  props: ['Shop_List'],
  components:{
 
  },
 
}

</script>
<style scoped lang='less'>
.shopList{display: flex;align-items: center;padding: 10px;border-bottom: 5px solid rgb(243,243,243);
   .itemLeft{width: 35%}
   .itemLeft img{width: 115px;height: 115px;margin: auto}
   .itemRight{width: 65%;padding-right: 20px;}
   .itemRight .title{white-space:normal;overflow: hidden;display: -webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;height: 51px;font-weight: 100;font-size: 15px;color: #8e8e8e;}
   .itemRight small{font-size: 13px;color: #ccc;font-weight: 100;}
   .price{display: flex;align-items: center;justify-content: space-between;}
   .priceleft{
     span{font-size: 18px;font-weight: 100;color: rgb(252,78,79);}
   }
   .priceright{height: 24px;font-size: 14px;font-weight: 100;color: #8e8e8e;
   }
}
</style>
