<template>
  <div class="photoinfo">
    <!-- 图片描述区域 -->
    <h3>{{ photoinfo.title }}</h3>
    <p class="subtitle">
      <span>发表时间：{{ photoinfo.add_time | datefmt }}</span>
      <span>点击：{{ photoinfo.click }}次</span>
    </p>
    <hr>

    <!-- <button @click="handleImg">预览图片</button> -->
    <!-- 缩略图预览区域 -->
    <div class="thumbs">
      <img
        v-for="(item,index) in list"
        :key="item.id"
        :src="item.src"
        alt
        @click="handleImage(index)"
      >
    </div>
    <!-- 图片内容区域 -->
    <div class="content" v-html="photoinfo.content"></div>

    <comment></comment>
  </div>
</template>

<script>
import { ImagePreview } from "vant";
import Comment from "../subcomponent/Comment";
export default {
  data: () => ({
    id: "",
    photoinfo: [],
    list: []
  }),
  created() {
    this.id = this.$route.params.id;
    this.getPhotoInfo();
    this.getThumbs();
  },
  methods: {
    /**
     * 获取图片详细
     */
    async getPhotoInfo() {
      const {
        data: { status, message }
      } = await this.$http.get(`api/getimageInfo/${this.id}`);
      if (status === 0) {
        this.photoinfo = message;
      }
    },

    /**
     * 获取缩略图
     */
    async getThumbs() {
      // 获取缩略图
      const {
        data: { status, message }
      } = await this.$http.get(`api/getthumimages/${this.id}`);
      if (status === 0) {
        this.list = message;
      }
    },
    /**
     * 点击实现图片预览效果 
     * startPosition 传递进来的索引 ，用于设置图片预览起始位置
     */
    handleImage(startPosition) {
      let images = []; 
      this.list.forEach(item => {
        if (item.src != null) {
          images.push(item.src);
        }
      });
      ImagePreview({
        images,
        startPosition
      })
    }
  },
  components: {
    Comment
  }
};
</script>

<style lang="less">
.photoinfo {
  padding: 3px;
  h3 {
    color: #26a2ff;
    font-size: 15px;
    text-align: center;
    margin: 15px 0;
  }
  .subtitle {
    display: flex;
    justify-content: space-between;
    font-size: 13px;
  }

  .content {
    font-size: 13px;
    line-height: 30px;
  }

  .thumbs {
    display: flex;
    justify-content: space-around;
    img {
      width: 100px;
      height: 100px;
    }
  }
}
</style>