<template>
  <div class="home">
    <swiper :lunbotuList="lunbotuList"></swiper>
    <gird></gird>
  </div>
</template>

<script>
import { Toast } from "vant";
// 1.0 引入定义好的组件
import Gird from "components/subcomponent/Gird";
import Swiper from "components/subcomponent/Swiper";

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
    Gird,
    Swiper
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