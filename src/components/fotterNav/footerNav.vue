<template>
  <div class="navContainer">
    <van-tabbar active-color='red' route>
      <van-tabbar-item class="iconfont icon-caidan06" replace to='/Index'>
        <!-- <router-link>首页</router-link> -->
        首页
        </van-tabbar-item>
      <van-tabbar-item class="iconfont icon-shangpinfenlei"  replace to='/Category'>
        <!-- <router-link>分类</router-link> -->
        分类
      </van-tabbar-item>
      <van-tabbar-item class="iconfont icon-zu" replace to='/Buy'>
        <!-- <router-link >值得买</router-link> -->
        值得买
      </van-tabbar-item>
      <van-tabbar-item class="iconfont icon-gouwuche1" replace to='/Cart'>
        <!-- <router-link >购物车</router-link> -->
        购物车
      </van-tabbar-item>
      <van-tabbar-item class="iconfont icon-geren10" replace to='/Login'>
        <!-- <router-link >个人</router-link> -->
        个人
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {Tabbar,TabbarItem} from 'vant'
import router from 'router'
export default {
  name:'footerNav',
  // data(){
  //   return{
  //     // index:0
  //   }
  // },
  methods:{
    goTo(path){
      console.log(router)
      router.replace(path)
    }
  },
  components:{
    [Tabbar.name]:Tabbar,
    [TabbarItem.name]:TabbarItem
  }
}
</script>

<style lang='stylus'>
  .navContainer
    display flex
    bottom 0
    left 0
    // .tabBar
    //   width 100%
    //   height 90px
    //   line-height 90px
    //   text-align center
    //   background #fff
    //   display flex
     
    //   .item
    //     flex 1
    //     font-size 30px
    .van-tabbar-item--active
      a
        color red
</style>