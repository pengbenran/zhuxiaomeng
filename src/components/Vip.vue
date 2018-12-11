<template>
  <div class="Assets" v-wechat-title="$route.meta.title">
     <div class="header">
         <div class="top"><span>记录</span><span>提现</span></div>
         <div class="middle">
             <img src="../assets/img/linqian.png" />
             <p>零钱</p>
            <h1><span>￥</span>0.00</h1>
         </div>
     </div>
     <!--header end-->

     <div class="Case">
         <div class="Title">功能</div>
         <div class="ListItem">
             <div class="Item">
                 <div class="Left"> <span><img src="../assets/img/vip.png"></span></div>
                 <div class="Right"><span>会员卡</span><label>（0）张</label></div>
             </div>
            <div class="Item">
                 <div class="Left"> <span><img src="../assets/img/vip.png"></span></div>
                 <div class="Right"><span>会员卡</span><label>（0）张</label></div>
             </div>
            <div class="Item">
                 <div class="Left"> <span><img src="../assets/img/vip.png"></span></div>
                 <div class="Right"><span>会员卡</span><label>（0）张</label></div>
             </div>
         </div>
     </div>
  </div>
</template>

<script>
export default {
  name: 'Assets',
  data () {
    return {
    
    }
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

.ListItem{display: flex;justify-content: space-between;align-items: center;flex-wrap: wrap;
  .Item{box-sizing: border-box;display: flex;align-items: center;justify-content: center;background: #fff;width: 50%;padding: 10px 0;
        border-bottom: 1px solid #f3f3f3;}
  .Left span{display: inline-block;background: rgb(231,164,51);border-radius: 50%;width: 42px;height: 42px;text-align: center;margin-right: 15px;}
  .Left img{width: 30px;height: 30px;margin-top: 6px;}
  .Right{font-size: 14px;color: #666;}
  .Item:nth-child(even){border-left: 1px solid #f3f3f3;}
}

</style>
