<!--商品详情页-->
<template>
  <div>
    <!--    回退按钮-->
    <div id="productDetails_title">
      <van-button icon="arrow-left" type="primary" round size="small" color="#b4b4b4"
                  @click="goBack"/>
    </div>
    <!--    回退按钮end-->
    <div id="myshop">
      <!--    轮播图-->
      <div id="my-swipe">
        <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white" height="380" autoplay="0"
                   @change="onChange">
          <van-swipe-item>1</van-swipe-item>
          <van-swipe-item>2</van-swipe-item>
          <van-swipe-item>3</van-swipe-item>
          <van-swipe-item>4</van-swipe-item>
          <template #indicator>
            <div class="custom-indicator">{{ current + 1 }}/4</div>
          </template>
        </van-swipe>
      </div>
      <!--    轮播图end-->
      <!--    商品信息-->
      <div id="shopinfo">
        <van-cell-group inset>
          <van-cell id="shopprice" value="商品价格" :border="false"/>
          <van-cell>
            <template #default>
              商品介绍
            </template>
          </van-cell>
        </van-cell-group>

        <van-cell-group inset>
          <van-cell title="选择规格" is-link>
            <template #default>
              颜色分类
            </template>
          </van-cell>
          <van-cell title="发货" is-link/>
          <van-cell title="保障" is-link/>
          <van-cell title="参数" is-link/>
        </van-cell-group>


        <van-cell-group inset>
          <van-cell title="图文详情"/>
          <van-cell>
            <template #default>
              <van-grid :border="false" :column-num="1">
                <van-grid-item>
                  <van-image src="https://img01.yzcdn.cn/vant/apple-1.jpg"/>
                </van-grid-item>
                <van-grid-item>
                  <van-image src="https://img01.yzcdn.cn/vant/apple-2.jpg"/>
                </van-grid-item>
                <van-grid-item>
                  <van-image src="https://img01.yzcdn.cn/vant/apple-3.jpg"/>
                </van-grid-item>
              </van-grid>
            </template>
          </van-cell>
        </van-cell-group>
      </div>
      <!--    商品信息end-->
    </div>
    <!--    商品导航-->
    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" color="#ee0a24"/>
      <van-goods-action-icon icon="cart-o" text="购物车"/>
      <van-goods-action-icon icon="star" text="已收藏" color="#ff5000"/>
      <van-goods-action-button type="warning" text="加入购物车"/>
      <van-goods-action-button type="danger" text="立即购买" to="/creationOrder"/>
    </van-goods-action>
    <!--    商品导航end-->

  </div>

</template>

<script>
export default {
  name: "productDetails",
  data() {
    return {
      current: 0,
    };
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    goBack() {
      this.$router.go(-1);
    }
  },
}
</script>

<style lang="less" scoped>
#myshop {
  padding-bottom: 50px;
  background-color: #f0f0ee;

  #shopinfo {
    #shopprice {
      font-weight: bolder;
      font-size: 21px;

      .van-cell__value {
        color: red;
      }
    }

    .van-cell-group {
      margin: 0 8px;
      margin-top: 8px;
    }
  }
}

#productDetails_title {
  position: fixed;
  top: 8px;
  left: 8px;
  z-index: 10;
}

#my-swipe {

  /deep/ .custom-indicator {
    position: absolute;
    right: 5px;
    bottom: 5px;
    padding: 2px 5px;
    font-size: 12px;
    background: rgba(0, 0, 0, 0.1);
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
