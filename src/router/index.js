import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Myself from '@/components/myself'//个人中心
import notFind from '@/components/notFind'
import MyselfInfo from '@/components/myselfInfo'//个人信息
import Card from '@/components/card' //银行卡
import MemberInformation from '@/components/memberInformation' //团队信息
import Founder from '@/components/founder' //联合创始人
import ShopDetail from '@/components/shopDetail'
import myTeam from '@/components/myTeam'
import orderList from '@/components/orderList'
import addressList from '@/components/addressList'
import addAddress from '@/components/addAddress'
import cart from '@/components/cart'
import order from '@/components/order'
Vue.use(Router)
Vue.use(require('vue-wechat-title')); 
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: home
    },
    {
      path: '/order',
      name: 'order',
      meta: {
        title: '订单提交'
      },
      component: order
    },
    {
      path: '/cart',
      name: 'cart',
      meta: {
        title: '购物车'
      },
      component: cart
    },
    {
      path: '/addressList',
      name: 'addressList',
      meta: {
        title: '地址管理'
      },
      component: addressList
    },
    {
      path: '/addAddress',
      name: 'addAddress',
      meta: {
        title: '新增地址'
      },
      component: addAddress
    },
    {
      path: '/orderList',
      name: 'orderList',
      meta: {
        title: '订单列表'
      },
      component: orderList
    },
  {
      path: '/myselfInfo',
      name: 'MyselfInfo',
      meta: {
        title: '个人中心'
      },
      component: MyselfInfo
    },
    {
			path: '/card',
			name: 'Card',
			component: Card		
		},{
			path:'/memberInformation',
			name:'MemberInformation',
       meta: {
        title: '团员信息'
      },
			component:MemberInformation
			
		},{
			path:'/founder',
			name:'Founder',
			component:Founder
		},
     {
      path: '/myTeam',
      name: 'myTeam',
      meta: {
        title: '我的团队'
      },
      component: myTeam
    },
    {
      path: '/ShopDetail',
      name: 'ShopDetail',
      meta: {
        title: '商品详情'
     },
      component: ShopDetail
    },
     {
      path: '/myself',
      name: 'Myself',
      meta: {
        title: '我的'
      },
      component: Myself
    },
    {
      path: '/*',
      name: 'notFind',
      component: notFind
    }
  ]
})
