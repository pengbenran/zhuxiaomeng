// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css';
import Vuex from 'vuex'
import store from './store/store'
import {Message} from 'iview'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.prototype.$Message = Message
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
