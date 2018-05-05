// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './components/vuex/store'
import '../static/css/common/reset.css'
import '../static/css/font-awesome-4.7.0/css/font-awesome.css'
import '../static/css/common/common.css'
import '../static/css/agents.css'

Vue.config.productionTip = false

/* eslint-disable no-new */
var vm = new Vue({
  router,
  store,
  ...App
}).$mount("#app");