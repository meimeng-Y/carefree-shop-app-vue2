<!--注册页-->
<template>
  <div>
    <div class="icon-back" @click="tologin">
      <van-icon size="25" name="arrow-left"/>
    </div>
    <div id="Register_title">
      <p>注册</p>
    </div>
    <van-form @submit="onSubmit"
              @failed="noVerify">
      <van-field name="uploader" label="上传头像" center>
        <template #input>
          <van-uploader v-model="uploader" :max-count="1"/>
        </template>
      </van-field>
      <van-cell-group>
        <van-field
          v-model="nickname"
          required
          label="昵称"
          :rules="[{ required: true }]"
          placeholder="请输入昵称"
        />
        <van-field
          v-model="phone"
          required
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ required: true },
          { validator: asyncValidator, message: '手机号码格式错误！'},
          ]"
        />
        <van-field
          v-model="password"
          required
          type="password"
          label="密码"
          placeholder="请输入密码"
          :rules="[{ required: true }, { validator: passwodvalidator, message: '密码输入两次不一致！'}]"
        />
        <van-field
          v-model="password1"
          required
          type="password"
          label="确认密码"
          placeholder="请再次输入密码"
          :rules="[{ required: true }, { validator: passwodvalidator, message: '密码输入两次不一致！'}]"
        />
        <van-field
          v-model="sms"
          center
          required
          clearable
          :disabled="isSms"
          label="短信验证码"
          placeholder="请输入短信验证码"
          :rules="[{ required: true }]"
        >
          <template #button>
            <van-button size="small" native-type="button" :disabled="isBut" type="primary" @click="sendsms">
              发送验证码
              <!--              倒计时-->
              <van-count-down id="down_time" :time="time" format="ss" v-if="if_time" @finish="time_stop"/>
            </van-button>
          </template>
        </van-field>
      </van-cell-group>

      <div style="margin: 16px">
        <van-button round block type="info" native-type="submit">注册</van-button>
      </div>
    </van-form>

  </div>
</template>

<script>
import {Toast} from "vant";
import {register} from '@/config/api.js'
import {registerCode} from "../../config/api";

export default {
  name: 'Register',
  data() {
    return {
      nickname: 'ioo',
      phone: '18636569656',
      sms: '验证码自动填充',
      password: '12345',
      password1: '12345',
      uploader: [],
      isSms: true,
      isBut: true,
      time: 6 * 1000,
      if_time: false
    };
  },
  methods: {
    sendsms() {
      //发送验证码
      console.log('发送验证码')
      this.isBut = true //禁用发送验证码按钮
      this.isSms = false //允许输入
      this.if_time = true //显示倒计时
      registerCode({
        phone: this.phone,
        type: "register",
      }).then(res => {
        this.sms = res.data
      })
    },
    time_stop() {
      this.if_time = false //隐藏倒计时
      this.isBut = false //启用发送验证码按钮
    },
    tologin() {
      //回退上一级
      this.$router.go(-1);
    },
    asyncValidator(val) {
      //手机号验证
      //表单验证
      return new Promise((resolve) => {
        Toast.loading('验证中...');
        setTimeout(() => {
          Toast.clear();
          let isphone = /^1[3456789]\d{9}$/.test(val)
          if (isphone) {
            this.isBut = false
            resolve(true);
          } else {
            this.isBut = true
            resolve(false);
          }
        }, 1000);
      });
    },
    passwodvalidator() {
      //密码验证
      //表单验证
      return this.password == this.password1
    },
    onSubmit() {
      //校验通过
      console.log('校验通过')
      register({
        'account': this.phone,//手机号
        'captcha': this.sms,//验证码
        'password': this.password,
        'nickname': this.nickname //用户昵称
      }).then(res => {
        if (res.status == 200) {
          this.$toast.success(res.msg)
          this.$router.push('/Login')
        } else if (res.status == 422) {
          this.$toast.fail(res.msg)
        }
      })
    },
    noVerify() {
      //校验失败
      Toast.fail(`注册失败！\n 请完善信息`);
    }

  },
};
</script>

<style lang="less" scoped>

.icon-back {
  position: absolute;
  left: 2px;
  top: 15px
}

#Register_title {
  text-align: center;
}

#down_time {
  display: inline-block;
  color: #fff;
  font-size: 12px;
}
</style>

