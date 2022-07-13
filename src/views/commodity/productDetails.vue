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
          <van-swipe-item v-for="(item,index) in storeInfo.sliderImageArr" :key="index">
            <van-image fit="cover" :src="img_url+item" width="100%" height="100%"/>
          </van-swipe-item>
          <template #indicator v-if="storeInfo.sliderImageArr">
            <div class="custom-indicator">{{ current + 1 }}/{{ storeInfo.sliderImageArr.length }}</div>
          </template>
        </van-swipe>
      </div>
      <!--    轮播图end-->
      <!--    商品信息-->
      <div id="shopinfo">
        <van-cell-group inset>
          <van-cell id="shopprice" :border="false">
            <template #default>
              <van-row>
                <van-col span="12" class="left_val" style="">
                  <span style="">￥</span>
                  {{ storeInfo.price | capittalizze }}
                </van-col>
                <van-col class="right_val" span="12">
                  <div style="">
                    {{ storeInfo.browse }}
                    <br>
                    浏览
                  </div>
                  <div>
                    {{ storeInfo.sales }}
                    <br>
                    销量
                  </div>
                </van-col>
              </van-row>
            </template>
          </van-cell>
          <van-cell>
            <template #default>
              {{ storeInfo.storeInfo }}
            </template>
          </van-cell>
        </van-cell-group>

        <van-cell-group inset>
          <van-cell title="选择规格" @click="show=true" is-link>
          </van-cell>
          <template>
            <!--   规格类目-->
            <!-- :goods="goods" 商品信息-->
            <!-- :hide-stock="sku.hide_stock" 是否显示商品剩余库存-->
            <van-sku
              v-model="show"
              :sku="sku"
              :goods="goods"
              :hide-stock="sku.hide_stock"
              @buy-clicked="onBuyClicked"
              @add-cart="onAddCartClicked"
            />
          </template>
          <van-cell title="发货" is-link/>
          <van-cell title="保障" is-link/>
          <van-cell title="参数" is-link/>
        </van-cell-group>


        <van-cell-group inset>
          <van-cell title="图文详情"/>
          <van-cell>
            <template #default>
              <div class="disc" v-html="$options.filters.chageUrl(storeInfo.description,img_url)"></div>
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
      <van-goods-action-icon icon="star-o" text="收藏" v-if="!userCollect" color="#ff5000" @click="cutover"/>
      <van-goods-action-icon icon="star" text="已收藏" v-if="userCollect" color="#ff5000" @click="cutover"/>
      <van-goods-action-button type="warning" text="加入购物车"/>
      <van-goods-action-button type="danger" text="立即购买" to="/creationOrder"/>
    </van-goods-action>
    <!--    商品导航end-->

  </div>

</template>

<script>
import {getGoodsDetail, IMG_URL, postCollectAdd, postCollectDel, postCartAdd} from '../../config/api'


export default {
  name: "productDetails",
  data() {
    return {
      img_url: IMG_URL,//图片地址前缀
      current: 0,
      show: false,//显示商品规格框
      productId: '',//商品ID
      storeInfo: {}, //商品信息
      sku: {
        // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
        // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
        tree: [],
        // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
        list: [],
        price: '0', // 默认价格（单位元）
        stock_num: 227, // 商品总库存
        //collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id(不知道干啥的）
        none_sku: false, // 是否无规格商品
        hide_stock: false // 是否隐藏剩余库存
      },
      goods: {
        // 默认商品 sku 缩略图
        picture: ''
      },
      userCollect: false //收藏状态
    };
  },
  filters: {
    //用来解析html标签
    chageUrl: function (data, url) {
      if (data) {
        var a = data
        var vm = this
        var b = /<img [^>]*src=['"]([^'"]+)[^>]*>/g;
        var s = a.match(b);
      }
      if (s != null) {
        for (var i = 0; i < s.length; i++) {
          var srcImg = s[i].replace(b, '$1').replace(/\s+/g, "");
          a = a.replace(new RegExp(srcImg, 'g'), url + srcImg);
        }
      }
      return a;
    },
    //价格小数点
    capittalizze(val) {
      let newVal = parseFloat(val).toFixed(2)
      return newVal
    },
  },
  methods: {
    onChange(index) {
      this.current = index;
    },
    goBack() {
      this.$router.go(-1);
    },
    onBuyClicked() {
      //点击购买回调
      this.$toast.success('购买回调')
    },
    onAddCartClicked(skuData) {
      //点击添加购物车回调
      // this.$toast.success('添加购物车回调')
      // console.log(skuData)
      postCartAdd({
        cartNum: skuData.selectedNum, //商品数量
        new: 0,//是否新购买
        productId: this.productId,//商品ID
        uniqueId: skuData.selectedSkuComb.id //商品规格ID
      }).then(res => {
        console.log(res)
        if (res.code == 200) {
          this.$toast.success('添加成功')
          this.show = false //关闭弹框
        }
      })
    },
    //切换收藏状态
    cutover() {
      if (!this.userCollect) {
        postCollectAdd({
          id: this.productId,
          category: 'collect'
        }).then(res => {
          console.log(res)
          if (res.code == 200) {
            this.$toast.success('收藏成功')
            this.userCollect = !this.userCollect
          }
        })
      } else {
        postCollectDel({
          id: this.productId,
          category: 'collect'
        }).then(res => {
          console.log(res)
          if (res.code == 200) {
            this.$toast.success('取消成功')
            this.userCollect = !this.userCollect
          }
        })
      }

    }
  },
  mounted() {
    let id = this.$route.query.productId
    this.productId = id
    // console.log(id)
    getGoodsDetail({
      id
    }).then(res => {
      // console.log(res)
      //商品的基本信息
      this.storeInfo = res.data.storeInfo
      //设置商品略缩图
      this.goods.picture = this.img_url + res.data.storeInfo.image
      //设置默认价格
      this.sku.price = res.data.storeInfo.price
      //设置总库存
      this.sku.stock_num = res.data.storeInfo.stock
      //判断是否收藏
      if (this.storeInfo.userCollect) {
        //收藏
        this.userCollect = true
      } else {
        //未收藏
        this.userCollect = false
      }
      //添加商品规格
      res.data.productAttr.forEach(item => {
        // 初始化一个sku对象
        let treeMap = {
          k: '', // skuKeyName：规格类目名称
          k_s: '', // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
          v: [
            /* {
               id: '1', // skuValueId：规格值 id
               name: '红色', // skuValueName：规格值名称
               imgUrl: 'https://img01.yzcdn.cn/1.jpg', // 规格类目图片，只有第一个规格类目可以定义图片
               previewImgUrl: 'https://img01.yzcdn.cn/1p.jpg', // 用于预览显示的规格类目图片
             }*/
          ]
        }
        treeMap.k = item.attrName
        treeMap.k_s = item.attrName
        //设置具体的商品规格
        item.attrValueArr.forEach(att => {
          let v = {
            id: '',
            name: ''
          }
          v.id = att
          v.name = att
          treeMap.v.push(v)
        })
        //添加到data
        this.sku.tree.push(treeMap)
      })
      //设置具体的商品规格的规格组合
      for (let value in res.data.productValue) {
        let list = {}
        //用数据库里的唯一值作为ID
        list.id = res.data.productValue[value].unique
        //用来分割具体的属性
        let sk = res.data.productValue[value].sku.split(',')
        //给list与sku绑定
        //TODO 理解一下
        for (let values in res.data.productValue) {
          this.sku.tree.forEach((r, i) => {
            // console.log('r', r)
            // console.log('i', i)
            list[r.k_s] = sk[i]
            // console.log(list)
          })
        }
        list.price = res.data.productValue[value].price * 100 //商品价格
        list.integral = res.data.productValue[value].integral //
        list.stock_num = res.data.productValue[value].stock //库存
        this.sku.list.push(list)
      }

    })
  }
}
</script>

<style lang="less" scoped>
#myshop {
  padding-bottom: 50px;
  background-color: #f0f0ee;

  #shopinfo {
    #shopprice {
      /*      font-weight: bolder;
            font-size: 21px;*/
      padding: 11px 8px 3px;

      .left_val {
        span {
          font-size: 16px;
        }

        color: red;
        font-size: xx-large;
      }

      .right_val {
        text-align: end;

        div {
          display: inline-block;
          font-size: 12px;
          color: #969799;
          line-height: normal;
          text-align: center;
        }
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
}
</style>
