<template>
  <div class="CarContainer">
    <div class="CartWrap">
      <!-- 头部 -->
      <div class="header">
        <span class="text">购物车</span>
        <div class="right">
          <span class="text">领券</span>
        </div>
      </div>
      <!-- 三个时间 -->
      <div class="timeWrap">
        <ul class="time">
          <li class="timeItem">30天无忧退货</li>
          <li class="timeItem">48小时快速退款</li>
          <li class="timeItem">满99元免邮费</li>
        </ul>
      </div>
    </div>
    <!-- 内容 -->
    <div class="contentContainer">
      <div class="content">
        <img class="image" src="http://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" alt="">
        <div class="login">
          <router-link to="/Login" class="text">登录</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang='stylus'>
  // body,html
  //   overflow hidden
  //   overflow-y hidden
  .CarContainer
    width 100%
    height 100%
    .CartWrap
      .header
        height  88px
        line-height 88px
        .text
          font-size 42px
          color #333
          
        .right
          float right 
          margin-right 20px
          .text
            color #DD1A21
            font-size 32px
      .timeWrap
        width 100%
        height 70px
        background #eee
        line-height 70px
        padding 0 40px
        ul,li
          padding 0
          margin 0
          list-style none
        .time
          display flex
          justify-content space-between
          .timeItem
            color #666
    .contentContainer
      width 100%
      height calc(100vh - 158px)
      background #f4f4f4
      .content
        .image
          width 248px
          height 248x
          margin 280px 220px 80px
        .login
          width 500px
          height 92px
          background #DD1A21
          border-radius 10px
          margin auto
          text-align center
          .text
            color #ffffff
            font-size 30px
            line-height 92px
            
            
        
          
          
      
        
</style>