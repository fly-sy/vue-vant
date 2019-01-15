<template>
  <div class="app">
    <van-nav-bar title="长沙黑马-13期" fixed left-text="返回" left-arrow @click-left="onClickLeft"/>
ddfdffdf
    <van-tabbar v-model="active">
      <van-tabbar-item icon="home-o">标签</van-tabbar-item>
      <van-tabbar-item icon="search" dot>标签</van-tabbar-item>
      <van-tabbar-item icon="friends-o" info="5">标签</van-tabbar-item>
      <van-tabbar-item icon="setting-o" info="20">标签</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
// Toast 组件不能再main.js 中引入 哪里需要在哪里引入使用
import { Toast } from "vant";
export default {
  name: "App",
  data: ()=>({
    active: 0
  }),
  methods: {
    onClickLeft() {
      Toast("toast");
    }
  }
};
</script>

<style lang="less">
.app {
  padding-top: 46px;
}
</style>
