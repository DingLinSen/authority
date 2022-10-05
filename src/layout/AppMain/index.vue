<template>
  <div class="container">
    <div class="main-tab">
      <menu-icon></menu-icon>
      <tags-view></tags-view>
    </div>
    <div class="main-view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
export default {
  components: {
    MenuIcon: () => import('../../components/MenuIcon.vue'),
    TagsView: () => import('../../components/TagsView.vue'),
  },
}
</script>
<style lang="scss" scoped>
.container {
  height: 100%;
}
.main-tab {
  display: flex;
  height: 41px;
}
</style>
