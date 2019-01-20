<template>
  <div class="photolist">
    <van-tabs v-model="active" @click="onClick">
      <van-tab v-for="item in cates" :title="item.title" :key="item.id"/>
    </van-tabs>

    <router-link v-for="img in imageList" :to="'/home/photoinfo/'+img.id" :key="img.id">
      <img v-lazy="img.img_url">
    </router-link>
  </div>
</template>

<script>
import { Toast } from "vant";
export default {
  data: () => ({
    active: 0,
    cates: [],
    imageList: []
  }),
  created() {
    this.getAllCategory();
    this.getPhotoListByCateId(1);
  },
  methods: {
    /**
     * 获取列表的数据
     */
    async getAllCategory() {
      const {
        data: { status, message }
      } = await this.$http.get("api/getimgcategory");
      if (status === 0) {
        // 在数组的首位添加元素
        message.unshift({ title: "全部", id: 0 });
        this.cates = message;
      } else {
        Toast("获取photo title 信息失败");
      }
    },

    /**
     * 点击获取不同图片数据
     * 根据索引改变获取的值
     * cateId 是获取的索引
     */
    async getPhotoListByCateId(cateId) {
      // 根据 分类Id，获取图片列表
      const {
        data: { status, message }
      } = await this.$http.get("api/getimages/" + cateId);
      if (status === 0) {
        this.imageList = message;
      }
    },
    onClick(index, title) {
      this.getPhotoListByCateId(index);
    }
  }
};
</script>

<style lang="less">
</style>