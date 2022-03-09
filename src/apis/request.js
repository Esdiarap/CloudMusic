import axios from 'axios'

const instance = axios.create({
    // 需要先启动网易云的NodeJS APi. 使用方法为：进入Netease文件夹, node app.js
    baseURL: 'http://localhost:3000/',
    changeOrigin:true
});

// 请求拦截器
axios.interceptors.request.use(function (config) {
    store.isLoading = true
    return config;
}, function (error) {
    return Promise.reject(error);
});

// 响应拦截器
axios.interceptors.response.use(function (response) {
    store.isLoading = false;
    return response;
}, function (error) {
    return Promise.reject(error);
});

export default instance;
