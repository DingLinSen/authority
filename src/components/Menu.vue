<template>
  <el-menu
    :default-active="$route.path"
    :collapse="isCollapse"
    class="el-menu-vertical-demo"
    background-color="#ffffff"
    text-color="#000"
    active-text-color="#409eff"
    router
    unique-opened
  >
    <menu-item :menu="menuList"></menu-item>
  </el-menu>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'Menu',
  components: {
    MenuItem: () => import('./MenuItem.vue'),
  },
  computed: {
    ...mapGetters(['isCollapse', 'menuList']),
  },
  props: {
    menu: {
      type: Array,
      default: () => [],
    },
  },
  watch: {
    $route: {
      handler(menu) {
        // console.log(menu);
        const obj = {
          title: menu.meta.title,
          name: menu.name,
          path: menu.path,
        }
        this.$store.commit('Tags/addTags',obj)
      },
      // 深度监听
      deep: true,
      // 进入页面监听
      immediate: true,
    },
  },
}
</script>
<style lang="scss" scoped>
.el-menu {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
}
</style>
