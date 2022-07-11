<!--商品列表-->
<template>
  <div id="productList">
    <!--    顶部标题-->
    <van-sticky>
      <TopTitle :t_name="title"/>
    </van-sticky>
    <!--    顶部标题end-->
    <!--    筛选条件-->
    <van-tabbar v-model="active" :fixed="false" class="condition">
      <van-tabbar-item name="home">综合</van-tabbar-item>
      <van-tabbar-item name="search">价格<span>图标</span></van-tabbar-item>
      <van-tabbar-item name="friends">新品</van-tabbar-item>
    </van-tabbar>
    <!--    筛选条件end-->
    <!--    为空时显示-->
    <van-empty description="暂无商品"/>
    <!--    为空时显示end-->
    <!--    商品宫格-->
    <van-grid :border="false" :column-num="2" gutter="10">
      <van-grid-item v-for="value in 0" :key="value">
        <van-image
          height="160"
          fit="cover"
          src="https://img01.yzcdn.cn/vant/apple-1.jpg"/>
        <div class="productName">
          商品名称
        </div>
        <div class="productPrice">
          价格
        </div>
      </van-grid-item>
    </van-grid>
    <!--    商品宫格end-->
  </div>
</template>

<script>
import TopTitle from "../../components/topTitle";

export default {
  name: "productList",
  components: {TopTitle},
  data() {
    return {
      title: '商品列表',
      active: 'home'
    }
  }
}
</script>

<style lang="less" scoped>
#productList {
  background-color: #f0f0ee;
  height: 100%;

  .productName {
    font-size: 14px;
    margin: 8px 0;
  }

  .productPrice {
    font-weight: bolder;
    color: #ff8725;
  }

  .condition {
    width: 95%;
    margin: 5px auto;
    font-weight: bold;
  }

}
</style>
