import loginApi from '../../api/login'
export default {
  namespaced: true,
  state: {
    isCollapse: false,
    menuList: [],
    routerList: [],
    authList: [],
  },
  mutations: {
    setCollapse(state) {
      state.isCollapse = !state.isCollapse
    },
    getMenuList(state, menuList) {
      console.log(menuList)
      state.menuList = menuList
    },
    getRouterList(state, routerList) {
      state.routerList = routerList
    },
    getAuthList(state, authList) {
      state.authList = authList
    },
  },
  actions: {
    async getMenuList({ commit, dispatch }) {
      try {
        const response = await loginApi.getPermissionList()
        // console.log(response)
        commit('getMenuList', response.data.menuList)
        commit('getRouterList', response.data.routerList)
        commit('getAuthList', response.data.authList)
        const routerArray = await dispatch('dynamicRouter')
        return { response, routerArray }
      } catch (error) {
        console.log(error.message)
      }
    },
    // 动态添加路由
    dynamicRouter({ state }) {
      const routerList = state.routerList
      const routerArray = []
      routerList.forEach((item) => {
        if (item.path === '/document') {
          item.name = item.path.replace('/', '')
        }
        const obj = {
          path: item.path,
          name: item.name,
          component: (resolve) => require([`@/views${item.url}.vue`], resolve),
          meta: {
            title: item.label,
          },
        }
        routerArray.push(obj)
      })
      return routerArray
    },
  },
}
