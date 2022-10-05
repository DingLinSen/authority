// 引入axios实例
import request from '../utils/request'

// 登录接口
const login = (data) => {
  return request({
    url: '/api/user/login',
    method: 'POST',
    data,
  })
}

// 获取验证码
const code = () => {
  return request({
    url: '/api/sysUser/image',
    method: 'POST',
    responseType: 'blob',
  })
}

// 获取用户信息
const getUser = (token) => {
  return request({
    url: `/api/sysUser/getInfo/${token}`,
    method: 'GET',
  })
}

// 获取菜单列表
const getPermissionList = () => {
  return request({
    url: '/api/sysUser/getPermissionList',
    method: 'GET',
  })
}

export { login, code, getUser, getPermissionList }
