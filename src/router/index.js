import Vue from 'vue'
import Router from 'vue-router'

import Home from '../components/tabbar/Home'
import Member from '../components/tabbar/Member'
import Cart from '../components/tabbar/Cart'
import Search from '../components/tabbar/Search'
import NewsList from '../components/news/NewsList'
import NewsInfo from '../components/news/NewsInfo'
import PhotoList from '../components/photos/PhotoList'
import PhotoInfo from '../components/photos/PhotoInfo'
import GoodsList from '../components/goods/GoodsList'

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
    {
      path: '/home/photolist',
      component: PhotoList
    },
    {
      path: '/home/photoinfo/:id',
      component: PhotoInfo
    },
    {
      path: '/home/goodslist',
      component: GoodsList
    },
  ]
})
