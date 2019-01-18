<template>
  <div class="home">
    <van-swipe :autoplay="3000" indicator-color="white" class="demo-swipe">
      <van-swipe-item class="item" v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img" alt>
      </van-swipe-item>
    </van-swipe>

    <gird></gird>
  </div>
</template>

<script>
import { Toast } from "vant";
// 1.0 引入定义好的组件
import Gird from "components/subcomponent/Gird";

export default {
  data: () => ({
    lunbotuList: []
  }),
  created() {
    this.getlunbotu();
  },
  methods: {
    async getlunbotu() {
      const {
        data: { status, message }
      } = await this.$http.get("api/getlunbo");
      if (status === 0) {
        this.lunbotuList = message;
      } else {
        Toast("请求轮播图数据失败");
      }
    }
  },
  components: {
    // 2.0 注册组件
    Gird
  }
};
</script>

<style lang="less">
.home {
  .demo-swipe {
    height: 200px;
    .item {
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>