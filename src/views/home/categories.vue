<!--商品分类界面-->
<template>
  <div id="categories">
    <!--    顶部标题-->
    <van-sticky>
      <TopTitle :t_name="title"/>
    </van-sticky>
    <!--    顶部标题end-->
    <van-row>
      <!--      侧边导航条-->
      <van-col span="6">
        <van-sidebar v-model="activeKey">
          <van-sidebar-item
            v-for="category in categorys"
            :key="category.id" :title="category.cateName"
            @click="tab_item(category.id)"
          />
        </van-sidebar>
      </van-col>
      <!--      侧边导航条end-->
      <!--      商品分类详情-->
      <van-col span="18">
        <van-grid square :column-num="3" clickable id="grid">
          <van-grid-item v-for="children in category_children" :key="children.id">
            <van-image
              width="4rem"
              height="4rem"
              fit="cover"
              :src='img_url+children.pic'
              @click="goSearch(children.id)"
            />
            <span>{{ children.cateName }}</span>
          </van-grid-item>
        </van-grid>
      </van-col>
      <!--      商品分类详情end-->
    </van-row>
  </div>
</template>

<script>
import TopTitle from "../../components/topTitle";
import {getCategory, IMG_URL} from '../../config/api'

export default {
  name: "categories",
  components: {TopTitle},
  data() {
    return {
      title: '商品分类',
      activeKey: 0,
      img_url: IMG_URL,//图片主机地址
      categorys: [],//分类数据
      category_children: [],//二级分类数据
    }
  },
  methods: {
    //切换二级分类
    tab_item(id) {
      let newCategory = this.categorys.filter(item => item.id == id)
      // console.log(newCategory)
      this.category_children = newCategory[0].children
    },
    //点击分类跳转到商品列表
    goSearch(val) {
      this.$router.push({
        name: 'productList',
        params: {
          sid: val
        }
      })
    }
  },
  mounted() {
    getCategory().then(res => {
      this.categorys = res.data //初始化分类数据
      this.tab_item(res.data[0].id)//初始化二级分类数据
    })
  }
}
</script>

<style lang="less" scoped>
#categories {
  background-color: white;

  .van-sidebar-item {
    background-color: white;
  }

  #title {
    text-align: center;
    font-weight: bolder;
    font-size: 16px;
  }

  #grid {
    margin-top: 12px;
  }
}
</style>
