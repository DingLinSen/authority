import loginApi from '../../api/login'
import { setToken, getToken } from '../../utils/auth'
export default {
  namespaced: true,
  state: {
    token: getToken() || '',
  },
  mutations: {
    SET_TOKEN(state, token) {
      state.token = token
      setToken(token)
    },
  },
  actions: {
    async login({ commit }, ruleForm) {
      try {
        const response = await loginApi.login(ruleForm)
        commit('SET_TOKEN', response.token)
        return response
      } catch (e) {
        console.log(e.message);
      }
    },
  },
}
