import Vue from 'vue'
import axios from 'axios'
import qs from 'qs';
axios.defaults.baseURL ='http://192.168.2.131';
export default {
	getMemberInfo(openId){
		return new Promise((resolve, reject) => {
			let getMemberInfoRes=axios.get('/api/place/getMemberInfo?openId='+openId)
			resolve(getMemberInfoRes)
		})
	},
	// 获取商品详情
    getGoodDetail(goodsId){
    	return new Promise((resolve, reject) => {
    		let getGoodsDetailRes=axios.get('/api/Goods/getGoods?goodsId='+goodsId)
    		resolve(getGoodsDetailRes)
    	})
    },
    // 获取所有地址列表
    getAllAddress(memberId){
     return new Promise((resolve,reject) => {
      let allAddressRes = axios.get('/api/address/addressAll?memberId='+memberId)
      resolve(allAddressRes)
    }) 
  },
// 新增地址
    addAddress(parms){
    	return new Promise((resolve,reject) => {
    		let params={}
    		params.params=JSON.stringify(parms) 
    		let addressRes = axios.post('/api/address/add',qs.stringify(params),{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
    			)
    		resolve(addressRes)
    	}) 
  },
  getScoe(){
    return new Promise((resolve,reject) => {
      let Token='16_8ZvyWvQGmoaQMnfAieE48t7BQvUI1AYATfNEC6p4Jzzf5rIyel1aA4ex40p7M0_0M0r0cFNvh-upjU5tP2xs10UXBLW4pRsayvspSBEUWJrX8xLXNJtWF4cP0c2XEylj8Yvx0Rjkfgc8OPdwFSPaAFAVIF'
      let scoreRes = axios.post('https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token='+Token,{"action_name": "QR_LIMIT_SCENE", "action_info": {"scene": {"scene_id": 123}}},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        )
      resolve(scoreRes)
    }) 
    
  },
  // 根据地址ID获取地址详情
  getAddrById(addrId){
    return new Promise((resolve,reject) => {
      let detailAddre = axios.get('/api/address/get?addrId='+addrId)
      resolve(detailAddre)
    })
  },
  // 修改地址
  editAddr(parms){
    return new Promise((resolve, reject) =>{
      let params={}
      params.params=JSON.stringify(parms) 
      let editAddre = axios.put('/api/address/update',qs.stringify(params),{headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }})
      resolve(editAddre)
    })
  }
}
