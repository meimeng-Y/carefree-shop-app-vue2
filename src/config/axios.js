import axios from "axios";
//引入


//请求根路径 mock路径
axios.defaults.baseURL = 'http://127.0.0.1:4523/m1/1179224-0-default'
// axios.defaults.baseURL = 'http://127.0.0.1'
axios.defaults.headers.post['Content-Type'] = 'application/json; charset=utf-8';

// 请求拦截
axios.interceptors.request.use(config => {
    //拦截所有请求，添加登陆用户的token
    if (window.sessionStorage.getItem('token')) {
        config.headers.Authorization = window.sessionStorage.getItem('token');
    }
    return config
})


// 响应拦截
//后台用户登陆信息校验不成功就跳转到登录页面
axios.interceptors.response.use(response => {
    // console.log("返回的response")
    // console.log(response.data)
    if (response.data.code == 402) {
        // console.log("返回的402")
        return null
    } else if (response.data.code == 406) {

        return null
    } else if (response.data.code == 404) {

        return null
    }
    return response
// eslint-disable-next-line no-unused-vars
}, error => {
    console.log("返回的错误响应")
})

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios.post(url, params)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.data)
        })
    });
}

