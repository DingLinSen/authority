import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login'

// 解决重复点击路由出现的错误
const VueRouterPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(to) {
  return VueRouterPush.call(this, to).catch((err) => err)
}

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/',
    name: 'layout',
    redirect: '/home',
    component: () => import('../layout'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('../views/home'),
      },
      {
        path: 'departmentList',
        name: 'departmentList',
        component: () => import('../views/system/DepartmentList.vue'),
        meta: {
          title: '机构管理',
        },
      },
      {
        path: 'userList',
        name: 'userList',
        component: () => import('../views/system/userList.vue'),
        meta: {
          title: '用户管理',
        },
      },
      {
        path: 'roleList',
        name: 'roleList',
        component: () => import('../views/system/RoleList.vue'),
        meta: {
          title: '角色管理',
        },
      },
      {
        path: 'menuList',
        name: 'menuList',
        component: () => import('../views/system/MenuList.vue'),
        meta: {
          title: '权限管理',
        },
      },
      {
        path: 'goodCategory',
        name: 'goodCategory',
        component: () => import('../views/goods/goodCategory.vue'),
        meta: {
          title: '分类管理',
        },
      },
      {
        path: 'goodsBrand',
        name: 'goodsBrand',
        component: () => import('../views/goods/goodsBrand.vue'),
        meta: {
          title: '品牌管理',
        },
      },
      {
        path: 'systemCode',
        name: 'systemCode',
        component: () => import('../views/systenConfig/systemCode.vue'),
        meta: {
          title: '日志管理',
        },
      },
      {
        path: 'document',
        name: 'document',
        component: () => import('../views/systenConfig/document.vue'),
        meta: {
          title: '接口文档',
        },
      },
    ],
  },
]

const router = new VueRouter({
  routes,
})

export default router
