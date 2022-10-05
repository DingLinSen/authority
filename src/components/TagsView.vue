<template>
  <el-tabs v-model="editableTabsValue" type="card" closable @edit="handleTabsEdit" @tab-click="handleTabClick">
    <el-tab-pane :key="item.name" v-for="item in editableTabs" :label="item.title" :name="item.name">
      {{ item.content }}
    </el-tab-pane>
  </el-tabs>
</template>
<script>
export default {
  name: 'TagsView',
  data() {
    return {}
  },
  computed: {
    editableTabsValue: {
      get() {
        return this.$store.getters.editableTabsValue
      },
      set(val) {
        this.$store.commit('Tags/setEditValue', val)
      },
    },
    editableTabs: {
      get() {
        return this.$store.getters.editableTabs
      },
      set(val) {
        this.$store.commit('Tags/closeTags', val)
      },
    },
  },
  methods: {
    // tab 被选中时触发
    handleTabClick() {
      this.$router.push({ name: this.editableTabsValue })
    },
    // 点击 tabs 的新增按钮或 tab 被关闭后触发
    handleTabsEdit(targetName, action) {
      // 不删除首页
      if (targetName === 'home') return
      if (action === 'remove') {
        let tabs = this.editableTabs
        let activeName = this.editableTabsValue
        if (activeName === targetName) {
          tabs.forEach((tab, index) => {
            if (tab.name === targetName) {
              let nextTab = tabs[index + 1] || tabs[index - 1]
              if (nextTab) {
                activeName = nextTab.name
              }
            }
          })
        }
        this.editableTabsValue = activeName
        this.editableTabs = tabs.filter((tab) => tab.name !== targetName)
        console.log('activeName', activeName)
        this.$store.commit('Tags/setEditValue', activeName)
        this.$router.push({ name: activeName })
      }
    },
  },
}
</script>
<style lang="scss" scoped>
.el-tabs.el-tabs--card.el-tabs--top {
  width: 100%;
}
</style>
