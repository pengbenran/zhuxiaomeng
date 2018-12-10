import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
 
export default new Vuex.Store({
  state:{
  	userInfo:{},
    jumpFrom:'',
    shopList:[],//订单页商品数据
    orderType:0, //订单直接购买为0,订单购物车为1
    userAddr:'noAddr'
  },
  mutations:{
   storeUserInfo(state,userInfo){
   	state.userInfo=userInfo
   },
   storeShopList(state,shopList){
   	// 为订单页需结算商品列表复制
   	state.shopList=shopList
   },
   storeJumpFrom(state,jumpFrom){
    state.jumpFrom=jumpFrom
   },
    storeOrderType(state,orderType){
    state.orderType=orderType
   },
   storeuserAddr(state,userAddr){
    state.userAddr=userAddr
   }
  }
})