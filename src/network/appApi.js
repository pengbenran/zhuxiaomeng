import Vue from 'vue'
import axios from 'axios'
import qs from 'qs';
axios.defaults.baseURL ='https://customs.guqinet.com/place/';
 // axios.defaults.baseURL ='http://192.168.2.131';
// axios.defaults.baseURL ='https://www.guqinjiujiang.xyz:8444/guoranhuiwei';
// axios.defaults.baseURL ='http://192.168.2.208';
 // axios.defaults.baseURL ='http://192.168.2.208';
 // axios.defaults.baseURL ='http://192.168.2.208';
// axios.defaults.baseURL ='https://www.guqinjiujiang.xyz:8444/guoranhuiwei';
// axios.defaults.baseURL ='http://192.168.2.208';
//  axios.defaults.baseURL ='http://192.168.2.208';
export default {
  // 获取首页图片
  getIndexImg(){
  return new Promise((resolve, reject) => {
      let indexImgRes=axios.get('/api/index/image')
      resolve(indexImgRes)
    })
  },
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
  // 获取二维码图片
  getQuick(openId){
    return new Promise((resolve,reject) => {
      let scoreRes = axios.get('https://www.guqinet.com:8444/uploadPlace/getQuick?openId='+openId)
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
  //提交银行卡号
  SubmitBankCard(params){
   return new Promise((resolve, reject) =>{
    let bankCard={}
    bankCard.params=JSON.stringify(params)
    let SubmitBankCardRes = axios.post('/api/distribe/submitDistribeApply',qs.stringify(bankCard),{headers:{
      'Content-Type': 'application/x-www-form-urlencoded'
    }})
    resolve(SubmitBankCardRes)
  }) 
  },
  // 判断是否绑定了银行卡
  isBind(memberId){
    return new Promise((resolve, reject) =>{
      let bindCardRes = axios.get('/api/distribe/isHaveCard?memberId='+memberId)
      resolve(bindCardRes)
    }) 
  },
   //微分销提现
   Withdraw(params){
    return new Promise((resolve, reject) =>{
      let withdrawParams={}
      withdrawParams.params=JSON.stringify(params)
      let WithdrawRes = axios.post('/api/distribe/withdraw',qs.stringify(withdrawParams),{headers:{
        'Content-Type': 'application/x-www-form-urlencoded'
      }})
      resolve(WithdrawRes)
    }) 
  },
  // 获取提现记录
  accountManagement(params){
    return new Promise((resolve, reject) =>{
      let accountParams={}
      accountParams.params=JSON.stringify(params)
      let accountManagementRes = axios.get('/api/distribe/accountManagement?'+qs.stringify(accountParams))
      resolve(accountManagementRes)
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
    },
    // 把二维码图片路径存入服务器
    setQrcode(params){
       return new Promise((resolve,reject) => {
        let setQrcodeParams={}
        setQrcodeParams.params=JSON.stringify(params)
         let setQrcodeRes = axios.put('/api/place/getQuick',qs.stringify(setQrcodeParams),{headers:{
          'Content-Type': 'application/x-www-form-urlencoded'
         }})
         resolve(setQrcodeRes)
      }) 
    },
    //获取直推人数
    selectSubordinate(memberId){
      return new Promise((resolve, reject) =>{
      let selectSubordinateRes = axios.get('/api/place/selectSubordinate?memberId='+memberId)
      resolve(selectSubordinateRes)
    }) 
    },
    // 会员升档
    upshift(memberId){
      return new Promise((resolve, reject) =>{
      let upshiftRes = axios.get('/api/place/upshift?memberId='+memberId)
      resolve(upshiftRes)
    }) 
    },
    // 获取会员列表
    memberLvList(){
    return new Promise((resolve, reject) =>{
      let memberLvList = axios.get('/api/member/memberLvList')
      resolve(memberLvList)
    }) 
    },
     //获取团队列表
     allSubordinate(paramss){
    return new Promise((resolve,reject)=>{
      let params = {}
      console.log(paramss)
      params.params = JSON.stringify(paramss)
      let allSubordinate = axios.get('/api/place/allSubordinate?'+qs.stringify(params))
      resolve(allSubordinate)
    })
  },
  // 获取分润列表
  shareDetails(params){
    return new Promise((resolve,reject)=>{
      let shareparams = {}
      shareparams.params = JSON.stringify(params)
      let shareDetailsRes = axios.get('/api/place/shareDetails?'+qs.stringify(shareparams))
      resolve(shareDetailsRes)
    })
  }
}
