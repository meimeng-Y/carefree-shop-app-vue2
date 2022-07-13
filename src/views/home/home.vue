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
          <!--          banner.pic 轮播图的地址-->
          <img v-lazy="img_url+banner.pic" width="100%" height="100%"/>
        </van-swipe-item>
      </van-swipe>
    </div>
    <!--    轮播图end-->
    <!--    功能图标-->
    <van-grid square clickable :border='false' style="margin-top: 9px">
      <van-grid-item v-for="(menus,index) in menuss" :key="index" :icon="img_url+menus.pic" :text="menus.name"
                     to="/productList"/>
    </van-grid>
    <!--    功能图标end-->
    <!--    商品列表-->
    <div id="shoplist" style="margin-top: 10px;">
      <van-row class="shoptitle">
        <van-col span="24">精品推荐：</van-col>
      </van-row>
      <van-grid :column-num="2" clickable :border='false'>
        <van-grid-item v-for="(val,index) in BoutiqueLists" :key="index">
          <van-image
            width="10rem"
            height="10rem"
            fit="contain"
            :src='img_url + val.image '
          />
          <van-row>
            <!--            商品名-->
            <van-col span="24" class="shopname">{{ val.storeName }}</van-col>
          </van-row>
          <van-row class="price">
            <!--            当前价格-->
            <span class="newprice">￥{{ val.price | capittalizze }}</span>
            <!--            历史价格-->
            <span class="oldprice">￥{{ val.otPrice }}</span>
          </van-row>
        </van-grid-item>
      </van-grid>
    </div>
    <!--    商品列表end-->
    <!--    猜你喜欢-->
    <div id="shoplike" style="margin-top: 10px;">
      <van-row class="shoptitle">
        <van-col span="24">猜你喜欢：</van-col>
      </van-row>
      <!--
        storeInfo:描述信息
        storeName:商品标题
        otPrice:历史价格
      -->
      <van-card
        v-for="(val,index) in Likes" :key="index"
        tag="Like"
        :price="val.price | capittalizze"
        :desc="val.storeInfo"
        :title="val.storeName"
        :thumb='img_url + val.image '
        :origin-price="val.otPrice | capittalizze"
      />
    </div>
    <!--    猜你喜欢end-->
  </div>
</template>

<script>
import {Toast} from 'vant';
import searchModule from "../../components/searchModule";
import {getBanner, IMG_URL, getMenus, getBoutiqueList, getLike} from '../../config/api'

export default {
  name: "home",
  components: {searchModule},
  data() {
    return {
      isShow_search_off: false,
      ishome: true,
      banners: [],//轮播图信息
      img_url: IMG_URL,//图片主机地址
      menuss: [], //首页菜单
      BoutiqueLists: [],//首页精品推荐
      Likes: [],//首页猜你喜欢
    };
  },
  filters: {
    //过滤器
    capittalizze(val) {
      let newVal = parseFloat(val).toFixed(2)
      return newVal
    },
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
    init() {
      //首页轮播图
      getBanner().then(res => {
        if (res.code == 200) {
          // console.log(res)
          this.banners = res.data
        }
      })
      //首页菜单
      getMenus().then(res => {
        if (res.code == 200) {
          // console.log(res)
          this.menuss = res.data
        }
      })
      //首页精品推荐
      getBoutiqueList().then(res => {
        if (res.code == 200) {
          // console.log(res)
          this.BoutiqueLists = res.data
        }
      })

      //首页猜你喜欢
      getLike().then(res => {
        if (res.code == 200) {
          // console.log(res)
          this.Likes = res.data
        }
      })
    }
  },
  mounted() {
    //获取首页数据
    this.init()
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
    text-align: center;
  }

  .newprice {
    color: #ff8725;
    font-size: large;
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
    height: 180px;
  }
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  text-align: center;
}
</style>
