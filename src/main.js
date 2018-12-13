// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import 'iview/dist/styles/iview.css';
import Vuex from 'vuex'
import store from './store/store'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import { InfiniteScroll } from 'mint-ui';
Vue.use(Vuex)
Vue.use(InfiniteScroll);
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
