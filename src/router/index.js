import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Myself from '@/components/myself'//个人中心
import notFind from '@/components/notFind'
import MyselfInfo from '@/components/myselfInfo'//个人信息
import Card from '@/components/card' //银行卡
import Teamr from '@/components/teamr' //团队信息
import Founder from '@/components/founder' //联合创始人



import Myself from '@/components/myself'
import notFind from '@/components/notFind'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home

    },{
      path: '/myselfInfo',
      name: 'MyselfInfo',
      component: MyselfInfo
    },{
			path: '/myself',
			name: 'Myself',
			component: Myself
			
		},{
			path: '/card',
			name: 'Card',
			component: Card
			
			
		},{
			path:'/teamr',
			name:'Teamr',
			component:Teamr
			
		},{
			path:'/founder',
			name:'Founder',
			component:Founder
		},{

    },
     {
      path: '/myself',
      name: 'Myself',
      component: Myself
    },
    {

      path: '/*',
      name: 'notFind',
      component: notFind
    }
  ]
})
