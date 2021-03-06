import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

// 避免获取不到数据 
var cart = JSON.parse(localStorage.getItem('cart') || '[]')

export default new Store({
  state: {
    cart
  },
  // 同步的操作 不能发送ajax  
  mutations: {
    addToCar(state, goodsinfo) { // 点击加入购物车，把商品信息，保存到 store 中的 car 上
      // 分析：
      // 1. 如果购物车中，之前就已经有这个对应的商品了，那么，只需要更新数量
      // 2. 如果没有，则直接把 商品数据，push 到 car 中即可

      // 假设 在购物车中，没有找到对应的商品
      var flag = false
      // 如果购物车中已经存在该商品，商品数量 count + 1
      state.cart.some(item => {
        if (item.id == goodsinfo.id) {
          item.count += parseInt(goodsinfo.count)
          flag = true
          return true
        }
      })

      // 如果最终，循环完毕，得到的 flag 还是 false，则把商品数据直接 push 到 购物车中
      if (!flag) {
        state.cart.push(goodsinfo)
      }

      // 当 更新 car 之后，把 car 数组，存储到 本地的 localStorage 中
      localStorage.setItem('cart', JSON.stringify(state.cart))
    },
    add(){
      
    }
  },

  getters: {
    getAllCount(state) {
      // 把cart 里面的数量获取
      var c = 0;
      state.cart.forEach(item => {
        c += item.count
      })
      return c
    },
    getAllPrice(state){
      var o = {
        count: 0 ,
        allPrice: 0
      }
      state.cart.forEach(item => {
        if(item.selected === true){
          o.count += item.count 
          o.allPrice += item.sell_price * item.count  
        }
      })
      return o
    }
  },
  // 异步操作 可以发送ajax
  actions: {
    // {commit} 是固定写法 用于调用 mutations 里面的函数   
    addToCar({ commit }, goodsinfo) {
      // 发送ajax 目的是为了把数据永久存在数据库中，方便下次换了一台电脑   
      commit('addToCar', goodsinfo)
    }
  }
})