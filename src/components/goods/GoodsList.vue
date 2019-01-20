<template>
  <div class="goodslist">
    <div class="goods-item">
      <img src="http://localhost:5000/goods/images/1.jpg" alt>
      <h1 class="title">RONGYAO</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥999</span>
          <span class="old">￥8888</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩1件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img src="http://localhost:5000/goods/images/1.jpg" alt>
      <h1 class="title">RONGYAO</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥999</span>
          <span class="old">￥8888</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩1件</span>
        </p>
      </div>
    </div>

    <div class="goods-item">
      <img src="http://localhost:5000/goods/images/1.jpg" alt>
      <h1 class="title">RONGYAO</h1>
      <div class="info">
        <p class="price">
          <span class="now">￥999</span>
          <span class="old">￥8888</span>
        </p>
        <p class="sell">
          <span>热卖中</span>
          <span>剩1件</span>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({})
};
</script>

<style lang="less" scoped>
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