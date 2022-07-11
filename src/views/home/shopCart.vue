<!--购物车-->
<template>
  <div id="shopCart">
    <!--    顶部标题-->
    <van-sticky>
      <TopTitle :t_name="title"/>
    </van-sticky>
    <!--    顶部标题end-->
    <!--    为空时显示-->
    <!--    <van-empty description="购物车为空"/>-->
    <!--    为空时显示end-->
    <!--    购物车卡片-->
    <van-checkbox-group id="shopCard" v-model="result">
      <van-checkbox :name="value" v-for="value in 10" :key="value" label-disabled>
        <van-swipe-cell>
          <!--          商品卡片-->
          <van-card
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
              <van-stepper v-model="numValue" min="1" max="8" integer/>
            </template>
            <!--            自定义右下角内容end-->
          </van-card>
          <!--          商品卡片end-->

          <!--          删除键-->
          <template #right>
            <van-button square text="删除" type="danger" class="delete-button"/>
          </template>
          <!--          删除键end-->

        </van-swipe-cell>
      </van-checkbox>
    </van-checkbox-group>
    <!--    购物车卡片-->
    <!--    提交订单栏-->
    <van-submit-bar :price="3050" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked">全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送, <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
    <!--    提交订单栏end-->

  </div>
</template>

<script>
import TopTitle from "../../components/topTitle";

export default {
  name: "shopCart",
  components: {TopTitle},
  data() {
    return {
      title: '购物车',
      result: [],
      numValue: 1,
      checked: false
    }
  },
  methods: {
    onClickEditAddress() {

    },
    onSubmit() {

    }
  }
}
</script>

<style lang="less" scoped>
#shopCart {
  min-height: 100%;
  background-color: white;
  position: absolute;
  left: 0;
  right: 0;

  #shopCard {
    margin: 0 10px;
    margin-bottom: 84px;

    .van-card__price {
      color: red;
      font-weight: bolder;
    }

    .van-checkbox {
      margin: 10px 0;
      background-color: #fafafa;
    }

    /deep/ .van-checkbox__label {
      width: 100%;
    }
  }

  /deep/ .goods-card {
    margin: 0;
    //background-color: white;
  }

  /deep/ .delete-button {
    height: 100%;
  }
}

</style>
