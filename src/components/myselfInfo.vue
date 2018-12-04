<template>
  <div class="hello">
	  <div class="title">
		  <div class="order1">
			<div class="info">
				  <span>头像</span>
				  <div>
					<img src="../assets/img/touxiang.png" alt="">
					<img src="../assets/img/fanhui.png" alt="">
				  </div>		
			</div>
			<div class="info">
				<span>微信二维码</span>
				<div>
					<em>上传</em>
					<img src="../assets/img/fanhui.png" alt="" class="pic">
				</div>		
			</div>
			<div class="info">
				<span>我的ID</span>
				<div >
				   <em>666666</em>
				</div>		
			</div>
			<div class="info">
				<span>微信昵称</span>
				<div >
				<em>666666</em>
				</div>		
			</div>
			<div class="info">
				<span>微信</span>
				<div >
					 <img src="../assets/img/fanhui.png" alt="" class="pic">
				</div>		
			</div>
			<div class="info">
				<span>QQ</span>
				<div >
					<img src="../assets/img/fanhui.png" alt="" class="pic">
				</div>		
			</div>
		</div>
		<div class="order2">
			<div class="info">
				<span>真实姓名</span>
				<div >
					<img src="../assets/img/fanhui.png" alt="" class="pic">
				</div>		
			</div>
			<div class="info">
				<span>性别</span>
				<div >
					<img src="../assets/img/fanhui.png" alt="" class="pic">
				</div>		
			</div>
			<div class="info">
				<span>生日</span>
				<div >
					<img src="../assets/img/fanhui.png" alt="" class="pic">
				</div>		
			</div>
			<div class="info">
				<span>职业</span>
				<div >
					<img src="../assets/img/fanhui.png" alt="" class="pic">
				</div>		
			</div>
		</div>		
	</div>
  </div>
</template>

<script>
export default {
  name: 'myselfInfo',
  data () {
    return {
    
    }
  }
}
</script>
<style scoped>
	em{
		font-style:normal;
	    vertical-align: middle;	
	}
	.hello{
		background:#F2F2F2; 
		}
	.title{
		display: flex;
		flex-direction:column;
	}
	.order1{
		background:#fff;	
	}
	.order2{
		background:#fff;
		margin: 20px 0 70px 0;	
	}
	
	.info .pic{
		vertical-align: middle;
	}	
	.info{
		display: flex;
		justify-content: space-between;
		padding: 5px 5px;
		border-bottom: .5px solid #F0F0F0;
		vertical-align: middle;
	}
	.info span{
		display: block;
		vertical-align: middle;
		margin-top: 10px;
	}
 	.info img:first-child{
		width:30px ;
		height: 30px;
		margin-bottom: 16px;
		vertical-align: middle;
	}
</style>