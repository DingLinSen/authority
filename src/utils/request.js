// 引入axios
import axios from 'axios'

// 创建axios实例
const service = axios.create({
  baseURL: 'http://119.45.133.128:8089',
  timeout: 1000,
})

// 引入store
import store from '../store'

// 添加请求拦截器
service.interceptors.request.use(
  function (config) {
    const token = store.getters.token
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
    if (response.status === 200) {
      if (response.data.data) {
        return response.data.data
      } else {
        return response.data.msg
      }
    }
    // 对响应数据执行操作
    return response
  },
  function (error) {
    // 对响应错误执行操作
    return Promise.reject(error)
  }
)

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
