<template>
 <div class="m-tabbar">
      <mTabbarItem id='tab1'>
          <img src="../../assets/img/shouye2.png" alt="" slot="icon-normal"> 
          <img src="../../assets/img/shouye.png" alt="" slot="icon-active"> 
          首页
      </mTabbarItem>
<<<<<<< HEAD
      
      
      
         <!--<mTabbarItem id='tab2'>
          <img src="../../assets/img/zhangdan.png" alt="" slot="icon-normal"> 
          <img src="../../assets/img/zhangdan1.png" alt="" slot="icon-active"> 
          账单
        </mTabbarItem> 
         <mTabbarItem id='tab3'>
=======
     <!--    <mTabbarItem id='tab2'>
          <img src="../../assets/img/zhangdan.png" alt="" slot="icon-normal"> 
          <img src="../../assets/img/zhangdan1.png" alt="" slot="icon-active"> 
          账单
        </mTabbarItem> -->
       <!--  <mTabbarItem id='tab3'>
>>>>>>> b1055d36afde891d0c95673a438f39f6a2cce8d4
         <img src="../../assets/img/feilv.png" alt="" slot="icon-normal"> 
         <img src="../../assets/img/feilv1.png" alt="" slot="icon-active"> 
          费率
        </mTabbarItem> -->
<<<<<<< HEAD
        
        
       <mTabbarItem id='tab4'>
          <img src="../../assets/img/my.png" alt="" slot="icon-normal"> 
         <img src="../../assets/img/my1.png" alt="" slot="icon-active"> 
                 会员中心
=======
       <mTabbarItem id='tab4'>
          <img src="../../assets/img/my.png" alt="" slot="icon-normal"> 
         <img src="../../assets/img/my1.png" alt="" slot="icon-active"> 
          我的
>>>>>>> b1055d36afde891d0c95673a438f39f6a2cce8d4
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
    height: 50px;
    background: #fff;
    border-top: 1px solid #e4e4e4;
}
</style>