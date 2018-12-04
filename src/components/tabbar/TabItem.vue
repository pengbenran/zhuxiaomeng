<template>
  <div class="m-tabbar-item" 
  :class="{'is-active':isActive}" 
  @click="$parent.$emit('input',id)">
  <span class="m-tabbar-item-icon" v-show="!isActive">
    <slot name="icon-normal"></slot>
</span>
<span class="m-tabbar-item-icon" v-show="isActive">
    <slot name="icon-active"></slot>
</span>
<span class="m-tabbar-item-text">
    <slot></slot>
</span>
</div>
</template>
<script>
    export default{
        props: ['id'],
        computed: {
           isActive(){
           if(this.$parent.value===this.id&&this.$parent.value==="tab1"){
                this.$router.push({path:'home'}); 
                return true;
           } 
           
           
           
           // else if(this.$parent.value===this.id&&this.$parent.value=="tab2"){
           //      this.$router.push({path:'billdetail'}); 
           //       return true;
           //   }
           //  else if(this.$parent.value===this.id&&this.$parent.value==="tab3"){
           //      this.$router.push({path:'rate'}); 
           //      return true;
           //   }
           
           
           
            else if(this.$parent.value===this.id&&this.$parent.value==="tab4"){
                this.$router.push({path:'myself'}); 
                return true;
             }
            }
        }
    }
</script>
<style lang="less">
    .m-tabbar-item{
        flex: 1;
        text-align: center;
        .m-tabbar-item-icon{
            display: block;
            padding-top: 5px;
            img{
                width: 28px;
                height: 28px;
            }

        }
        .m-tabbar-item-text{
            display: block;
            font-size: 10px;
            color:#949494;
        }
        &.is-active{
            .m-tabbar-item{
                background:#ddd;
            }
            .m-tabbar-item-text{
                color: #26A2FF;
            }
        }
    }
</style>