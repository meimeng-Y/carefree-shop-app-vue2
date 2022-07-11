<!--商品分类界面-->
<template>
  <div id="categories">
    <!--    顶部标题-->
    <van-sticky>
      <TopTitle :t_name="title"/>
    </van-sticky>
    <!--    顶部标题end-->
    <van-row>
      <!--      侧边导航条-->
      <van-col span="6">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item v-for="value in 14" :key="value" title="标签名称"/>
        </van-sidebar>
      </van-col>
      <!--      侧边导航条end-->
      <!--      商品分类详情-->
      <van-col span="18">
        <van-grid square :column-num="3" clickable>
          <van-grid-item v-for="value in 8" :key="value">
            <van-image
              width="5rem"
              height="6rem"
              fit="contain"
              src="https://img01.yzcdn.cn/vant/cat.jpeg"
            />
            <span>商品分类</span>
          </van-grid-item>
        </van-grid>
      </van-col>
      <!--      商品分类详情end-->

    </van-row>
  </div>
</template>

<script>
import TopTitle from "../../components/topTitle";

export default {
  name: "categories",
  components: {TopTitle},
  data() {
    return {
      title: '商品分类',
      activeKey: 0,
    }
  }
}
</script>

<style lang="less" scoped>
#categories {
  background-color: white;

  .van-sidebar-item {
    background-color: white;
  }

  #title {
    text-align: center;
    font-weight: bolder;
    font-size: 16px;
  }
}
</style>
