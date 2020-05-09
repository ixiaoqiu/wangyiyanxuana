<template>
  <div id="app">
    <!-- 渲染一级路由 -->
     <router-view></router-view>
     <footerNav></footerNav>
  </div>
</template>

<script>

import footerNav from "../src/components/fotterNav/footerNav"
export default {
  name: 'App',
  components:{
    footerNav:footerNav
  }
}
</script>

<style lang='stylus'>
@import url('//at.alicdn.com/t/font_1804715_bofh7m496eb.css')
  #app
    width 100%
    height 100%

</style>
