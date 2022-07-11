import Vue from 'vue'
import Router from 'vue-router'
import Home from "../views/Home";
import test1 from "../views/test/test1";
import test2 from "../views/test/test2";
import home from "../views/home/home";
import mine from "../views/home/mine";
import business from "../views/test/business";
import Login from "../views/login/Login";
import Register from "../views/login/Register";
import search from "../views/search/search";
import productDetails from "../views/commodity/productDetails";
import categories from "../views/home/categories";
import productList from "../views/commodity/productList";
import shopCart from "../views/home/shopCart";
import contactList from "../views/contactList/contactList";
import operateContactList from "../views/contactList/operateContactList";
import wallet from "../views/user/wallet";
import rpwd from "../views/user/rpwd";
import collect from "../views/user/collect";
import orderType from "../views/order/orderType";
import order from "../views/order/order";
import creationOrder from "../views/order/creationOrder";
import paySuccess from "../views/order/paySuccess";

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      children: [
        {
          path: '/home',
          name: 'home',
          component: home
        }, {
          path: '/mine',
          name: 'mine',
          component: mine
        }, {
          path: '/categories',
          name: 'categories',
          component: categories
        }, {
          path: '/productList',
          name: 'productList',
          component: productList
        }, {
          path: '/wallet',
          name: 'wallet',
          component: wallet
        }, {
          path: '/orderType',
          name: 'orderType',
          component: orderType
        }, {
          path: '/test1',
          name: 'test1',
          component: test1
        }, {
          path: '/test2',
          name: 'test2',
          component: test2
        }
      ]
    }, {
      path: '/login',
      name: 'Login',
      component: Login
    }, {
      path: '/register',
      name: 'Register',
      component: Register
    }, {
      path: '/search',
      name: 'search',
      component: search
    }, {
      path: '/shopCart',
      name: 'shopCart',
      component: shopCart
    }, {
      path: '/contactList',
      name: 'contactList',
      component: contactList
    }, {
      path: '/operateContactList',
      name: 'operateContactList',
      component: operateContactList
    }, {
      path: '/rpwd',
      name: 'rpwd',
      component: rpwd
    }, {
      path: '/collect',
      name: 'collect',
      component: collect
    }, {
      path: '/order',
      name: 'order',
      component: order
    }, {
      path: '/creationOrder',
      name: 'creationOrder',
      component: creationOrder
    }, {
      path: '/paySuccess',
      name: 'paySuccess',
      component: paySuccess
    },

    // 没用的组件
    {
      path: '/productDetails',
      name: 'productDetails',
      component: productDetails
    }, {
      path: '/business',
      name: 'business',
      component: business
    }

  ]
})
