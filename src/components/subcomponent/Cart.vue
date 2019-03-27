<template>
  <div class="cart">
    <van-popup
      class="popup"
      v-model="show"
      position="bottom"
      :overlay="true"
    >
      <div
        class="wrapper"
        ref="wrapper"
      >
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
      </div>
      <van-submit-bar
        class="submit-bar"
        :price="$store.getters.getAllPrice.allPrice * 100"
        button-text="提交订单"
      >
        <van-checkbox>全选</van-checkbox>
      </van-submit-bar>
    </van-popup>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  data: () => ({
    show: false,
    options: {
      // scrollX 横向滚动
      // scrollY 纵向滚动
      scrollY: true
    }
  }),
  mounted() {
    setTimeout(() => {
      // console.log(this.$refs.wrapper);
      // this.scroll = new BScroll(this.$refs.wrapper, this.options);
    }, 20);
  }
};
</script>

<style lang="less">
.cart {
  .popup {
    padding: 10px;
    .cart-group {
      margin-top: 10px;
      display: flex;
      border-bottom: 1px dashed #4e4e4e;
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
      .van-checkbox__icon {
        margin-left: 14px;
      }
    }
  }
}
</style>