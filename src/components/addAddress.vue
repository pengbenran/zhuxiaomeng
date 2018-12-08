<template>
	<div class="addAddress" v-wechat-title="$route.meta.title">
		<div class="item"><span>收货姓名:</span><input type="text" placeholder="请输入收货人" v-model="username"/>
		</div> 
		<div class="item"><span>手机号码:</span><input type="text" placeholder="请输入手机号码" v-model="userphone" /></div> 
    <div class="item">
      <!-- <span>收货地址:</span> -->
      <Select v-model="province" style="width:100px" placeholder="省">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Select v-model="city" style="width:100px" placeholder="市">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
      <Select v-model="region" style="width:100px" placeholder="区">
        <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
      </Select>
    </div>
    <div class="item"><span>详细地址:</span><input type="text" placeholder="门牌号、街区号、单元号楼层" v-model="detailaddr"/></div> 
  <!--   <Switch size="large">
    		<span slot="open">开启</span>
    		<span slot="close">关闭</span>
    	</Switch> -->
    	<div class="ico">	
    		<span class="moren">
          <!-- <span class="selectIcon"></span> -->
          <img @click="setDeafult" v-if="isDeafult==0" src="../assets/img/nochoose.png"/>
          <img @click="setDeafult" v-if="isDeafult==1" src="../assets/img/choose.png"/>
          设为默认地址
        </span>
      </div>
      <div class="SubBtn" @click="addAddress"><span>{{tip}}</span></div>
    </div>
</template>

<script>
// import {Switch} from 'iview';
import {Select,Option} from 'iview';
import ProtoTypeAPI from '../network/apiServer'
import store from '../store/store'
export default {
  name: 'addAddress',
  data () {
    return {
    	addresInfo:'',
    	isDeafult:0,
    	username:'',
    	userphone:'',
    	addr:'',
    	detailaddr:'',
    	memberId:'',
    	Type:'',
    	tip:'新增地址',
    	addrId:'',
      cityList: [
      {
        value: 'New York',
        label: 'New York'
    },
    {
        value: 'London',
        label: 'London'
    },
    {
        value: 'Sydney',
        label: 'Sydney'
    },
    {
        value: 'Ottawa',
        label: 'Ottawa'
    },
    {
        value: 'Paris',
        label: 'Paris'
    },
    {
        value: 'Canberra',
        label: 'Canberra'
    }
    ],
    province: '',
    city: '',
    region: ''
    }
  },
  components:{
  Select,
  Option
  },
  methods:{
    setDeafult(){
      let that=this
      that.isDeafult=that.isDeafult==1?0:1
      // that.switch1Checked=!that.switch1Checked
    },
   async addAddress(){
      var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1})|(17[0-9]{1}))+\d{8})$/;
      let that=this
      let memberId=store.state.userInfo.memberId 
      if(that.username==''){
        that.$Message.warning('用户名不能为空');
      }
      else if(!myreg.test(that.userphone)){
         that.$Message.warning('手机号格式不正确');
      }
      else if(that.detailaddr==''||that.region==''||that.province==''||that.city==''){
         that.$Message.warning('地址不详细');
      }
      else if(that.detailaddr==''){
         that.$Message.warning('详细地址不能为空');
      }
      else{
        let params = {}
        let address = {} 
        params.memberId = memberId
        address.memberId = memberId
        address.defAddr = that.isDeafult
        address.name = that.username
        address.mobile = that.userphone
        address.addr = that.detailaddr
        address.region = that.region
        address.province = that.province
        address.city = that.city
        params.address=address
        if(that.Type=='edit'){
         address.addrId= that.addrId 
          let editAddr=await that.API.editAddr(params)
          if(editAddr.data.code==0){
          this.$Message.success('修改成功');
         }
        }
        else{
         let addrresRes=await that.API.addAddress(params)
         if(addrresRes.data.code=='0'){
            this.$Message.success('添加成功');
         }
        }
        this.$router.push({ path:'addressList'});
      }

    },
    async getAddrById(addrId){
      let that=this
      let addrDetail=await that.API.getAddrById(addrId)
      if(addrDetail.data.code==0){
        that.addrId = addrDetail.data.getaddr.addrId
        that.username=addrDetail.data.getaddr.name
        that.userphone = addrDetail.data.getaddr.mobile
        that.addr = addrDetail.data.getaddr.addr
        that.province=addrDetail.data.getaddr.province
        that.city=addrDetail.data.getaddr.city
        that.region=addrDetail.data.getaddr.region
        that.detailaddr = addrDetail.data.getaddr.addr
        that.isDeafult=addrDetail.data.getaddr.defAddr
      }
    }
  },
  mounted(){
    let that=this
     if(that.$route.params.addrId!=undefined){
      that.getAddrById(that.$route.params.addrId)
      that.Type='edit'
      that.tip="修改地址"
      that.$route.meta.title='修改地址'
     //  wx.setNavigationBarTitle({
     //   title: "修改地址"//页面标题为路由参数
     // })
    }
    else{
      that.addrId = ''
      that.username=''
      that.userphone = ''
      that.addr = ''
      that.detailaddr = ''
      that.switch1Checked=false 
    }
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
.ico{display: flex;justify-content: space-between;padding: 10px 20px;font-size: 16px;
.moren img{display: inline-block;width: 25px;height:25px;vertical-align:middle;}
}

.SubBtn{text-align: center;margin-top: 15px;
    span{display: inline-block;background: rgb(252,154,47);color: #fff;width: 90%;span-align: center;line-height: 40px;line-height: 40px;border-radius: 25px;}
}

.AddressModel{padding: 5px 15px;
    textarea{width: 100%;height: 35px;}
}


</style>