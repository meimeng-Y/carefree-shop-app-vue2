<template>
  <div>
    <div id="rview">
      <router-view/>
    </div>
    <van-tabbar v-model="active" placeholder>
      <van-tabbar-item icon="home-o" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="apps-o" to="/categories">商品分类</van-tabbar-item>
      <van-tabbar-item icon="shopping-cart-o" to="/shopCart">购物车</van-tabbar-item>
      <van-tabbar-item icon="cluster-o" to="/test2">测试</van-tabbar-item>
      <van-tabbar-item icon="manager-o" to="/mine">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      active: 0,
    };
  },
}
</script>

<style lang="less" scoped>
#rview {

}
</style>
