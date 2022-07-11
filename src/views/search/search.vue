<!--搜索页面-->
<template>
  <div id="search">
    <!--    搜索框组件-->
    <searchModule :is-show="isShow_search_off" :ishome="ishome"></searchModule>
    <!--    搜索框组件end-->
    <!--    搜索历史区域-->
    <span class="title">
      搜索历史
    </span>
    <div>
      <van-button
        v-for="value in 14" :key="value"
        type="primary" size="mini"
        round
        color="#eeeded"
        style="margin-left: 8px"
      >
        迷你按钮
      </van-button>
    </div>
    <!--    搜索历史区域end-->
    <!--     热门搜索区域-->
    <span class="title">
      热门搜索
    </span>
    <van-row v-for="value in 14" :key="value">
      <van-col span="12">
        <van-cell title="单元格"/>
      </van-col>
      <van-col span="12">
        <van-cell title="单元格"/>
      </van-col>
    </van-row>
    <!--     热门搜索区域end-->
  </div>
</template>

<script>
import searchModule from "../../components/searchModule";

export default {
  name: "search",
  components: {searchModule},
  data() {
    return {
      isShow_search_off: true,
      ishome: false
    }
  }
}
</script>

<style lang="less">
#search {
  background-color: white;

  .title {
    display: block;
    color: #0e0e0e;
    font-weight: bold;
    margin: 5px;
  }

  .van-button__text {
    color: #696969;
  }
}
</style>
