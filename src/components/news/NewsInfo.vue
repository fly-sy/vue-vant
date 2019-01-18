<template>
  <div class="newsinfo">
    <!-- 大标题 -->
    <h3 class="title">{{ newsinfo.title }}</h3>
    <!-- 子标题 -->
    <p class="subtitle">
      <span>发表时间：{{ newsinfo.add_time | datefmt }}</span>
      <span>点击：{{ newsinfo.click }}次</span>
    </p>

    <hr>
    <!-- 内容区域 -->
    <div class="content">{{newsinfo.content}}</div>
    <comment :id="id"></comment>
  </div>
</template>

<script>
import Comment from '../../components/subcomponent/Comment'
export default {
  data: () => ({
    id: '',
    newsinfo: {}
  }),
  created() {
    this.id = this.$route.params.id;
    this.getinfo();
  },
  methods: {
    async getinfo() {
      const {
        data: { status, message }
      } = await this.$http.get("api/getnew/" + this.id);
      if (status === 0) {
        // console.log(message);
        this.newsinfo = message;
      }
    }
  },
  components: {
    Comment
  }
};
</script>

<style lang="less">
.newsinfo {
  padding: 0 4px;
  .title {
    font-size: 16px;
    text-align: center;
    margin: 15px 0;
    color: red;
  }
  .subtitle {
    font-size: 13px;
    color: #226aff;
    display: flex;
    justify-content: space-between;
  }
}
</style>