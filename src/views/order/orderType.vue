<!--总订单页面-->
<template>
  <div id="orderType">
    <!--    顶部标题-->
    <van-sticky>
      <TopTitle :t_name="title" :ificon="ificon"/>
    </van-sticky>
    <!--    顶部标题end-->
    <van-tabs v-model="active">
      <van-tab title="标签 1">内容 1</van-tab>
      <van-tab title="待发货">

        <van-cell-group>
          <van-cell :border="false" title="时间" size="large" value="发货状态"/>
          <van-cell size="large">
            <template #default>
              <!--            商品卡片-->
              <van-card
                id="shopCard"
                :num="numValue"
                price="2.00"
                desc="描述信息"
                title="商品标题"
                class="goods-card"
                thumb="https://img01.yzcdn.cn/vant/cat.jpeg"
              >
                <template #tags>
                  商品规格
                </template>
                <!--            自定义右下角内容-->
                <template #footer>
                  <van-button class="btn"
                              @click="$toast.success('已提醒卖家发货！')">提醒发货
                  </van-button>

                  <van-button class="btn" to="/order">立即查看</van-button>
                </template>
                <!--            自定义右下角内容end-->
              </van-card>
              <!--            商品卡片end-->
            </template>
          </van-cell>

        </van-cell-group>

      </van-tab>
      <van-tab title="标签 3">内容 3</van-tab>
      <van-tab title="标签 4">内容 4</van-tab>
      <van-tab title="标签 5">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import TopTitle from "../../components/topTitle";

export default {
  name: "orderType",
  components: {TopTitle},
  data() {
    return {
      title: '我的订单',
      ificon: false,
      active: 1,
      numValue: '1'
    }
  }
}
</script>

<style lang="less" scoped>
#orderType {
  .van-cell-group {
    margin-top: 8px;
  }

  .van-cell--large {
    padding-top: 4px;
    padding-bottom: 4px;
  }
}

#shopCard {
  background-color: white;
  padding: 4px 0;

  .van-card__thumb {
    margin-right: 20px;
  }

  .btn {
    height: 30px;
    border-radius: 7px;
  }
}
</style>
