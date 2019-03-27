<template>
  <div class="app">
    <van-nav-bar
      title="长沙黑马-13期"
      fixed
      left-text="返回"
      left-arrow
      @click-left="goBack"
    />

    <transition
      enter-active-class="fadeInRight"
      leave-active-class="fadeOutLeft"
    >
      <router-view class="animated"></router-view>
    </transition>

    <van-tabbar v-model="active">
      <van-tabbar-item
        icon="home-o"
        to="/home"
      >首页</van-tabbar-item>
      <van-tabbar-item
        icon="user-o"
        to="/member"
      >会员</van-tabbar-item>
      <van-tabbar-item
        icon="shopping-cart-o"
        :info="$store.getters.getAllCount"
        @click="toggle"
        id="cart"
      >购物车</van-tabbar-item>
      <van-tabbar-item
        icon="search"
        to="/search"
      >search</van-tabbar-item>
      <Cart ref="cart"></Cart>

      <!-- <van-popup v-model="show" position="top" :overlay="false">
  内容
</van-popup> -->
    </van-tabbar>
  </div>
</template>

<script>
// Toast 组件不能再main.js 中引入 哪里需要在哪里引入使用
import { Toast } from "vant";
import Cart from "./components/subcomponent/Cart";
export default {
  name: "App",
  data: () => ({
    active: 0
  }),
  methods: {
    goBack() {
      this.$router.go(-1);
    },
    toggle() {
      this.$refs.cart.show = !this.$refs.cart.show;
    }
  },
  components: {
    Cart
  }
};
</script>

<style lang="less">
.app {
  padding-top: 46px;
  padding-bottom: 50px;
  overflow-x: hidden;
  .v-leave-to {
    position: absolute;
    left: -200%;
  }
}
</style>
