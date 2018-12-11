import Vue from 'vue'
import axios from 'axios'
import qs from 'qs';
// axios.defaults.baseURL ='https://customs.guqinet.com/place/';
// axios.defaults.baseURL ='https://www.guqinjiujiang.xyz:8444/guoranhuiwei';
// axios.defaults.baseURL ='http://192.168.2.208';
 axios.defaults.baseURL ='http://192.168.2.208';
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
      let Token='16_rlMtmLgTCsEYqU4ezgwVQLIjCSWXxftl-oW2tPzo4V-4NOxpN2En2syMTL3FEu7fvXUmUba2XPsghWIMO2NSRodqw3aKOufiuDzQ5lFcWpp9f6YbTpMYAzfyhUvKDM3A7o15GvwXNWnKIAi3VYRcAJAGJC'
      let scoreRes = axios.post('https://api.weixin.qq.com/cgi-bin/qrcode/create?access_token='+Token,{"action_name": "QR_LIMIT_SCENE", "action_info": {"scene": {"scene_id": 123}}},{headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
        )
      resolve(scoreRes)
    }) 
  },
  getScoeImg(){
      return new Promise((resolve,reject) => {
      let Token='16_rlMtmLgTCsEYqU4ezgwVQLIjCSWXxftl-oW2tPzo4V-4NOxpN2En2syMTL3FEu7fvXUmUba2XPsghWIMO2NSRodqw3aKOufiuDzQ5lFcWpp9f6YbTpMYAzfyhUvKDM3A7o15GvwXNWnKIAi3VYRcAJAGJC'
      let getScoeImgRes = axios.get('https://mp.weixin.qq.com/cgi-bin/showqrcode?ticket=gQHA8DwAAAAAAAAAAS5odHRwOi8vd2VpeGluLnFxLmNvbS9xLzAyX1lZRGtTbS1mdEQxMDAwMHcwM2YAAgTHPA5cAwQAAAAA')
      resolve(getScoeImgRes)
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
	},// 获取购物车列表
		getShopList(memberId){
			return new Promise ((resolve, reject)=>{
				axios.get('/api/shoppingCart/select?memberId='+memberId).then(res=>{  resolve(res) })
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
		},
    // 订单提交
    OrderSave(orderParam){
      return new Promise((resolve , reject)=>{
        let order={}
        order.order=JSON.stringify(orderParam)
        let orderSave = axios.post('/api/order/save',qs.stringify(order),{headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }})
        resolve(orderSave)
      })
    },
      //确认付款
  ConfirmPay(params){
    return new Promise((resolve,reject) =>{
      let payParams={}
      payParams.params=JSON.stringify(params)
      let Pay = axios.post('/api/pay/prepay',qs.stringify(payParams),{headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
        }})
      resolve(Pay)
    })
  },
  // 获取订单列表
  OrderSelectList(params){
    return new Promise((resolve,reject) => {
      let orderParams={}
      orderParams.params=JSON.stringify(params)
      console.log(qs.stringify(orderParams))
      let OrderList = axios.get('/api/order/orderList?'+qs.stringify(orderParams))
      resolve(OrderList)
    })
  },
    //获取订单全部列表
  AllGoodList(params){
    return new Promise((resolve,reject) => {
      let orderParams={}
      orderParams.params=JSON.stringify(params)
       let GoodList = axios.get('/api/order/apiSelectOrderList?'+qs.stringify(orderParams))
       resolve(GoodList)
    })
  },
  // 订单支付成功后修改状态
  PaypassOrder(params){
    return new Promise((resolve,reject) => {
      let payOrderParams={}
      payOrderParams.params=JSON.stringify(params)
      let Orderres = axios.post('/api/order/passOrder',qs.stringify(payOrderParams),{headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
       }})
      resolve(Orderres)
    })
  },
  // 获取默认地址
  getdefaultAddr(params){
    return new Promise((resolve,reject) => {
      let addrParams={}
      addrParams.params=JSON.stringify(params)
      let addressRes = axios.get('/api/address/defutaddress?'+qs.stringify(addrParams))
      resolve(addressRes)
    }) 
  },

    // 删除购物车商品
    DeleteAll(params){
      return new Promise((resolve,reject) => {
        console.log("原始数据",params,"更改数据",qs.stringify(params))
         let delShop = axios.post('/api/shoppingCart/deleteAll',qs.stringify(params),{headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
         }})
         resolve(delShop)
      }) 
    }
}
