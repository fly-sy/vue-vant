<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120"></textarea>
    <van-button type="danger" size="large">发表评论</van-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in comments" :key="index">
        <div
          class="cmt-title"
        >第{{index + 1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | datefmt}}</div>
        <div class="cmt-body">{{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}</div>
      </div>
    </div>
    <van-button
      type="danger"
      size="large"
      plain
      @click="getMore"
    >{{pageindex < houtainum? '加载更多': '没有更多数据了'}}</van-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    comments: [],
    pageindex: 1,
    houtainum: 7
  }),
  props: {
    id: {
      type: String
    }
  },
  created() {
    this.getComments();
  },
  methods: {
    async getComments() {
      const {
        data: { status, message }
      } = await this.$http(`/api/getcomments/${this.id}?${this.pageindex}`);
      if (status === 0) {
        this.comments = this.comments.concat(message);
        console.log(this.comments);
      }
    },
    getMore() {
      if (this.pageindex < 7) {
        this.pageindex++;
        this.getComments();
      } else {
        return;
      }
    }
  }
};
</script>

<style lang="less">
.comment {
  h3 {
    font-size: 18px;
  }
  textarea {
    font-size: 14px;
    width: 100%;
    height: 85px;
    margin: 0;
  }
  .cmt-list {
    margin: 5px 0;
    .cmt-item {
      font-size: 13px;
      .cmt-title {
        line-height: 30px;
        background-color: #ccc;
      }
      .cmt-body {
        line-height: 35px;
        text-indent: 2em;
      }
    }
  }
}
</style>