<!--登录页-->
<template>
  <div>
    <p class="title">登录</p>
    <!--    头像-->
    <div id="avatar">
      <van-image
        round
        width="6rem"
        height="6rem"
        fit="cover"
        src="https://img01.yzcdn.cn/vant/cat.jpeg"
      />
    </div>
    <!--    头像end-->
    <!--    登录的表单-->
    <van-form
      @submit="onSubmit"
      @failed="noVerify">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true }]"
      />
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">登录</van-button>
      </div>
      <div class="reg">
        <div @click="toRegister">没有账号？立即注册</div>
      </div>
    </van-form>
    <!--    登录的表单end-->

  </div>
</template>

<script>
import {Toast} from "vant";

export default {
  name: "Login",
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    onSubmit() {
      //校验通过
      console.log('校验通过')
    },
    noVerify() {
      //校验失败
      Toast.fail('请输入账号或密码');
    },
    toRegister() {
      this.$router.push('/Register')
    },
  }
}
</script>

<style lang="less" scoped>
div {
  .title {
    font-weight: bold;
    height: 50px;
    line-height: 50px;
    color: black;
    text-align: center;
  }

  #avatar {
    text-align: center;
  }
}


</style>
