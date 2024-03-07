import axios from "axios";

import { TIMEOUT, BASE_URL } from './config';

//创建axios实例
const service = axios.create({
    timeout: TIMEOUT,
    baseURL: BASE_URL,
})

//请求拦截器
service.interceptors.request.use(config => {
    return config//返回配置对象
}, error => {
    // 对请求错误做些什么
    return Promise.reject(error)
})

//响应拦截器
service.interceptors.response.use(response => {
    // 对响应数据做点什么
    return Promise.resolve(response.data)
}, error => {
    // 对响应错误做点什么
    return Promise.reject(error)
})

//封装get请求
const get = (url, params = {}) => {
    return new Promise((resolve, reject) => {
        service.get(url, { params })
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

//封装post请求
const post = (url, data) => {
    return new Promise((resolve, reject) => {
        service.post(url, data)
            .then(res => {
                resolve(res)
            })
            .catch(err => {
                reject(err)
            })
    })
}

export {
    get,
    post
}