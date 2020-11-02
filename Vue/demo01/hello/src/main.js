// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue' //引入vue.js
import App from './App' //引入自定义的组件 .vue结尾可以不写
import router from './router' //引入vue的路由js

//引入axios
import axios from 'axios';
Vue.prototype.$http=axios;



Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
