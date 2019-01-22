<template>
  <div class="cart">
    <div class="cart-group">
      <div class="cart-s">
        <van-switch v-model="checked"/>
      </div>
      <div class="cart-p">
        <van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          :thumb="'http://localhost:5000/share/ithumbs/images/7.jpg'"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    checked: true
  })
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