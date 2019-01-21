// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import { Button, NavBar, Tabbar, TabbarItem, Swipe, SwipeItem, Card,Tab, Tabs,Lazyload ,Stepper,Panel} from 'vant';
Vue
  .use(Button)
  .use(NavBar)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Swipe)
  .use(SwipeItem)
  .use(Card)
  .use(Tab)
  .use(Tabs)
  .use(Lazyload)
  .use(Stepper)
  .use(Panel)


// 引入 vue-resource  

// import VueResource from 'vue-resource'
// Vue.use(VueResource)
// 配置全局的根路径
// Vue.http.options.root = 'http://127.0.0.1:5000/'
// Vue.http.options.emulateJSON = true


// 引入axios    
import axios from 'axios'
// axios 没有类似于 vue-resource 的use 方式 需要自己在prototype 上添加 方法 
Vue.prototype.$http = axios
// 配置全局的根路径
axios.defaults.baseURL = 'http://127.0.0.1:5000/'

// 引入animte.css 

import 'animate.css/animate.css'

// 引入moment 
import moment from 'moment'
// 定义全局时间过滤器
Vue.filter('datefmt', (data, arg = 'YYYY-MM-DD hh:mm:ss') => {
  return moment(data).format(arg)
})



Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: c => c(App)
})
