//路由器

import Vue from 'vue';
import VueRouter from 'vue-router'

Vue.use(VueRouter)
import routes from '@/routes'

//定义路由器
export default new VueRouter({
  routes,
  mode:"history"
})