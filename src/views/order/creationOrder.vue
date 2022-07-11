<!--创建订单页面-->
<template>
  <div id="creationOrder">
    <!--    顶部标题-->
    <van-sticky>
      <TopTitle :ificon="ificon" :t_name="title"/>
    </van-sticky>
    <!--    顶部标题end-->
    <!--    选择地址-->
    <!--    控制面板的显示，和显示地址-->
    <van-cell is-link title="请选择地址" @click="showaddr = true"/>
    <!--    控制面板的显示，和显示地址end-->
    <van-action-sheet v-model="showaddr" @select="onSelect">
      <!--      添加联系人-->
      <van-contact-card type="add" @click="onAdd"/>
      <!--      添加联系人end-->
      <!--      选择联系人-->
      <van-contact-card
        v-for="val in 10" :key="val"
        :name="currentContact.name"
        :tel="currentContact.tel"
        type="edit"
        @click="onEdit"
      />
      <!--      选择联系人end-->
    </van-action-sheet>
    <!--    选择地址end-->

    <!--    商品卡片-->
    <van-card
      desc="描述信息"
      num="2"
      price="2.00"
      thumb="https://img01.yzcdn.cn/vant/ipad.jpeg"
      title="商品标题"
    >
      <template #tags>
        <van-tag plain type="danger">标签</van-tag>
        <van-tag plain type="danger">标签</van-tag>
      </template>
    </van-card>
    <!--    商品卡片end-->

    <!--    优惠券-->
    <van-cell is-link title="优惠券" @click="showcoupon = true"/>
    <van-action-sheet v-model="showcoupon" @select="onSelect">
      <div style="height: 200px">
        优惠券列表
      </div>
    </van-action-sheet>
    <!--    优惠券end-->
    <!--    隐藏的信息-->
    <template>
      <van-cell title="商品价格" value=""/>
      <van-cell title="优惠" value=""/>
      <van-cell title="运费" value="免邮费"/>
      <van-field v-model="remark" label="备注" placeholder="请输入备注"/>
    </template>
    <!--    隐藏的信息end-->

    <!--    支付方式-->
    <template>
      <van-cell class="pay" title="余额" icon="shop-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #label>
          ￥123456
        </template>
      </van-cell>
      <van-cell title="微信" icon="shop-o">
        <!-- 使用 right-icon 插槽来自定义右侧图标 -->
        <template #label>
          暂未开通
        </template>
      </van-cell>
    </template>
    <!--    支付方式end-->
    <!--提交订单-->
    <van-submit-bar

      :price="3050"
      button-text="提交订单" @submit="onSubmit"/>
    <!--提交订单end-->
  </div>
</template>

<script>
import TopTitle from "../../components/topTitle";
import {ActionSheet, Toast} from 'vant';

export default {
  name: "creationOrder",
  components: {TopTitle},
  data() {
    return {
      title: '创建订单',
      ificon: false,
      showaddr: false,
      showcoupon: false,
      currentContact: {
        name: '张三',
        tel: '13000000000',
      },
      remark: ''
    }
  },
  methods: {
    onSelect(item) {
      // 默认情况下点击选项时不会自动收起
      // 可以通过 close-on-click-action 属性开启自动收起
      this.show = false;
      Toast(item.name);
    },
    onAdd() {
      Toast('新增');
    },
    onEdit() {
      Toast('编辑');
    },
    onSubmit() {
      this.$router.push('/paySuccess')
    }
  }
}
</script>

<style lang="less" scoped>
#creationOrder {
  & > .van-cell {
    width: 95%;
    margin: 0 auto;
  }

  & > div:nth-child(2) {
    margin-top: 8px;
  }

  & > .van-card {
    width: 95%;
    margin: 0 auto;
    background-color: white;
    margin-top: 8px;
  }

  .pay {
    margin-top: 8px;
  }
}
</style>
