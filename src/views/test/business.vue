<!--功能页
暂时没用
-->
<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="没有更多了"
    @load="onLoad"
  >
    <van-cell v-for="item in list" :key="item">
      <template #icon>
        <van-image
          round
          width="6rem"
          height="6rem"
          fit="cover"
          src="https://img01.yzcdn.cn/vant/cat.jpeg"
        />
      </template>
      <template #default>
        <van-row gutter="20">
          <van-col span="8">span: 8</van-col>
        </van-row>
        <van-row gutter="20">
          <van-col span="8">span: 8</van-col>
        </van-row>
        <van-row gutter="20">
          <van-col span="8">span: 8</van-col>
        </van-row>
      </template>
      <!--      <template #extra>-->
      <!--        <van-row>-->
      <!--          <van-col span="8">详情 ></van-col>-->
      <!--        </van-row>-->
      <!--      </template>-->

      <template #extra>
        <span>详情></span>
      </template>
    </van-cell>
  </van-list>
</template>

<script>
export default {
  name: "business",
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
    };
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }

        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
  },
}
</script>

<style scoped>

</style>
