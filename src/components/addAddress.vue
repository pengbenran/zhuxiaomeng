<template>
	<div class="addAddress" v-wechat-title="$route.meta.title">
		<div class="item"><span>收货姓名:</span><input type="text" placeholder="请输入收货人" v-model="username"/>
		</div> 
		<div class="item"><span>手机号码:</span><input type="text" placeholder="请输入手机号码" v-model="userphone" /></div> 
    <!--  <div class="item itemModel"><span>所在地区</span><span @click="selectAddress">请选择地区</span></div> 
       <div class="AddressModel">
            <textarea placeholder='请选择地址' :value='addres'   placeholder-style='font-size:13px;font-weight: 100;color:#8e8e8e;' v-model="addr"></textarea>
        </div> -->
        <div class="item">
            <!-- <span>收货地址:</span> -->
            <Select v-model="province" style="width:100px" placeholder="省">
                <Option v-for="item in arr" :value="item.name" :key="item.name">{{ item.name }}</Option>
            </Select>
            <Select v-model="city" style="width:100px" placeholder="市">
                <Option v-for="item in cityArr" :value="item.name" :key="item.value">{{ item.name }}</Option>
            </Select>
            <Select v-model="region" style="width:100px" placeholder="区">
                <Option v-for="item in districtArr" :value="item.name" :key="item.value">{{ item.name }}</Option>
            </Select>
        </div>
        <div class="item"><span>详细地址:</span><input type="text" placeholder="门牌号、街区号、单元号楼层" v-model="detailaddr"/></div> 
  <!--   <Switch size="large">
    		<span slot="open">开启</span>
    		<span slot="close">关闭</span>
    	</Switch> -->
    	<div class="ico">	
    		<span>默认收货地址</span>
    	</div>
    	<div class="SubBtn" @click="addAddress"><span>{{tip}}</span></div>
    </div>
</template>

<script>
// import {Switch} from 'iview';
import {Select,Option} from 'iview';
import ProtoTypeAPI from '../network/apiServer'
import store from '../store/store'
import City from '../store/city'
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
        addrId:'',
        arr: City.state.address,
        cityArr:[],
        districtArr:[],
    province: '北京',
    city: '北京',
    region: '东城区'
    }
  },
  components:{
  Select,
  Option
  },
  methods:{
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
        let parms = {}
        let address = {} 
        parms.memberId = memberId
        address.memberId = memberId
        address.defAddr = that.isDeafult
        address.name = that.username
        address.mobile = that.userphone
        address.addr = that.detailaddr
        address.region = that.region
        address.province = that.province
        address.city = that.city
        parms.address=address
        if(that.Type=='edit'){
         address.addrId= that.addrId 
          // let editAddr=await api.editAddr(parms)
          if(editAddr.data.code==0){
           wx.showToast({
            title: '修改成功',
            icon: 'success',
            duration: 1500
          })
         }
        }
        else{
         let addrresRes=await that.API.addAddress(parms)
         if(addrresRes.data.code=='0'){
            this.$Message.success('添加成功');
         }
        }
        //  wx.navigateTo({
        //   url: '../addressList/main',
        // })
      }
    },
    
    updateCity: function () {
    for (var i in this.arr) {
        var obj = this.arr[i];
        if (obj.name == this.province) {
            this.cityArr = obj.sub;
            break;
        }
        }
        this.city = this.cityArr[1].name;
    },

    updateDistrict: function () {
    for (var i in this.cityArr) {
        var obj = this.cityArr[i];
        if (obj.name == this.city) {
            this.districtArr = obj.sub;
            break;
            }
        }
        if(this.districtArr && this.districtArr.length > 0 && this.districtArr[1].name) {
            this.region = this.districtArr[1].name;
        } else {
            this.region = '';
        }
    }

  },
//   mounted:function(){
//       let arr = City.state.address
//       this.arr = arr
//       console.log("地址",arr)
//   },
  beforeMount: function () {
    this.updateCity();
    this.updateDistrict();
    },
    watch: {
    province: function () {
        this.updateCity();
        this.updateDistrict();
    },
    city: function () {
        this.updateDistrict();
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
.ico{display: flex;justify-content: space-between;padding: 10px 20px;font-size: 16px;}

.SubBtn{text-align: center;margin-top: 15px;
    span{display: inline-block;background: rgb(252,154,47);color: #fff;width: 90%;span-align: center;line-height: 40px;line-height: 40px;border-radius: 25px;}
}

.AddressModel{padding: 5px 15px;
    textarea{width: 100%;height: 35px;}
}


</style>