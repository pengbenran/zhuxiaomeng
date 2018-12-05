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
import Withdraw from '@/components/withdraw'//零钱提现
import Prerogative from '@/components/Prerogative'//我的特权
import Income from '@/components/income'//累计收益
 

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
      path: '/*',
      name: 'notFind',
      component: notFind
    }
  ]
})
