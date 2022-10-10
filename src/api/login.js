import request from '../utils/request'
import qs from 'qs'
// 获取登录接口
const login = (data) => {
  return request({
    url: '/user/login',
    method: 'POST',
    data: qs.stringify(data),
  })
}

// 获取验证码
const code = () => {
  return request({
    url: '/sysUser/image',
    method: 'POST',
    responseType: 'blob',
  })
}

// 获取权限列表接口
const getPermissionList = () => {
  return request({
    url: '/sysUser/getPermissionList',
    method: 'GET',
  })
}

// 导出
export default {
  login,
  code,
  getPermissionList,
}
