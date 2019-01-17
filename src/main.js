// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Button, NavBar, Tabbar, TabbarItem ,Swipe, SwipeItem} from 'vant';
Vue
  .use(Button)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)


// 引入 vue-resource  

import VueResource from 'vue-resource'
Vue.use(VueResource)


// 引入axios    
// import axios from 'axios'
// // axios 没有类似于 vue-resource 的use 方式 需要自己在prototype 上添加 方法 
// Vue.prototype.$http = axios

// 引入animte.css 

import 'animate.css/animate.css'

Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: c => c(App)
})
