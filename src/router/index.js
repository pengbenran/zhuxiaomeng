import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/home'
import Myself from '@/components/myself'
import notFind from '@/components/notFind'
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/home',
      name: 'home',
      component: home
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
