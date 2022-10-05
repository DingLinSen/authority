import Vue from 'vue'
import Vuex from 'vuex'
import Menu from './modules/menu'
import Tags from './modules/tags'
import getter from './getter'
import { login, getUser } from '../api/user'
import { setToken, getToken, setUserInfo, getUserInfo } from '../utils/auth'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: getToken() || '',
    // userInfo: getUserInfo() || '',
  },
  getters: {
    token(state) {
      return state.token
    },
    ...getter,
  },

  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setToken(token)
    },
    // SET_USERINFO(state, userinfo) {
    //   state.userInfo = userinfo
    //   setUserInfo(userinfo)
    // },
  },
  actions: {
    async login({ commit }, ruleForm) {
      try {
        const response = await login(`username=${ruleForm.username}&password=${ruleForm.password}&code=${ruleForm.code}`)
        commit('SET_TOKEN', response.data.token)
        return response.data.token
      } catch (error) {
        console.log(error.message)
      }
    },
    // async handleUserInfo({ commit }) {
    //   const userinfo = await getUser()
    // commit('SET_USERINFO', userinfo)
    // return userinfo
    // },
  },
  modules: {
    Menu,
    Tags,
  },
})
