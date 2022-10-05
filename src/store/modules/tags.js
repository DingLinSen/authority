export default {
  namespaced: true,
  state: {
    tabs: [],
    // 设置默认选中的tab
    editableTabsValue: 'home',
    // tab数据源
    editableTabs: [
      {
        title: '首页',
        name: 'home',
      },
    ],
  },
  mutations: {
    addTags(state, data) {
      const index = state.editableTabs.findIndex((item) => item.name === data.name)
      if (index === -1) {
        state.editableTabs.push(data)
      }
      state.editableTabsValue = data.name

      // 将tags数据存储到本地
      sessionStorage.setItem('tags', JSON.stringify(state.editableTabs))
    },
    getTags(state) {
      const tags = sessionStorage.getItem('tags')
      if (tags) {
        state.editableTabs = JSON.parse(tags)
      }
    },
    setEditValue(state, val) {
      // console.log(val);
      state.editableTabsValue = val
    },
    closeTags(state, data) {
      state.editableTabs = data
    },
  },
  actions: {},
}
