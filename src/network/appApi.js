import Vue from 'vue'
import axios from 'axios'
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
  }
}
