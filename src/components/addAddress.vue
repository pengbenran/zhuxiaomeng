<template>
	<div class="addAddress" v-wechat-title="$route.meta.title">
		<div class="item"><span>收货姓名:</span><input type="text" placeholder="请输入收货人" v-model="username"/>
		</div> 
		<div class="item"><span>手机号码:</span><input type="text" placeholder="请输入手机号码" v-model="userphone" /></div> 
    <div class="item"><span>选择地址:</span><input @input="upPicker" type="text" @click="upPicker"  placeholder="请输入地址" v-model="useraddress" /></div>


    <mt-popup v-model="popupVisible" class="poPup"  position="bottom">

           <div class="address">
       <mt-picker :slots="slots" @change="onValuesChange"  valueKey="name"></mt-picker>
     </div>

    </mt-popup>

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
import { Picker,Popup } from 'mint-ui';
import ProtoTypeAPI from '../network/apiServer'
import store from '../store/store'
import City from '../store/city'
import { Toast } from 'mint-ui';
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
      useraddress:'',
      Valueaddress:[],
      popupVisible:false,
        slots: [
          //省
          {
            flex: 1,
            values: this.ShenArr(), //省份数组
            className: 'slot1',
            textAlign: 'center'
          },
           //分隔符
          {
            divider: true,
            content: '',
            className: 'slot2'
          },
          //市
          {
            flex: 1,
            values: this.CityArr('请选择省份'),
            className: 'slot3',
            textAlign: 'center'
          },
          {
            divider: true,
            content: '',
            className: 'slot4'
          },
          //县
          {
            flex: 1,
            values: this.QuArr('请选择省份','请选择'),
            className: 'slot5',
            textAlign: 'center'
          }
        ],
    }
  },
  components:{
  Select,
  Option,
 'mt-picker':Picker,
 'mt-popup': Popup
  },
  methods:{
    //地区选择
    onValuesChange(picker,values){
     let that = this;
  
       
          // console.table(values);

          // console.log(picker.getSlotValue(0));
          // console.table(picker.getSlotValues(0));
          // console.table(picker.getValues());
          // console.log(picker.setSlotValues(1))
     
          picker.setSlotValues(1, this.CityArr(values[0]["name"])); //更新第二个的数据
          picker.setSlotValues(2, this.QuArr(values[0]["name"], values[1]["name"])); //更新第三个的数据
         console.log(picker,values,"事件触发参看参数",values[0].name)
         that.Valueaddress = values
         if(values[0].name != '选择省份'){
           that.useraddress = values[0].name + values[1].name + values[2].name
         }
         
    },

    //拉起地区选择
    upPicker(){
      console.log("6666")
      let that = this;
      that.popupVisible = true
    },

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
        Toast('用户名不能为空');
      }
      else if(!myreg.test(that.userphone)){
        Toast('手机号格式不正确');
      }
      else if(that.useraddress ==''){
         that.$Message.warning('地址不详细');
      }
      else if(that.detailaddr==''){
        Toast('详细地址不能为空');
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
        address.region = that.Valueaddress[2].name
        address.province = that.Valueaddress[0].name
        address.city = that.Valueaddress[1].name
        params.address=address
        if(that.Type=='edit'){
         address.addrId= that.addrId 
          let editAddr=await that.API.editAddr(params)
          if(editAddr.data.code==0){
          Toast({
            message: '修改成功',
            iconClass: 'icon icon-success'
          });
         }
        }
        else{
         let addrresRes=await that.API.addAddress(params)
         if(addrresRes.data.code=='0'){
            Toast({
              message: '添加成功',
              iconClass: 'icon icon-success'
            });
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
    },

   //获取省级城市
    ShenArr(){
      let that = this;
      let ShenArr = []
      console.log()
      City.state.address.map(v=>{
          var obj = {}
          obj.name = v.name
          obj.type = v.type
          ShenArr.push(obj)  
      })
       return ShenArr
    },
    //获取市级城市
    
    CityArr(shenName){
      let that = this;
      let CityArrs = []
     var kong =[{name:'请选择'}] 
      City.state.address.map(v=>{
        // console.log("4564654",v.sub.length)
        if(shenName == v.name){
          v.sub.map(c=>{
            var obj = {}
            obj.name = c.name
            CityArrs.push(obj)
          })
        }
      })
      return CityArrs.length == 0? kong : CityArrs
    },

    //获取区级、
    QuArr(shenName,cityName){
      let that = this;
      let QuArrs = []
       var kong =[{name:'请选择'}] 
      City.state.address.map(v=>{
        if(shenName == v.name){
          v.sub.map(c=>{
            if(c.name == cityName&&c.sub!=undefined)
            c.sub.map(z=>{
                  var obj = {}
                  obj.name = z.name
                  QuArrs.push(obj)
            })
          })
        }
      })
      return QuArrs.length == 0? kong : QuArrs
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
      that.$route.meta.title='新增地址'
      that.addrId = ''
      that.username=''
      that.userphone = ''
      that.addr = ''
      that.detailaddr = ''
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
.poPup{width: 100%;}

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