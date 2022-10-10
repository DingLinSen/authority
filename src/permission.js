// 引入router
import router from './router'
// 引入本地存储
import { getToken, removeToken } from './utils/auth'

import store from './store'

// 自定义白名单
const whileList = ['/404', '/401', '/login']
router.beforeEach(async (to, from, next) => {
  // 获取token
  const token = getToken()
  if (token) {
    // 有token的情况,如果要去登录页,则返回跳转前的页面
    if (to.path === '/login') {
      next(from.path)
    } else {
      // 如果不是去登录页,判断有没有菜单的数据
      const menuList = store.getters.menuList
      // 如果有菜单的数据,跳转到要去的页面
      if (menuList && menuList.length > 0) {
        next()
      } else {
        try {
          // 如果没有菜单的数据就获取菜单的数据
          const { response, routerArray } = await store.dispatch('Menu/getMenuList')
          // 获取到了跳转
          if (response) {
            routerArray.forEach((item) => {
              router.addRoute('layout', item)
            })
            router.addRoute({
              path: '*',
              redirect: '/404',
            })
            next({ path: to.path })
          } else {
            // 获取不到菜单数据,删除token并跳转到登录页
            removeToken()
            next('/login')
          }
        } catch (error) {
          console.log(error.message)
          removeToken()
          next('/login')
        }
      }
    }
  } else {
    // 如果没有token,判断跳转的是不是白名单,如果是就跳转,不是就跳转到登录页
    if (whileList.indexOf(to.path) !== -1) {
      next()
    } else {
      next('/login')
    }
  }
})
