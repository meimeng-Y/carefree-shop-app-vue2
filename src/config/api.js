/**
 * api接口统一管理
 */
import {get, post} from './axios';

/**
 *
 * @param {string} params
 * 我们定义了一个topics方法
 * 这个方法有一个参数params
 * params是我们请求接口时携带的参数对象
 * 而后调用了我们封装的post方法
 * post方法的第一个参数是我们的接口地址
 * 第二个参数是topics的params参数
 * 即请求接口时携带的参数对象
 * 最后通过export导出topics。
 */
//图片主机地址
export const IMG_URL = 'http://127.0.0.1/img';

// 注册
export const register = params => post('/register', params);

// 登录
export const login = params => post('/login', params);

// 首页轮播
export const getBanner = params => get('/index/banner', params);

//首页菜单
export const getMenus = params => get('/index/menus', params);

//首页精品推荐
export const getBoutiqueList = params => get('/index/boutiqueList', params);

//首页猜你喜欢
export const getLike = params => get('/index/like', params);

//获取首页搜索热门搜索关键字
export const getKeyword = params => get('/index/keyword', params);
