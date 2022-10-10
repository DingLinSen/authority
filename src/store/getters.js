export default {
  isCollapse: (state) => state.Menu.isCollapse,
  menuList: (state) => state.Menu.menuList,
  editableTabs: (state) => state.Tags.editableTabs,
  editableTabsValue: (state) => state.Tags.editableTabsValue,
  tags: (state) => state.Tags.tags,
  token: (state) => state.User.token,
}
