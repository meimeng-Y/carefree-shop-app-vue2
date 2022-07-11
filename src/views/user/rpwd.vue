<!--修改密码页面-->
<template>
  <div id="rpwd">
    <!--    顶部标题-->
    <van-sticky>
      <TopTitle :t_name="title" :ificon="ificon"/>
    </van-sticky>
    <!--    顶部标题end-->
    <!--    修改表单-->
    <van-form @submit="onSubmit">
      <van-field v-model="pwd" type="password" label="原始密码:" placeholder="请输入"/>
      <van-field v-model="newpwd" type="password" label="新密码:" placeholder="请输入"/>
      <van-field v-model="rpwd" type="password" label="重复密码:" placeholder="请输入"/>
      <van-button block class="btn" color="#fe5e48" @click="">确定</van-button>
    </van-form>
    <!--    修改表单end-->

  </div>
</template>

<script>
import TopTitle from "../../components/topTitle";

export default {
  name: 'rpwd',
  components: {TopTitle},
  data() {
    return {
      title: '修改密码',
      ificon: false,
      pwd: "",
      newpwd: "",
      rpwd: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
  },
};
</script>

<style lang="less" scoped>

#rpwd {
  .van-form {
    margin-top: 15px;
  }
}

.btn {

  width: calc(100% - 30px);
  margin: 20px auto;
  border-radius: 12px;
}
</style>
