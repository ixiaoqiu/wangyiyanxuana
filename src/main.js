import Vue from 'vue'
import App from './App.vue'
import 'lib-flexible'
import router from "@/router"
import myAxios from '@/ajax'
import store from '@/store'

Vue.config.productionTip = false
Vue.prototype.$http = myAxios

//1.将vur-router定义成插件
//2.定义路由组件
//3.定义路由
//4.定义路由器
//5.将路由器挂载给根实例
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
