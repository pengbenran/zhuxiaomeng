import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Myself from '@/components/myself'//个人中心
import notFind from '@/components/notFind'
import MyselfInfo from '@/components/myselfInfo'//个人信息
import bindBankCard from '@/components/bindBankCard' //银行卡
import MemberInformation from '@/components/memberInformation' //团队信息
import Founder from '@/components/founder' //联合创始人
import ShopDetail from '@/components/shopDetail'
import myTeam from '@/components/myTeam'
import orderList from '@/components/orderList'
import addressList from '@/components/addressList'
import addAddress from '@/components/addAddress'
import cart from '@/components/cart'
import order from '@/components/order'
import Withdraw from '@/components/withdraw'//零钱提现
import Prerogative from '@/components/Prerogative'//我的特权
import Income from '@/components/income'//累计收益
import Apply from '@/components/apply'//申请金牌推手
import Shopping from '@/components/shopping'//购物车
import Account  from '@/components/account'//账户明细
import Assets  from '@/components/assets'//我的资产
import MenberVip  from '@/components/Vip'//我的资产

Vue.use(Router)
Vue.use(require('vue-wechat-title')); 
const router=new Router({
  routes: [
    {
      path: '/MenberVip',
      name: 'MenberVip',
      meta: {
        title: '会员Vip'
      },
      component: MenberVip
    },
    {
      path: '/Assets',
      name: 'Assets',
      meta: {
        title: '我的资产'
      },
      component: Assets
    },
    {
      path: '/',
      name: 'home',
      meta: {
        title: '首页'
      },
      component: home
    },
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
			path: '/bindBankCard',
			name: 'bindBankCard',
      meta:{
        title:'绑定银行卡'
      },
			component: bindBankCard	
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
    },{
			path: '/withdraw',
			name: 'Withdraw',
			meta: {
				title:'零钱提现'
			},
			component:Withdraw	
		},{
			path: '/Prerogative',
			name: 'Prerogative',
			meta: {
				title:'我的特权'
			},
			component:Prerogative
		},{
			path: '/income',
			name: 'Income',
			meta: {
				title:'累计收益'
			},
			component:Income
		},{
      path: '/notFind',
			path: '/apply',
			name: 'Apply',
			meta: {
				title:'申请金牌推手'
			},
			component:Apply
		},{
			path: '/shopping',
			name: 'Shopping',
			meta: {
				title:'购物车'		
			},
			component:Shopping,
			
			
		},{
			path: '/account',
			name: 'Account',
			meta: {
				title:'账户明细'	
			},
			component:Account,
		}
  ]
})

export default router;