<!--我的钱包页-->
<template>
  <div id="wallet">
    <!--    顶部标题-->
    <van-sticky>
      <TopTitle :t_name="title" :ificon="ificon"/>
    </van-sticky>
    <!--    顶部标题end-->
    <!--    钱包信息-->
    <van-cell-group inset :border="false" :column-num="3" id="info">
      <van-row>
        <van-col span="8">
          <div class="title">
            <span> 总资产(元)</span>
            <br>
            <span>122222222</span>
          </div>
        </van-col>
        <van-col span="8">
          <div class="title">
            <span> 累计充值(元)</span>
            <br>
            <span>122222222</span>
          </div>
        </van-col>
        <van-col span="8">
          <div class="title">
            <span> 累计消费(元)</span>
            <br>
            <span>122222222</span>
          </div>
        </van-col>
      </van-row>
    </van-cell-group>
    <!--    钱包信息end-->

    <!--    充值按钮-->
    <van-cell-group inset id="recharge">
      <van-cell icon="shop-o">
        <template #title>
          充值送多少
        </template>
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #right-icon>
          <van-button type="danger" size="small" round @click="">充值</van-button>
        </template>
      </van-cell>
    </van-cell-group>

    <!--    充值按钮end-->
  </div>
</template>

<script>
import TopTitle from "../../components/topTitle";

export default {
  name: "wallet",
  components: {TopTitle},
  data() {
    return {
      title: '我的钱包',
      ificon: false,
    }
  }
}
</script>

<style lang="less" scoped>
#wallet {
  #info {
    text-align: center;
    margin: 5px;
    height: 58px;
    background-color: black;

    .van-row {
      margin-top: 6px;
    }
  }

  #recharge {
    margin: 5px;

    .van-icon {
      font-size: 20px;
      margin-top: 4px;
    }

    .van-cell__title {
      line-height: 32px;
    }

    .van-button {
      width: 80px;
    }
  }

  .title {
    color: #F0AD4E;

    & > span:nth-child(1) {
      display: block;
    }

    font-size: 0.32rem;
  }

  .nums {
    font-size: 0.32rem;
  }
}
</style>
