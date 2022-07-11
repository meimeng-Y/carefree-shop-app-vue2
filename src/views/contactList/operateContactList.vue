<!--联系人操作页-->
<template>
  <div id="operateContactList">
    <!--    顶部标题-->
    <van-sticky>
      <TopTitle :t_name="title" :ificon="ificon"/>
    </van-sticky>
    <!--    顶部标题end-->
    <!--  输入表单-->
    <van-form @submit="onSubmit">
      <van-field
        required
        v-model="contact.username"
        name="联系人"
        label="联系人"
        placeholder="请填写"
        :rules="[{ required: true, message: '请填写联系人' }]"
      />
      <van-field
        required
        v-model="contact.tel"
        type="tel"
        name="手机号"
        label="手机号"
        placeholder="请填写"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <!--      选择地址-->
      <van-field
        required
        readonly
        clickable
        name="area"
        :value="contact.address"
        label="地区选择"
        placeholder="点击选择省市区"
        :rules="[{ required: true, message: '请选择省市区' }]"
        @click="showArea = true"
      />
      <van-popup v-model="showArea" position="bottom">
        <van-area
          :area-list="areaList"
          @confirm="onConfirm"
          @cancel="showArea = false"
        />
      </van-popup>
      <!--      选择地址end-->
      <van-field
        required
        autosize
        type="textarea"
        v-model="contact.addressValue"
        name="详细地址"
        label="详细地址"
        placeholder="请填写"
        :rules="[{ required: true, message: '请填写详细地址' }]"
      />
      <van-field
        v-model="contact.code"
        type="number"
        name="收货邮政编码"
        label="收货邮政编码"
        placeholder="请填写"
      />

      <van-cell center title="设置默认" icon="shop-o" id="isdefault">
        <template #right-icon>
          <van-switch v-model="contact.defaultContact" size="24"/>
        </template>
      </van-cell>
      <!--      两个按钮-->
      <div style="margin: 16px;">
        <van-button round block type="info" native-type="submit">提交</van-button>
      </div>
      <!--      新增和删除共用一个页面，判断是哪个-->
      <div style="margin: 16px;" v-if="ifdel">
        <van-button round block type="danger" native-type="submit">删除</van-button>
      </div>
      <!--      两个按钮end-->
    </van-form>
  </div>
</template>

<script>
import TopTitle from "../../components/topTitle";
import {areaList} from '@vant/area-data';

export default {
  name: "operateContactList",
  components: {TopTitle},
  data() {
    return {
      title: '新增联系人',
      ificon: false,
      // 联系人表单信息
      contact: {
        username: '',//联系人
        tel: '',//手机号
        address: '',//选择省市区
        addressValue: '', //详细地址
        code: '', //收货邮政编码
        defaultContact: false //设置默认联系人
      },
      showArea: false,
      areaList,
      ifdel: false
    }
  },
  mounted() {
    this.title = this.$route.params.titl
    this.ifdel = this.$route.params.ifdel
  },
  methods: {
    onSubmit(values) {
      console.log('submit', values);
    },
    //将地址转化为字符串
    onConfirm(values) {
      console.log(values)
      this.address = values
        .filter((item) => !!item)
        .map((item) => item.name)
        .join('/');
      this.showArea = false;
    },
  }
}
</script>

<style lang="less" scoped>
#operateContactList {
  #isdefault {
    margin-top: 10px;
  }

  .van-form {
    margin: 10px;
  }
}
</style>
