<template>
  <div>
    <van-button type="primary" block @click="go5">功能页</van-button>
    <van-button type="primary" block @click="go1">测试界面1</van-button>
    <van-button type="primary" block @click="go2">登录</van-button>
    <van-button type="primary" block @click="go3">注册</van-button>
    <van-button type="primary" block @click="go4">商品详情</van-button>
    <van-button type="primary" block @click="go6">商品列表</van-button>
  </div>
</template>

<script>
export default {
  name: "test2",
  methods: {
    go1() {
      this.$router.push('/test1')
    },
    go2() {
      this.$router.push('/login')
    },
    go3() {
      this.$router.push('/register')
    },
    go4() {
      this.$router.push('/productDetails')
    },
    go5() {
      this.$router.push('/business')
    },
    go6() {
      this.$router.push('/productList')
    }
  }
}
</script>

<style scoped>

</style>
