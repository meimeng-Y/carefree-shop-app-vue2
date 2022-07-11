<!--搜索框组件-->
<template>
  <div>
    <form>
      <van-search
        v-model="value"
        :show-action="isShow"
        placeholder="请输入搜索关键词"
        @search="onSearch"
        @cancel="onCancel"
        @focus="goSearch"
      />
    </form>
  </div>
</template>

<script>
import {Toast} from "vant";

export default {
  name: "searchModule",
  data() {
    return {
      value: ''
    }
  },
  props: {
    isShow: false,
    ishome: false
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
      this.$router.go(-1);
    },
    goSearch() {
      //去到搜索页
      if (this.ishome) {
        this.$router.push('/search')
      }
    }
  },
}
</script>

<style scoped>

</style>
