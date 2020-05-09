<template>
  <div class="SearchContainer">
    <div class="SearchWrap">
      <div class="SearchContent">
        <form class="Search">
        <i class="iconfont icon-sousuo"></i>
        <input type="text" placeholder="好货内部价">
      </form>
        <div class="right">
          <span style="font-size:13px;">取消</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'search'
}
</script>

<style lang='stylus'>
  .SearchContainer
    width 100%
    height calc(100vh - 100px)
    background #eee
    .SearchWrap
      width 100%
      height 525px
      background #fff
      // display flex
      // justify-content space-between
      .SearchContent
        width 580px
        height 50px
        background #eee
        padding-right 20px
        border-radius 5px
        margin 0 20px
        .Search  
          position relative
          i
            font-size 30px
            color #666
            line-height 50px
            margin-left 40px
            margin-right 20px
          input 
            border none 
            background #eeeeee
            font-size 30px
            outline-style none
        .right
          // margin 10px 10px
          float right 
          position absolute
          top 24px
          right 36px
        
          


</style>