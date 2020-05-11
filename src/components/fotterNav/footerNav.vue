<template>
  <div class="navContainer">
    <van-tabbar class="tabBar" active-color='red' route>
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
    width 100%
    height 100px
    position relative
    
    .tabBar
      display flex
      width 100%
      height 100px !important
      line-height 40px
      position absolute
      left 0
      top -100px
      background #fff
      &:after
          content '',
          font-size 40px
      .iconfont
        flex 1
        margin-left 40px !important
    .van-tabbar-item--active
      a
        color red
</style>