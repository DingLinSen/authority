// 引入js-cookie
import Cookies from "js-cookie"


const TOKEN_KEY = 'token'

// 存储token
export const setToken = (token) => {
  Cookies.set(TOKEN_KEY, token)
}

// 获取token
export const getToken = () => {
  return Cookies.get(TOKEN_KEY)
}

// 删除本地存储的token
export const removeToken = () => {
  Cookies.remove(TOKEN_KEY)
}
