<!--主页-->
<template>
  <div id="home">
    <!--    搜素框-->
    <van-sticky>
      <searchModule :is-show="isShow_search_off" :ishome="ishome"></searchModule>
    </van-sticky>
    <!--    搜素框end-->
    <!--    轮播图-->
    <div id="my-swipe">
      <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
        <van-swipe-item v-for="(banner,index) in banners" :key="index">
          <img v-lazy="'http://localhost:8008/api'+banner.pic" width="100%" height="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--    轮播图end-->
    <!--    功能图标-->
    <van-grid square clickable :border='false' style="margin-top: 9px">
      <van-grid-item v-for="value in 4" :key="value" icon="photo-o" text="全部商品" to="/productList"/>
    </van-grid>
    <!--    功能图标end-->
    <!--    商品列表-->
    <div id="shoplist" style="margin-top: 10px;">
      <van-row class="shoptitle">
        <van-col span="24">精品推荐：</van-col>
      </van-row>
      <van-grid :column-num="2" clickable :border='false'>
        <van-grid-item v-for="value in 6" :key="value">
          <van-image
            width="10rem"
            height="10rem"
            fit="contain"
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
          />
          <van-row>
            <van-col span="24" class="shopname">商品名123123123</van-col>
          </van-row>
          <van-row class="price">
            <van-col span="12" class="newprice">当前价格</van-col>
            <van-col span="12" class="oldprice">历史价格</van-col>
          </van-row>
        </van-grid-item>
      </van-grid>
    </div>
    <!--    商品列表end-->
    <!--    猜你喜欢-->
    <div id="shoplike" style="margin-top: 10px;">
      <van-row class="shoptitle">
        <van-col span="24">精品推荐：</van-col>
      </van-row>
      <van-card
        v-for="value in 6" :key="value"
        tag="Like"
        price="2.00"
        desc="描述信息"
        title="商品标题"
        thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
        origin-price="10.00"
      />
    </div>
    <!--    猜你喜欢end-->
  </div>
</template>

<script>
import {Toast} from 'vant';
import searchModule from "../../components/searchModule";
import {getBanner} from '../../config/api'

export default {
  name: "home",
  components: {searchModule},
  data() {
    return {
      isShow_search_off: false,
      ishome: true,
      banners: [],
    };
  },
  methods: {
    onSearch(val) {
      Toast(val);
    },
    onCancel() {
      Toast('取消');
    },
    goSearch() {
      //去到搜索页
      this.$router.push('/search')
    },
    getlunb() {

    }
  },
  mounted() {
    getBanner().then(res => {
      if (res.code == 200) {
        // console.log(res)
        this.banners = res.data
      }
    })
  }
}
</script>

<style lang="less">
#home {

  #shoplike {
    .van-card {
      background-color: white;
      margin-top: 0px;

      .van-card__price {
        color: #ff8725;
      }
    }
  }

  .shopname {
    font-size: 14px;
  }

  .price {
    width: 88%;
    line-height: 19.8px;
    margin-top: 2px;
  }

  .newprice {
    color: #ff8725;
    font-size: 14px;
    font-weight: bold;
  }

  .oldprice {
    color: #c4c7d3;
    font-size: 12px;
    text-decoration: line-through;
  }

  .shoptitle {
    background-color: white;
    padding-top: 5px;
    padding-left: 10px
  }

  #my-swipe {
    margin-top: 10px;
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
</style>
