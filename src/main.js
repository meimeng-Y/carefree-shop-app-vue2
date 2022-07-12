// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
import {Lazyload} from 'vant';

/*解决路由跳转爆错的问题*/
// 引入路由模块
import VueRouter from 'vue-router'
// 重写push方法
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error => error)
}
// 挂载路由模块
Vue.use(VueRouter)
/*解决路由跳转爆错的问题end*/

//懒加载
Vue.use(Lazyload);
Vue.config.productionTip = false
Vue.use(Vant);


/*进入路由之前*/
router.beforeEach((to, from, next) => {
  let islogin = window.localStorage.getItem('userInfo')
  //console.log('islogin', islogin)
  if (to.path == '/mine') {
    if (islogin != null) {
      next()
    } else {
      next("/login")
    }
  }
  next()
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
