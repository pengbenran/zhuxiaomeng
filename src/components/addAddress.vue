<template>
	<div class="addAddress" v-wechat-title="$route.meta.title">
		<div class="item"><span>收货姓名:</span><input type="text" placeholder="请输入收货人" v-model="username"/>
		</div> 
		<div class="item"><span>手机号码:</span><input type="text" placeholder="请输入手机号码" v-model="userphone" /></div> 
    <!--  <div class="item itemModel"><span>所在地区</span><span @click="selectAddress">请选择地区</span></div> 
       <div class="AddressModel">
            <textarea placeholder='请选择地址' :value='addres'   placeholder-style='font-size:13px;font-weight: 100;color:#8e8e8e;' v-model="addr"></textarea>
        </div> -->
        <div class="item"><span>详细地址:</span><input type="text" placeholder="门牌号、街区号、单元号楼层" v-model="detailaddr"/></div> 
  <!--   <Switch size="large">
    		<span slot="open">开启</span>
    		<span slot="close">关闭</span>
    	</Switch> -->
    	<div class="ico">	
    		<span>默认收货地址</span>
    	</div>
    	<div class="SubBtn"><span>{{tip}}</span></div>
    </div>
</template>

<script>
// import {Switch} from 'iview';
export default {
  name: 'addAddress',
  data () {
    return {
    	switch1Checked: false,
    	addresInfo:'',
    	isDeafult:0,
    	username:'',
    	userphone:'',
    	addr:'',
    	detailaddr:'',
    	memberId:'',
    	Type:'',
    	tip:'新增地址',
    	addrId:''
    }
  },
  components:{
  
  }
}
</script>
<style scoped lang="less">
img{display: block;height: 100%;width: 100%;}

.input-placeholder{font-size:10px;font-weight: 100;color:#8e8e8e;}
input,textarea{font-size: 16rpx;font-weight: 100;color: #000;}
.addAddress{
    .item{display: flex;align-items: center;font-size: 18px;font-weight: 100;padding: 5px 10px;height:40px;line-height:40px;justify-content: space-between;}
    .item span{padding: 0 10px;box-sizing: border-box;}
    .item input{border: none;outline:0;flex-grow: 1;}

}

.itemModel{justify-content: space-between;
 span{font-size: 13px;color: #fff;background:rgb(252,154,47);border-radius: 13px;padding: 0 5px;}
}
.ico{display: flex;justify-content: space-between;padding: 10px 20px;font-size: 16px;}

.SubBtn{text-align: center;margin-top: 15px;
    span{display: inline-block;background: rgb(252,154,47);color: #fff;width: 90%;span-align: center;line-height: 40px;line-height: 40px;border-radius: 25px;}
}

.AddressModel{padding: 5px 15px;
    textarea{width: 100%;height: 35px;}
}


</style>