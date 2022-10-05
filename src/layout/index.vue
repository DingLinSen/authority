<template>
  <el-container>
    <el-header>
      <app-header></app-header>
    </el-header>
    <el-container>
      <el-aside width="auto">
        <app-aside></app-aside>
      </el-aside>
      <el-container>
        <el-main>
          <app-main></app-main>
        </el-main>
        <el-footer>
          <app-footer></app-footer>
        </el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>
<script>
export default {
  components: {
    AppHeader: () => import('./AppHeader'),
    AppMain: () => import('./AppMain'),
    AppAside: () => import('./AppAside'),
    AppFooter: () => import('./AppFooter'),
  },
  data() {
    return {}
  },
  methods: {},
  created() {},
}
</script>
<style scoped>
.el-container {
  height: 100%;
}

.el-header {
  background-color: #167bd8;
}

.el-aside {
  background-color: #fff;
  height: 100%;
  border-right: 1px solid rgb(230, 230, 230);
}

.el-main {
  background-color: #fff;
  padding: 0;
}

.el-footer {
  background-color: #fff;
  height: 50px;
  border-top: 1px solid rgb(230, 230, 230);
  font-size: 14px;
}

/* .el-container {
  height: 100%;
}
.el-header {
  height: 60px;
  background-color: rgb(22, 123, 216);
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.el-aside {
  background-color: #d3dce6;
  height: 100%;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
}
.title {
  font-size: 20px;
}
.user {
  width: 50px;
  height: 50px;
  border-radius: 50%;
}
.header-right {
  display: flex;
}
.user-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 10px;
}
.username {
  font-weight: 600;
}
.time {
  margin-top: 5px;
} */
</style>
