import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

Vue.config.productionTip = false

// 引入element-ui
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// 解决element-ui侧边栏文字不消失的问题
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)


// 引入reset.css文件
import './style/reset.css'

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
