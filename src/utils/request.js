// 引入axios
import axios from 'axios'

import { Message } from 'element-ui'

import { getToken } from './auth'

// 自定义异常提示信息
const exceptionMessage = {
  // 500: '登录失败',
}

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API,
  timeout: 1000,
})

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    const token = getToken()
    if (token) config.headers.token = token
    // 在请求发送之前做一些事情
    return config
  },
  function (error) {
    // 做一些请求错误的事情
    return Promise.reject(error)
  }
)

// 添加响应拦截器
service.interceptors.response.use(
  function (response) {
    // console.log(response);
    if (response.status === 200) {
      if (response.data.code === 200 || response.config.responseType === 'blob') {
        return response.data
      }
      if (response.data.code === 600) {
        // token过期处理
        return
      }
      _showErrorMessage(response.data.code, response.data.msg)
    }
  },
  function (error) {
    // 对响应错误执行操作
    return Promise.reject(error)
  }
)

const _showErrorMessage = (code, msg) => {
  const message = exceptionMessage[code] || msg || '未知错误'
  Message({ message, type: 'error' })
}

// 不同请求方式使用data传参
const request = (options) => {
  options.method = options.method || 'get'
  if (options.method.toLowerCase === 'get') {
    options.params = options.data || options.params
    delete options.data
  }

  return service(options)
}

export default request
