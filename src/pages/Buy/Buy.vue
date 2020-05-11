<template>
  <div class="buyContainer">
      <ele-Header>
        <template>
          <span class="txt">值得买</span>
        </template>
      </ele-Header>
      <!-- 内容区 -->
      <div class="contentContainer" ref="wrap">
        <div ref="content">
          <div class="ListBannerContainer">
            <div class="title">
              <img class="logo" src="https://m.you.163.com/topic/index/img/topic_logo.c2284970.png" alt="">
              <div class="text">严选好物 用心生活</div>
              <img class="bg" src="https://m.you.163.com/topic/index/img/topic_title_bg.2373a140.png" alt="">
            </div>
            <!-- 导航区 -->
            <div class="swiper-container">
              <div class="swiper-wrapper">
                <div class="swiper-slide" v-for="(item,index) in buyNavDatas" :key="index">
                  <img :src="item.picUrl" alt="">
                  <div class="title">{{item.mainTitle}}</div>
                  <div class="desc">{{item.viceTitle}}</div>
                </div> 
              </div>
              <div class="swiper-pagination"></div>
            </div>
          </div>
          <!-- 下边 -->
          <div class="shopList">
            <div class="left">
              <ShopItem v-for="(item,index) in evenBuyDatas" :key="index" :shopItem='item'></ShopItem>
            </div>
            <div class="rigth">
              <ShopItem v-for="(item,index) in oddBuyDatas" :key="index" :shopItem='item'></ShopItem>
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
import Header from '../../components/Header/Header'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import BScroll from 'better-scroll'
import ShopItem from '../../components/ShopItem/ShopItem'
export default {
  data(){
    return{
      buyNavDatas:[],
      evenBuyDatas:[],
      oddBuyDatas:[],
      page:1
    }
  },
  components:{
    'ele-Header':Header,
    'ShopItem':ShopItem
  },
  async mounted(){
    //导航数据
    let navData = await this.$http.buy.getBuyNavData()
   //console.log(navData)
   this.buyNavDatas = navData.navList


   //首页数据
   let data = await this.$http.buy. getBuyData()
   console.log(data)
   data.forEach((item,index)=>{
     if(index % 2 === 0) this.evenBuyDatas.push(item.topics[0])
     else this.oddBuyDatas.push(item.topics[1])
   })

   this.$nextTick(()=>{
     new Swiper('.swiper-container',{
        slidesPerView: 4,
        slidesPerColumn: 2,
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
          type:'custom',
          renderCustom: function(swiper, current, total) { //自定义分页器
            var paginationHtml  = "";
            for(let i = 0; i < total; i++) {
              //判断哪个分页器此刻应该被激活
              if(i == (current - 1)) {
                paginationHtml += '<span class="swiper-pagination-customs swiper-pagination-customs-active"></span>';
              } else {
                paginationHtml += '<span class="swiper-pagination-customs"></span>';
              }
            }
            return paginationHtml;
          }
    },
     })
     this.BScroll = new BScroll('.contentContainer',{
       scrollY: true,
     })
  })
      
      
      this.page += 1
      this.getPagesData(this.page)
  },

  methods:{
    //请求每页数据
    async getPagesData(pageNumber){
      //分页数据
      let autoData = await this.$http.buy.getBuyAutoData({page:pageNumber,size:10})
      console.log(autoData)
      autoData.result.forEach((item,index)=>{
        if(index % 2 === 0) this.evenBuyDatas.push(item.topics[0])
        else this.oddBuyDatas.push(item.topics[0])
      })
    }
    
  }
}
</script>

<style lang='stylus'>
  .buyContainer
    width 100%
    height 100%
    .txt
      font-size 36px
    .contentContainer
      height calc(100vh - 88px)
      background #eeeeee
      overflow hidden
      .ListBannerContainer
        width 100%
        height 680px
        margin-bottom 15px
        // background pink
        position relative
        .logo
          width 120px
          height 80px
          position absolute
          left 10px
          top 60px
          z-index 1
        .text
          position absolute
          left 140px
          top 85px
          color #ffffff
          font-size 30px
          z-index 1
        .bg
          width 100%
          height 459px
          position absolute
          left 0
          top 0
        .swiper-container
          width 680px
          height 520px
          background #fff
          position absolute
          top 160px
          left 0
          right 0
          bottom 0
          margin auto
          border-radius 10px
          .swiper-wrapper
            display flex
            align-content stretch
            .swiper-slide
              width 160px
              height 200px
              //background red
              display flex
              flex-direction column
              align-items center
              margin-top 40px !important
              img 
                width 120px
                height 120px
              .title
                font-weight bold
                font-size 25px
                white-space nowrap
              .desc
                font-size 12px
                color #666
                white-space nowrap
          .swiper-pagination-customs
            display inline-block
            width 40px
            height 2px
            background #333
          .swiper-pagination-customs-active
            background red
          .swiper-pagination
            top 470px
      .shopList
        display flex
        justify-content space-evenly

</style>