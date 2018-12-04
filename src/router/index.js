import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Myself from '@/components/myself'
import ShopDetail from '@/components/shopDetail'
import myTeam from '@/components/myTeam'
import notFind from '@/components/notFind'
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
