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
import Gird from "../../components/subcomponent/Gird";
export default {
  data: () => ({
    lunbotuList: []
  }),
  created() {
    this.getlunbotu();
  },
  methods: {
    getlunbotu() {
      this.$http.get("http://localhost:5000/api/getlunbo").then(result => {
        if (result.status === 200) {
          this.lunbotuList = result.data.message;
        } else {
          Toast("请求轮播数据失败");
        }
      });
    }
  },
  components: {
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