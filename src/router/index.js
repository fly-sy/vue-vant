import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/tabbar/Home.vue'
import Member from '../components/tabbar/Member.vue'
import Cart from '../components/tabbar/Cart.vue'
import Search from '../components/tabbar/Search.vue'
import NewsList from '../components/news/NewsList.vue'
import NewsInfo from '../components/news/NewsInfo.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      // 这里不要写成组件
      redirect: '/home/newsinfo'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/member',
      component: Member
    },
    {
      path: '/cart',
      component: Cart
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/home/newslist',
      component: NewsList
    },
    {
      path: '/home/newsinfo/:id',
      component: NewsInfo
    },
  ]
})
