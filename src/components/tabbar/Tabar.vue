<template>
 <div class="m-tabbar">
      <mTabbarItem id='tab1'>
          <img src="../../assets/img/home.png" alt="" slot="icon-normal"> 
          <img src="../../assets/img/homeselect.png" alt="" slot="icon-active"> 
          首页
      </mTabbarItem>    
         <!--<mTabbarItem id='tab2'>
          <img src="../../assets/img/zhangdan.png" alt="" slot="icon-normal"> 
          <img src="../../assets/img/zhangdan1.png" alt="" slot="icon-active"> 
          账单
        </mTabbarItem> 
         <mTabbarItem id='tab3'>
       <mTabbarItem id='tab2'>
          <img src="../../assets/img/zhangdan.png" alt="" slot="icon-normal"> 
          <img src="../../assets/img/zhangdan1.png" alt="" slot="icon-active"> 
          账单
        </mTabbarItem> -->
       <mTabbarItem id='tab3'>
         <img src="../../assets/img/cart.png" alt="" slot="icon-normal"> 
         <img src="../../assets/img/cartselect.png" alt="" slot="icon-active"> 
         购物车
       </mTabbarItem>
        
       <mTabbarItem id='tab4'>
          <img src="../../assets/img/myself.png" alt="" slot="icon-normal"> 
         <img src="../../assets/img/myselfselect.png" alt="" slot="icon-active"> 
                 会员中心
        </mTabbarItem>
 </div>
</template>
<script>
 import mTabbarItem from './TabItem.vue';
    export default {
        props: ['value'],
        name: 'tabbar',
        components: {
          mTabbarItem,
        }
    }
</script>
<style lang="less">
.m-tabbar{
    display: flex;
    flex-direction: row;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    overflow: hidden;
    height: 60px;
    background: #fff;
    border-top: 1px solid #e4e4e4;
}
</style>