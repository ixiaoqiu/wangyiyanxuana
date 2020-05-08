<template>
  <div class="navContainer">
    <van-tabbar active-color='red' class="tabBar">
      <van-tabbar-item icon="home-o" class="item">
        <i class="icon"></i>
        <router-link to='/Index'>首页</router-link>
        </van-tabbar-item>
      <van-tabbar-item icon="apps-o" class="item">
        <router-link to='/Category'>分类</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="fire-o" class="item">
        <router-link to='/Buy'>值得买</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="cart-o" class="item">
        <router-link to='/Cart'>购物车</router-link>
      </van-tabbar-item>
      <van-tabbar-item icon="user-o" class="item">
        <router-link to='/Login'>个人</router-link>
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import {Tabbar,TabbarItem} from 'vant'
export default {
  name:'footerNav',
  data(){
    return{
      index:0
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
    .tabBar
      width 100%
      height 90px
      line-height 90px
      text-align center
      background #fff
      display flex
     
      .item
        flex 1
        font-size 30px
    .van-tabbar-item--active
      a
        color red
</style>