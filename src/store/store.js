import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
  	userInfo:{},
    shopList:[],//订单页商品数据
  },
  mutations:{
   storeUserInfo(state,userInfo){
   	state.userInfo=userInfo
   },
   storeShopList(state,shopList){
   	// 为订单页需结算商品列表复制
   	state.shopList=shopList
   }
  }
})