import Vue from 'vue'
import App from './App.vue'
// 引入Vue-router
import VueRouter from "vue-router";
import router from './router'
// 引入element-ui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
//引入Vuex
import store from './store'
// 引入CSS文件
import './css/main.scss'

Vue.use(VueRouter);
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  render: h => h(App),

  store,
  router,
})
