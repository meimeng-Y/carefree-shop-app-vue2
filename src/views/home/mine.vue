<!--我的-->
<template>
  <div id="mine">
    <!--    顶部按钮-->
    <div id="setup">
      <van-icon name="setting-o" size="30px"/>
    </div>
    <!--    顶部按钮end-->
    <!--    用户的头象-->
    <div id="avatar">
      <van-row>
        <van-col span="10">
          <van-image
            fit="cover"
            height="6rem"
            round
            src="https://img01.yzcdn.cn/vant/cat.jpeg"
            width="6rem"
          />
        </van-col>
        <van-col span="14">
          <div id="userName">{{ nickname }}</div>
        </van-col>
      </van-row>
    </div>
    <!--    用户的头象end-->
    <!--    用户的信息-->
    <van-cell-group inset>
      <van-grid>
        <van-grid-item class="userInfo" text="余额">
          <van-row>
            <van-col span="24">{{ nowMoney }}</van-col>
          </van-row>
          <van-row>
            <van-col span="24">余额</van-col>
          </van-row>
        </van-grid-item>
        <van-grid-item class="userInfo" text="优惠券">
          <van-row>
            <van-col span="24">0</van-col>
          </van-row>
          <van-row>
            <van-col span="24">优惠券</van-col>
          </van-row>
        </van-grid-item>
        <van-grid-item class="userInfo" text="购买数">
          <van-row>
            <van-col span="24">{{ payCount }}</van-col>
          </van-row>
          <van-row>
            <van-col span="24">购买数</van-col>
          </van-row>
        </van-grid-item>
        <van-grid-item class="userInfo" text="积分">
          <van-row>
            <van-col span="24">{{ integral }}</van-col>
          </van-row>
          <van-row>
            <van-col span="24">积分</van-col>
          </van-row>
        </van-grid-item>
      </van-grid>
    </van-cell-group>
    <!--    用户的信息end-->
    <!--    订单状态-->
    <van-cell-group id="OrderStatus" inset>
      <van-grid :column-num="5">
        <van-grid-item icon="shop-o" text="未支付" to="/orderType"/>
        <van-grid-item icon="logistics" text="待发货"/>
        <van-grid-item icon="goods-collect-o" text="待收货"/>
        <van-grid-item icon="cart-o" text="待评价"/>
        <van-grid-item icon="cart-o" text="已完成"/>
      </van-grid>
    </van-cell-group>
    <!--    订单状态end-->
    <!--    功能区-->
    <van-cell-group inset>
      <van-cell icon="location" is-link title="地址管理" to="/contactList"/>
      <van-cell icon="paid" is-link title="我的钱包" to="/wallet"/>
      <van-cell icon="goods-collect" is-link title="我的收藏" to="/collect"/>
      <van-cell icon="underway" is-link title="我的足迹" @click="gofootprint"/>
      <van-cell icon="setting" is-link title="修改密码" to="/rpwd"/>
    </van-cell-group>
    <!--    功能区end-->
    <van-button size="large" style="margin-top: 15px" type="danger" @click="logout">退出登录</van-button>
  </div>
</template>

<script>
export default {
  name: "mine",
  data() {
    return {
      nickname: '',//用户昵称
      nowMoney: 0,//用户余额
      payCount: 0,//用户购买次数
      integral: 0,//用户剩余积分
    };
  },
  methods: {
    gofootprint() {
      this.$router.push({
        name: 'collect',
        params: {
          titl: '我的足迹'
        }
      });
    },
    logout() {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('userInfo')
      this.$toast.success('退出成功')
      this.$router.push('/home')
    }
  },
  created() {
    let user = JSON.parse(window.localStorage.getItem('userInfo'))
    //console.log(user)
    this.nickname = user.nickname
    this.nowMoney = user.nowMoney
    this.payCount = user.payCount
    this.integral = user.integral
  }
}
</script>

<style lang="less" scoped>
#mine {
  #setup {
    .van-icon {
      display: block;
      padding-top: 8px;
      padding-right: 15px;
      text-align: end;
    }
  }

  .userInfo {
    & > div > div:nth-child(1) {
      font-size: 14px;
      font-weight: bolder;
      color: red;
    }

    & > div > div:nth-child(2) {
      margin-top: 10px;
      font-size: 12px;
    }
  }

  .van-cell-group {
    margin: 0 8px;
    margin-top: 10px;
  }

  #OrderStatus {
  }
}

#setup {
  height: 45px;
}

#avatar {
  .van-image {
    margin-left: 15px;
  }
}

#userName {
  line-height: 100px;
}
</style>
