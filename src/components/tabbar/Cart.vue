<template>
  <div class="cart">
    <div
      class="cart-group"
      v-for="good in $store.state.cart"
      :key="good.id"
    >
      <div class="cart-s">
        <van-switch
          v-model="good.selected"
          size="20px"
        />
      </div>
      <div class="cart-p">

        <van-card
          :num="good.count"
          :price="good.sell_price"
          :title="good.title"
          :thumb="good.src"
        >
          <div slot="desc">
            <van-stepper
              v-model="good.count"
              integer
              class="number"
            />
          </div>
        </van-card>
      </div>
    </div>
    <van-submit-bar
      class="submit-bar"
      :price="$store.getters.getAllPrice.allPrice * 100"
      button-text="提交订单"
      @submit="onSubmit"
    >
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
  </div>
</template>

<script>
export default {
  data: () => ({
    checked: false,
    goodslist: [],
    flag: true
  }),
  created() {
    // this.getGoodsList();
    // console.log(this.$store.state.cart);
  },
  methods: {

    onSubmit() {}
  }
};
</script>

<style lang="less">
.cart {
  padding: 10px;
  .cart-group {
    border: 1px solid pink;
    margin-top: 10px;
    box-shadow: 1px 1px 3px pink;
    display: flex;
    .cart-s {
      flex: 1;
      display: flex;
      justify-content: space-around;
      align-items: center;
    }
    .cart-p {
      flex: 4;
    }
    .van-stepper__minus,
    .van-stepper__plus {
      width: 28px;
    }
    .van-stepper {
      margin-top: 10px;
    }
  }
  .van-submit-bar {
    position: relative;
    margin-top: 10px;
    border: 1px solid red;
    box-sizing: border-box;
    .van-checkbox__icon {
      margin-left: 14px;
    }
  }
}
</style>