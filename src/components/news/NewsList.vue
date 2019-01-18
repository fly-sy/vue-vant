<template>
  <div class="newslist">
    <router-link v-for="item in newslist" :key="item.id" :to="'/home/newsinfo/'+item.id">
      <van-card :title="item.title" :thumb="item.img_url">
        <div slot="price">
          <span>发表时间:{{item.add_time | datefmt}}</span>
        </div>
        <div slot="num">
          <span>点击{{item.click}}次</span>
        </div>
      </van-card>
    </router-link>

    <!-- <van-card :title="item.title" :thumb="item.img_url" :desc="item.add_time | datefmt" :num="item.click"> -->
  </div>
</template>

<script>
import Toast from "vant";
export default {
  data: () => ({
    newslist: []
  }),
  created() {
    this.getnews();
  },
  methods: {
    async getnews() {
      const {
        data: { status, message }
      } = await this.$http.get("api/getnewslist");
      if (status === 0) {
        this.newslist = message;
      } else {
        Toast("获取新闻列表数据失败");
      }
    }
  }
};
</script>

<style lang="less">
.newslist {
  .van-card {
    height: 55px;
    overflow: hidden;
    .van-card__content {
      height: 50px;
      bottom: 2px;
    }
  }
}
</style>