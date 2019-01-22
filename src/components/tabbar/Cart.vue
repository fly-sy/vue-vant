<template>
  <div class="cart">
    <div class="cart-group" v-for="good in goodslist" :key="good.id">
      <div class="cart-s">
        <van-switch v-model="checked"/>
      </div>
      <div class="cart-p">
        <van-card 
          :num="2"
          :price="good.sell_price"
          :title="good.title"
          :thumb="good.img_url"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    checked: true,
    goodslist: []
  }),
  created() {
    this.getGoodsList();
  },
  methods: {
    async getGoodsList() {
      // 1. 获取到 store 中所有的商品的Id，然后拼接出一个 用逗号分隔的 字符串
      var idArr = [];
      this.$store.state.cart.forEach(item => idArr.push(item.id));
      // 如果 购物车中没有商品，则直接返回，不需要请求数据接口，否则会报错
      if (idArr.length <= 0) {
        return;
      }
      // 获取购物车商品列表
      const {
        data: { status, message }
      } = await this.$http.get("api/goods/getshopcarlist/" + idArr.join(","));
      if (status === 0) {
        this.goodslist = message;
        console.log(message)
      }
    }
  }
};
</script>

<style lang="less">
.cart {
  .cart-group {
    display: flex;
    .cart-s {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .cart-p {
      flex: 2;
    }
  }
}
</style>