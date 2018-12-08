import Vue from 'vue'
import axios from 'axios'
import qs from 'qs';
axios.defaults.baseURL ='http://192.168.2.111';
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
	},// 获取购物车列表
		getShopList(memberId){
			return new Promise ((resolve, reject)=>{
				axios.get('/api/shoppingCart/select/'+memberId)	.then(res=>{  resolve(res) })
			})
		},// 添加购物车
		toCartSave(cartparms){
			return new Promise((resolve , reject)=>{
				axios.post('/api/shoppingCart/save',cartparms,{ headers:{ 'Content-Type': 'application/json'} })
				.then(res=>{ resolve(res) })
			})
		},
		editCartNum(cartNumParams){
				return new Promise((resolve , reject)=>{
					axios.put('/api/shoppingCart/modification',cartNumParams,
					 {headers:{ 'Content-Type': 'application/json'}}).then(res=>{
						resolve(res)
					})
				})
		}
		
}
