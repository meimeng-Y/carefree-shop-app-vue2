<!--总订单页面-->
<template>
  <div id="orderType">
    <!--    顶部标题-->
    <van-sticky>
      <TopTitle :t_name="title" :ificon="ificon"/>
    </van-sticky>
    <!--    顶部标题end-->
    <van-tabs v-model="activetab">
      <van-tab title="标签 1" name="0">内容 1</van-tab>
      <van-tab title="待发货" name="1">

        <van-cell-group v-for="val in orderList" :key="orderList.id">
          <!--
          val.createTime 订单创建时间
          val.statusDto.title 发货状态
          -->
          <van-cell :border="false" :title="val.createTime" size="large" :value="val.statusDto.title"/>
          <van-cell size="large">
            <template #default>
              <!--            商品卡片-->

              <van-card
                id="shopCard"
                :num="val.totalNum"
                :price="val.totalPrice | capittalizze"
                :desc="val.cartInfo[0].productInfo.storeInfo"
                :title="val.cartInfo[0].productInfo.storeName"
                class="goods-card"
                :thumb='img_url + val.cartInfo[0].productInfo.image'
              >
                <template #tags>
                  {{ val.cartInfo[0].productInfo.attrInfo.sku }}
                </template>
                <!--            自定义右下角内容-->
                <template #footer>
                  <van-button class="btn"
                              @click="$toast.success('已提醒卖家发货！')">提醒发货
                  </van-button>

                  <van-button class="btn" :to="`/order?key=${val.unique}`">立即查看</van-button>
                </template>
                <!--            自定义右下角内容end-->
              </van-card>
              <!--            商品卡片end-->
            </template>
          </van-cell>

        </van-cell-group>

      </van-tab>
      <van-tab title="标签 3" name="2">内容 3</van-tab>
      <van-tab title="标签 4" name="3">内容 4</van-tab>
      <van-tab title="标签 5" name="4">内容 4</van-tab>
    </van-tabs>
  </div>
</template>

<script>
import TopTitle from "../../components/topTitle";
import {postOrderList, IMG_URL} from '../../config/api'

export default {
  name: "orderType",
  components: {TopTitle},
  data() {
    return {
      img_url: IMG_URL,
      title: '我的订单',
      ificon: false,
      activetab: '2',//被选中的标签
      numValue: '1',
      orderList: {}//订单数据
    }
  },
  filters: {
    //过滤器
    capittalizze(val) {
      let newVal = parseFloat(val).toFixed(2)
      return newVal
    },
  },
  mounted() {
    let id = this.$route.query.type
    // console.log(typeof id)
    this.activetab = id
    postOrderList({
      type: id
    }).then(res => {
      console.log(res)
      this.orderList = res.data.content
    })
  }
}
</script>

<style lang="less" scoped>
#orderType {
  .van-cell-group {
    //margin-top: 8px;
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
