<template>
  <div class="goodsinfo">
    <transition @before-enter="beforeEnter" @enter="enter" @after-enter="afterEnter"> -->
      <div class="ball" v-show="ballFlag" ref="ball"></div>
    </transition>
    <!-- 轮播区域 -->
    <div class="panel">
      <swiper :lunbotuList="lunbotuList" class="my-swiper"></swiper>
    </div>
    <!-- 购买区域 -->
    <div class="panel">
      <h2 class="title">{{goodsinfo.title}}</h2>
      <hr>
      <div class="panel-body">
        <div class="price-group">
          市场价格:
          <span class="old">{{goodsinfo.market_price}}</span>
          销售价格:
          <span class="new">{{goodsinfo.sell_price}}</span>
        </div>
        <div class="stepper">
          <div class="number">购买数量:</div>
          <!-- 
            :min="1" 默认就是1 不添加也可以 
            plus 点击添加的时候触发 
            minus 点击减少的时候触发  
          -->
          <van-stepper v-model="value" integer class="number" :step="step"/>
        </div>
        <div class="btn-group">
          <van-button type="primary" size="small">立即购买</van-button>
          <van-button type="danger" :disabled="btnFlag" size="small" @click="addToCart">加入购物车</van-button>
        </div>
      </div>
    </div>

    <!-- 描述区域 -->
    <div class="panel">
      <h2 class="title">商品参数</h2>
      <hr>
      <div class="panel-body">
        <p>商品货号：{{ goodsinfo.goods_no }}</p>
        <p>库存情况：{{ goodsinfo.stock_quantity }}件</p>
        <p>上架时间：{{ goodsinfo.add_time | datefmt }}</p>
      </div>
    </div>

    <p>1</p>
    <p>2</p>
    <p>3</p>
    <p>4</p>
    <p>5</p>
    <p>6</p>
    <p>7</p>
    <p>8</p>
  </div>
</template>

<script>
import Swiper from "../subcomponent/Swiper";
import { Toast } from "vant";
export default {
  data: () => ({
    id: "",
    value: 1,
    lunbotuList: [],
    goodsinfo: {},
    step: 1,
    btnFlag: false,
    ballFlag: false,
    xDist: 0,
    yDist: 0
  }),
  created() {
    this.id = this.$route.params.id;
    this.getlunbotu();
    this.getGoodsInfo();
  },
  methods: {
    async getlunbotu() {
      // 因为当前的这个id 应该是从101 开始 但是我们传递过来的id 是1 id是string类型需要先转换为number
      let id = Number(this.id) + 100;
      const {
        data: { status, message }
      } = await this.$http.get("api/getthumimages/" + id);

      if (status === 0) {
        this.lunbotuList = message;
      }
    },
    async getGoodsInfo() {
      // 获取商品的信息
      const {
        data: { status, message }
      } = await this.$http.get("api/goods/getinfo/" + this.id);
      if (status === 0) {
        this.goodsinfo = message;
      } else {
        Toast("获取商品信息失败");
      }
    },
    addToCart() {
      var goodsinfo = {
        id: this.id,
        count: this.value,
        sell_price: this.goodsinfo.sell_price,
        selected: true,
        title: this.goodsinfo.title,
        src: this.lunbotuList[0].src,
        timer: null
      };
      // 调用 store 中的 mutations 来将商品加入购物车
      this.$store.dispatch("addToCar", goodsinfo);

      this.ballFlag = !this.ballFlag;
      // // 按钮先禁用
      this.btnFlag = true;
      setTimeout(() => {
        // 再次把禁用效果取消
        this.btnFlag = false;
      }, 500);
    },
    getBound() {
      // 获取小球的 在页面中的位置  left   top    (x,y)
      const ballPosition = this.$refs.ball.getBoundingClientRect();
      // 获取 徽标 在页面中的位置 不涉及到数据渲染的时候 可以使用少量的 js 原生
      const badgePosition = document
        .querySelector("#cart .van-info")
        .getBoundingClientRect();
      // 移动的位置 = 目标位置  -  起点位置
      const xDist = badgePosition.left - ballPosition.left;
      const yDist = badgePosition.top - ballPosition.top;

      this.xDist = xDist; //#endregion
      this.yDist = yDist;
    },
    beforeEnter(el) {
      el.style.transform = "translate(0,0)";
    },
    enter(el, done) {
      el.offsetTop;
      // 获取移动的距离
      this.getBound();
      // el.style.transform = `translate(${this.getBound().xDist}px,${
      //   this.getBound().yDist
      // }px)`;

      el.style.transform = `translate(${this.xDist}px,${this.yDist}px)`;
      el.style.transition = "all .4s cubic-bezier(.23,.88,.24,.88)";
      done();
    },
    afterEnter(el) {
      this.ballFlag = !this.ballFlag;
    }
  },
  components: {
    Swiper
  }
};
</script>

<style lang="less">
.goodsinfo {
  .ball {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: red;
    position: absolute;
    top: 327px;
    left: 138px;
    z-index: 20;
    opacity: 1;
  }
  .panel {
    width: 96%;
    border: 2px dashed #38f;
    border-radius: 6px;
    box-shadow: 0 0 3px #38f;
    margin: 0 auto;
    margin-top: 10px;
    .my-swiper {
      text-align: center;
      height: 166px;
      line-height: 166px;
      img {
        vertical-align: middle;
      }
    }
    .title {
      font-size: 16px;
      margin: 10px 0 10px 10px;
    }
    .panel-body {
      margin-left: 16px;
      margin-bottom: 10px;
      color: #8f8f94;
      font-size: 14px;
      .price-group {
        margin-bottom: 12px;
        .old {
          text-decoration: line-through;
          margin-right: 6px;
        }
      }
      .stepper {
        color: #8f8f94;
        font-size: 0;
        .number {
          display: inline-block;
          font-size: 14px;
          margin-right: 6px;
        }
      }
      .btn-group {
        margin-top: 10px;
      }
      p {
        margin-top: 10px;
      }
    }
  }
}
</style>