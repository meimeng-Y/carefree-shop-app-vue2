<!--订单详情页面-->
<template>
  <div id="order">
    <!--    顶部标题-->
    <van-sticky>
      <TopTitle :t_name="title" :ificon="ificon"/>
    </van-sticky>
    <!--    顶部标题end-->
    <!--    顶部占位-->
    <div id="topplaceholder">
      <!--    背景图片 + 收货人-->
      <div id="topbg">
        <div id="text">
          商家为发货
        </div>
        <!--        收货人-->
        <van-cell id="address">
          <template #title>
            <span> 姓名</span>
            <span style="margin-left: 8px;">1211231321</span>
          </template>
          <template #label>
            <span>地址</span>
          </template>
        </van-cell>
        <!--        收货人end-->
      </div>
      <!--    背景图片 + 收货人end-->
    </div>
    <!--    顶部占位-->

    <!--订单信息-->
    <van-cell title="订单状态" value="未发或"/>
    <van-card
      num="2"
      price="2.00"
      desc="描述信息"
      title="商品标题"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
    >
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
    </van-card>
    <van-cell title="快递" value=""/>
    <van-cell title="订单号" value=""/>
    <van-cell title="下单时间" value=""/>
    <van-cell title="运费" value=""/>
    <van-cell title="优惠" value="无优惠"/>
    <van-cell title="总金额" value="总金额"/>
    <van-cell title="支付方式" value="支付方式"/>
    <!--订单信息end-->

  </div>
</template>

<script>
import TopTitle from "../../components/topTitle";

export default {
  name: "order",
  components: {TopTitle},
  data() {
    return {
      title: '订单详情',
      ificon: false,
    }
  }
}
</script>

<style lang="less" scoped>
#order {
  .van-card {
    margin-top: 0;
  }

  #topplaceholder {
    height: 150px;

    #topbg {
      width: 100%;
      background-image: url(../../../static/userBg.png);
      position: relative;

      #text {
        color: white;
        font-size: 16px;
        height: 90px;
        line-height: 90px;
        text-align: center;
      }

      #address {
        bottom: -60%;
        position: absolute;
        border-top-left-radius: 9px;
        border-top-right-radius: 9px;
      }
    }

  }
}
</style>
