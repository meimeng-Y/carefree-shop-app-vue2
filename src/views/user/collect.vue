<!--
我的收藏页面
我的足迹页面
-->
<template>
  <div id="collect">
    <!--    顶部标题-->
    <van-sticky>
      <TopTitle :t_name="title" :ificon="ificon"/>
    </van-sticky>
    <!--    顶部标题end-->
    <van-cell title=" " :value="text"
              @click="ifchecboxs==false?ifchecboxs=true:ifchecboxs=false;text=='管理'?text='取消':text='管理'"/>

    <van-checkbox-group v-model="result">
      <van-grid :column-num="2">
        <van-grid-item v-for="value in 10" :key="value">
          <van-checkbox class="checboxs" name="a" v-if="ifchecboxs">
          </van-checkbox>
          <van-image
            height="12rem"
            fit="cover"
            src="https://img01.yzcdn.cn/vant/apple-1.jpg"/>
          <van-cell id="shopname" value="名称"/>
          <van-cell id="shopprice" value="价格"/>
        </van-grid-item>
      </van-grid>
    </van-checkbox-group>
    <!--    批量操作-->
    <van-submit-bar button-text="删除" @submit="onSubmit" v-if="ifchecboxs">
      <van-checkbox v-model="checked">全选</van-checkbox>
    </van-submit-bar>
    <!--    批量操作end-->

  </div>
</template>

<script>
import TopTitle from "../../components/topTitle";

export default {
  name: "collect",
  components: {TopTitle},
  data() {
    return {
      title: '我的收藏',
      ificon: false,
      text: '管理',
      result: [],
      ifchecboxs: false,
      checked: false
    };
  },
  methods: {
    onSubmit() {

    }
  },
  mounted() {
    this.title = this.$route.params.titl
  }
}
</script>

<style lang="less" scoped>
#collect {
  & > .van-cell {
    margin-top: 5px;
  }

  .van-checkbox {
    margin-right: 48%;
  }

  #shopname {
    padding: 5px 8px;

    .van-cell__value {
      text-align: center;
    }

  }

  #shopprice {
    padding: 5px 8px;

    .van-cell__value {
      font-weight: bolder;
      color: #ff8725;
      font-size: 22px;
    }
  }

  .checboxs {
    position: absolute;
    z-index: 2;
    top: 20px;
    left: 10px;
  }

}
</style>
