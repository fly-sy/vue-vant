<template>
  <div class="comment">
    <h3>发表评论</h3>
    <hr>
    <textarea placeholder="请输入要BB的内容（最多吐槽120字）" maxlength="120" v-model="msg"></textarea>
    <van-button type="danger" size="large" @click="postComments">发表评论</van-button>

    <div class="cmt-list">
      <div class="cmt-item" v-for="(item,index) in comments" :key="index">
        <div
          class="cmt-title"
        >第{{index+1}}楼&nbsp;&nbsp;用户：{{item.user_name}}&nbsp;&nbsp;发表时间：{{item.add_time | datefmt}}</div>
        <div class="cmt-body">{{ item.content === 'undefined' ? '此用户很懒，嘛都没说': item.content }}</div>
      </div>
    </div>
    <van-button type="danger" size="large" plain @click="getMore">{{more}}</van-button>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data: () => ({
    comments: [],
    pageindex: 1,
    houtainum: 7,
    msg: ""
  }),
  props: {
    id: {
      type: String
    }
  },
  created() {
    this.getComments();
  },
  computed: {
    more() {
      return this.pageindex < this.houtainum ? "加载更多数据" : "被掏空了";
    }
  },
  methods: {
    async getComments() {
      const {
        data: { status, message }
      } = await this.$http(`/api/getcomments/${this.id}?${this.pageindex}`);
      if (status === 0) {
        this.comments = this.comments.concat(message);
        // console.log(this.comments);
      }
    },
    getMore() {
      if (this.pageindex < 7) {
        this.pageindex++;
        this.getComments();
      } else {
        return;
      }
    },

    async postComments() {
      // 1. 先判断是否输入内容 判断如果没有输入内容友好提示
      if (this.msg.trim().length === 0) {
        Toast("请输入bb的内容");
        return;
      }

      // 2. 如果有内容发送ajax
      const {
        data: { status }
      } = await this.$http.post("api/postcomment/" + this.id, {
        content: this.msg.trim()
      });
      if (status === 0) {
        // 1. 拼接出一个评论对象
        var cmt = {
          user_name: "匿名用户",
          content: this.msg.trim()
        };
        // 添加到数组的开头 重新修改  comments 使得  model 改变  v-for 自动就刷新数据
        this.comments.unshift(cmt);
        // 清空
        this.msg = "";
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