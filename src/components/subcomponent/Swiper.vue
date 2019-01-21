<template>
  <div class="myswiper">
    <van-swipe :autoplay="3000" indicator-color="white" class="demo-swipe">
      <van-swipe-item class="item" v-for="item in lunbotuList" :key="item.img">
        <img :src="item.img||item.src" alt>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  data: () => ({}),
  props: ["lunbotuList"]
};
</script>

<style lang="less" scoped>
</style>