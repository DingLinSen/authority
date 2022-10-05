const TOKEN_KEY = 'token'
const USER_INFO_KEY = 'username'

// 存储token
export const setToken = (token) => {
  localStorage.setItem(TOKEN_KEY, token)
}

// 获取token
export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY)
}

// 存储userInfo
export const setUserInfo = (userInfo) => {
  localStorage.setItem(USER_INFO_KEY, JSON.stringify(userInfo))
}

// 获取userInfo
export const getUserInfo = () => {
  return JSON.parse(localStorage.getItem(USER_INFO_KEY) || '{}')
}

// 删除本地存储的token和userInfo
export const removeTokenAndUserInfo = () => {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(USER_INFO_KEY)
}
