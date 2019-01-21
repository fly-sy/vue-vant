<template>
  <div class="goodslist">
    <div
      class="goods-item"
      v-for="(item,index) in goodslist"
      :key="index"
      @click="goDetail(item.id)"
    >
      <img :src="item.img_url" alt>
      <h1 class="title">{{ item.title }}</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥{{ item.sell_price }}</span>
          <span class="old">￥{{ item.market_price }}</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩{{ item.stock_quantity }}件</span>
        </p>
      </div>
    </div>

    <van-button type="danger" size="large" @click="getMore">{{more}}</van-button>
  </div>
</template>

<script>
export default {
  data: () => ({
    goodslist: [],
    // 默认请求第一页的数据
    pageindex: 1,
    // 一页只显示3条数据
    limit: 3,
    max: 10
  }),
  created() {
    this.getGoodsList();
  },
  computed: {
    more() {
      return this.pageindex * this.limit < this.max ? "加载更多" : "被掏空了";
    }
  },
  methods: {
    async getGoodsList() {
      // 判断如果没有更多数据不再发送ajax请求
      if (this.pageindex > this.max) {
        return;
      }
      // 获取商品列表
      const {
        data: { status, message }
      } = await this.$http.get(
        `api/getgoods?pageindex=${this.pageindex}&limit=${this.limit}`
      );

      if (status === 0) {
        // 获取的每一页的数据
        // this.goodslist = message;
        // 使用数组的concat把第一页和下一页的数据拼接起来
        this.goodslist = this.goodslist.concat(message);
      }
    },
    getMore() {
      // 请求下一页的数据
      this.pageindex++;
      this.getGoodsList();
    },
    goDetail(id) {
      // $route  参数的使用
      // $router 导航对象
      // 最简单的 直接加请求路径 推荐
      this.$router.push("/home/goodsinfo/"+id);
      // 对象写法
      // this.$router.push({path:"/home/goodsinfo/"+id});
      // 命名导航 推荐
      // this.$router.push({ name: "goodsinfo", params: { id } });
      // query 写法
      // this.$router.push({path:"/home/goodsinfo/",query:{id}});
    }
  }
};
</script>

<style lang="less">
.goodslist {
  display: flex;
  flex-wrap: wrap;
  padding: 7px;
  // 两边对齐中间留空格
  justify-content: space-between;

  .goods-item {
    width: 48%;
    border: 1px solid #ccc;
    box-shadow: 0 0 8px #ccc;
    margin: 4px 0;
    padding: 2px;
    display: flex;
    // 默认x 轴
    // 设置为column 改为 y轴
    flex-direction: column;
    justify-content: space-between;
    min-height: 293px;
    img {
      width: 100%;
    }
    .title {
      font-size: 14px;
    }

    .info {
      background-color: #eee;
      p {
        margin: 0;
        padding: 5px;
      }
      .price {
        .now {
          color: red;
          font-weight: bold;
          font-size: 16px;
        }
        .old {
          text-decoration: line-through;
          font-size: 12px;
          margin-left: 10px;
        }
      }
      .sell {
        display: flex;
        justify-content: space-between;
        font-size: 13px;
      }
    }
  }
}
</style>