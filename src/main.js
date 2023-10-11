import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import axios from 'axios'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import Login from './components/Login'
import Home from './components/Home'
import OperateCenter from './components/OperateCenter'
import InfoCenter from './components/InfoCenter'
import Error from './components/Error'

Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.prototype.$http = axios

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/operation-center',
    component: OperateCenter
  },
  {
    path: '/info-center',
    component: InfoCenter
  },
  {
    path: '*',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'hash',
  routes
})

router.beforeEach((to, from, next) => {
  let logined = localStorage.getItem('token');
  if (to.path == '/login') { //访问login页面
    if (!logined) {
      next(); //没有登录就正常访问login页面
    } else {
      next('/home'); //登录了就跳转到Home页面
    }
  } else { //访问的不是login页面
    if (!logined) {
      next('/login'); //没有登录就跳转到login页面
    } else {
      next(); //登陆了就正常访问
    }
  }
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
