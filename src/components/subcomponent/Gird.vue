<template>
  <div class="gird">
    <div class="demo-icon">
      <div class="van-col">
        <i class="van-icon">
          <img src="static/gird/menu1.png" alt>
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col">
        <i class="van-icon">
          <img src="static/gird/menu2.png" alt>
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col">
        <i class="van-icon">
          <img src="static/gird/menu3.png" alt>
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col">
        <i class="van-icon">
          <img src="static/gird/menu4.png" alt>
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col">
        <i class="van-icon">
          <img src="static/gird/menu5.png" alt>
        </i>
        <span>location-o</span>
      </div>
      <div class="van-col">
        <i class="van-icon">
          <img src="static/gird/menu6.png" alt>
        </i>
        <span>location-o</span>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style lang="less">
.gird {
  .demo-icon {
    font-size: 0;
    padding-top: 10px;
    .demo-icon-list {
      padding-top: 10px;
      box-sizing: border-box;
      min-height: calc(100vh - 65px);
    }
    .van-col {
      float: none;
      text-align: center;
      width: 33.33333%;
      height: 100px;
      display: inline-block;
      vertical-align: middle;
      img {
        width: 60px;
        height: 60px;
      }
      span {
        display: block;
        padding: 0 5px;
        font-size: 12px;
        line-height: 14px;
      }
    }
    .van-icon {
      font-size: 32px;
      margin: 15px 0;
      color: #455a64;
    }
  }
}
</style>
