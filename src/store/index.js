import Vue from 'vue'
import Vuex, { Store } from 'vuex'

Vue.use(Vuex)

export default new Store({
  state: {
    count: 1
  },
  mutations: {
    add(state,step){
      state.count+=step
    },
    sub(state,step){
      state.count-=step
    }
  }
})