<!--联系人列表-->
<template>
  <div id="contactList">
    <!--    顶部标题-->
    <van-sticky>
      <TopTitle :t_name="title" :ificon="ificon"/>
    </van-sticky>
    <!--    顶部标题end-->
    <!--联系人列表信息-->
    <van-cell-group v-for="val in 10" :key="val">
      <van-cell>
        <template #title>
          <span>姓名</span>
          <span>手机号</span>
        </template>
        <template #label>
          <span>地址</span>
        </template>
        <!--        修改图标-->
        <template #right-icon>
          <van-icon name="edit" class="search-icon" @click="goupdataContact"/>
        </template>
        <!--        修改图标end-->
      </van-cell>
    </van-cell-group>
    <!--联系人列表信息end-->
    <van-tabbar placeholder>
      <van-button type="primary" color="red" block round id="newadd" to="/operateContactList">新增联系人</van-button>
    </van-tabbar>
  </div>
</template>

<script>
import TopTitle from "../../components/topTitle";

export default {
  name: "contactList",
  components: {TopTitle},
  data() {
    return {
      title: '联系人列表',
      ificon: false
    }
  },
  methods: {
    goupdataContact() {
      this.$router.push({
        name: 'operateContactList',
        params: {
          titl: '修改联系人',
          ifdel: true
        }
      });
    }
  }
}
</script>

<style lang="less" scoped>
#contactList {
  #newadd {
    width: 88%;
    height: 75%;
    margin: 8px auto;
  }

  .search-icon {
    font-size: 23px;
    margin-top: 11px;
  }
}
</style>
