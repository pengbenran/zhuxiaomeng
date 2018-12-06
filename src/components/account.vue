<template>
  <div class="account" v-wechat-title="$route.meta.title">
     <div class="top">
		 <span>全部</span>
		 <span>收入</span>
		 <span>支出</span>
	 </div>
	 <div class="mx">
		 <div>
			<h3>一级金牌推手</h3>
			<p>2018-11-11 12:12:12</p> 
		 </div>
		 <div>
			 <span>+50</span>
		 </div> 
	 </div>
  </div>
</template>

<script>
export default {
  name: 'account',
  data () {
    return {
    
    }
  }
}
</script>
<style scoped>
	.top{
		display: flex;
		justify-content: space-around;
		background: #C5C8CE;	
	}
	.top span{
		flex-grow: 1;
		border-right: 1px solid #DCDEE2 ;
		text-align: center;
		font-size: 16px;	
	}
	.top span:last-child{
		border: 0;
	}
	.mx p{
	   padding-top:10px;
	}
	.mx span{
		color: red;
		line-height:50px;
	}
	.mx{
		display: flex;
		justify-content: space-between;
		border-bottom: 1px solid #DCDEE2;
		padding:10px 6px 10px 6px;
		
	}

</style>
