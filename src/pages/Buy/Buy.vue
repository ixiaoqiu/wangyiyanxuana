<template>
  <div class="BuyContainer">
    <ele-Header>
      <template>
        	<span class="txt">值得买</span>
      </template>
    </ele-Header>
    <div class="BannerContainer">
      <div class="bannerWrap">
        <img class="image" src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
        <div class="txt">严选好物 用心生活</div>
        <img class="logo" src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
      </div>
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(item,index) in buyNavList" :key="index">
            <img :src="item.picUrl" alt="">
            <div class="title">{{item.mainTitle}}</div>
            <div class="txt">{{item.viceTitle}}</div>
          </div>
        </div>
   
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  data(){
    return{
      buyNavList:[],
      buyDatas:[]
    }
  },
  components:{
    'ele-Header':Header
  },
  async mounted(){
    let navData = await this.$http.buy.getBuyNavData()
    let data = await this.$http.buy.getBuyData()
    console.log(navData)
    this.buyNavList = navData.navList
    
  },
  watch:{
    buyNavList(){
      this.$nextTick(()=>{
      new Swiper('swiper-container',{
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 30,
        
      })
    })
    }
  }
}

</script>

<style lang='stylus'>
  .BuyContainer
    width 100%
    height 100%
    .txt
      font-size 36px
    .BannerContainer
      width 100%
      height 680px
      background pink
      position relative
      .image
        width 155px
        height 90px
        position absolute
        left 10px
        top 60px
        
      .txt
        position absolute
        left 170px
        top 90px
        color #ffffff
        font-size 30px
        
      .logo
        width 100%
        height 420px
      .swiper-container
        width 680px
        height 510px
        background #fff
        position absolute
        top 180px
        left 0
        right 0
        bottom 0
        margin auto
        border-radius 10px
        .swiper-wrapper
          display flex
          align-content stretch
          .swiper-slide
            width 120px !important
            height 105px
            display flex
            flex-direction column
            justify-content space-evenly
            align-items center
            margin-top 60px !important
            margin-right 60px !important
            position relative
            img 
              width 120px
              height 120px
              margin-right -86px
            .title
              white-space nowrap
              font-size 24px
              font-weight bold
              margin-right -86px
              margin-top 10px
            .txt
              font-size 20px
              white-space nowrap
              position absolute
              left 65px
              top 140px
              color #666
</style>