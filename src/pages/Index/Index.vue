<template>
  <div class="indexContainer">
    <div class="header">
      <router-link to='/Index'>
        <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png?imageView&type=webp"/>
      </router-link>
      <div class="search">
        <i></i>
        <span>搜索商品，共99999款好物</span>
      </div>
      <div class="login">
        <span>登录</span>
      </div>
    </div>
   
    <div class="navContainer">
      <div class="scrollWrap" v-if='indexData.kingKongModule'>
        <div class="navItem action">
          <span>推荐</span>
        </div>
        <div class="navItem"  v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
          <span>{{item.text}}</span>
        </div>
      </div>
    </div>
    <!-- 内容 -->
    <div class="contentContainer">
      <div class="content">
        <div class="swiper-container">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(item,index) in indexData.focusList" :key="index">
              <img :src="item.picUrl" alt="">
            </div>
          </div>
        </div>

        <div class="serverContainer">
          <ul class="serverList" >
            <li class="serverItem" v-for="(item,index) in indexData.policyDescList" :key="index">
              <img :src="item.icon" alt="">
              <span>{{item.desc}}</span>
            </li>
          </ul>
        </div>

        <div class="categoryContainer">
          <ul class="categoryList" v-if="indexData.kingKongModule">
            <li class="categoryItem" v-for="(item,index) in indexData.kingKongModule.kingKongList" :key="index">
              <img :src="item.picUrl" alt="">
              <span>{{item.text}}</span>
            </li>
          </ul>
        </div>

        <div class="new">
          <div class="banner">
            <img src="https://yanxuan.nosdn.127.net/7db5ad89be165b82b6a3e261029d0122.gif?imageView&quality=75" alt="">
          </div>
        </div>

        <div class="newUser">
          <div class="title">
            <span class="txt">—— 新人专享礼 ——</span>
          </div>
          <div class="content">
            <div class="left">
              <div class="name">新人专属礼包</div>
              <div class="imgWrap">
                <div class="img">
                  <img src="https://yanxuan.nosdn.127.net/352b0ea9b2d058094956efde167ef852.png" alt="">
                </div>
                <div class="animate"></div>
              </div>
            </div>

            <div class="right" v-if="indexData.indexActivityModule">
              <div class="top">
                <div class="topItem">
                  <div class="picWrap">
                    <div class="pic" v-for="(item,index) in indexData.indexActivityModule" :key="index">
                      <img :src="item.picUrl" alt="">
                    </div>
                    <div class="discount" v-for="(item,index) in indexData.indexActivityModule" :key="index">
                      <div class="line1">{{item.activityPrice}}</div>
                      <div class="line2">{{item.originPrice}}</div>
                    </div>
                  </div>
                  <div class="cnt">
                    <div class="f">福利社</div>
                    <div class="subTitle">今日特价</div>
                  </div>
                </div>
              </div>
              <div class="bottom">
                <div class="bottomItem">
                  <div class="picWrap">
                    <div class="pic" v-for="(item,index) in indexData.indexActivityModule" :key="index">
                      <img :src="item.showPicUrl" alt="">
                    </div>
                    <div class="discount">
                      <div class="line1">￥9.9</div>
                      <div class="line2">￥18.9</div>
                    </div>
                  </div>
                  <div class="t" >
                    <div class="x">新人拼团</div>
                    <div class="y">一元起包邮</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- <div class="categoryHot"> -->
          <!-- <div class="moduleTitlw">
            <div class="left">{{indexData.categoryHotSellModule.title}}</div>
          </div> -->

          <div class="hotListContainer">
          <div class="header">
            类目热销榜
          </div>
          <div class="Wrap">
            <div class="WrapItem" v-for="(item, index) in WrapItem" :key="index">
              <span>{{item.categoryName}}</span>
              <img :src="item.showPicUrl" alt="">
            </div>
          </div>
          <div class="small">
            <div class="smallItem"  v-for="(item, index) in smallItem" :key="index">
                <span>{{item.categoryName}}</span>
                <img :src="item.showPicUrl" alt="">
            </div>
          </div>
        </div>
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
import {mapState,mapActions} from 'vuex'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
import { Swipe } from 'vant'
export default {
  name:"Index",
  computed: {
    ...mapState({
      //映射数据
      indexData:state => state.index.indexData
    }),
    WrapItem(){
      if(this.indexData.categoryHotSellModule){
        return this.indexData.categoryHotSellModule.categoryList.slice(0,2)
      }
    },
    smallItem(){ 
      if(this.indexData.categoryHotSellModule){
        return this.indexData.categoryHotSellModule.categoryList.slice(2)
      }
    },
  },
  components:{
  },
  methods: {
    //修改vuex仓库数据
    ...mapActions({
      changeindexdata:'getIdexData'
    })
  },
  async mounted(){
    //调用
   await this.changeindexdata()
    new BScroll('.navContainer',{
      scrollX: true
    })
    new BScroll('.contentContainer',{
      scrollY: true
    })
    new Swiper('.swiper-container',{
      autoplay:true,
      loop:true,
      
    })
  },
}
</script>

<style lang='stylus'>
  html,body
    overflow hidden
    overflow-y auto
  .indexContainer
    .header
      height 44px
      width 100%
      display flex
      padding 5px 10px
      box-sizing border-box
      align-items center
      margin-top 10px
      img
        width 140px
        height 40px
      .search
        display flex
        background-color #eee
        width 440px
        height 55px
        align-items center
        border-radius 5px
        margin 0 12px 0 12px
        i
          width 26px
          height 26px
          background-image url('https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp')
          background-size 100%
          margin 0 10px 0 38px
        span 
          font-size 25px
          color #666
      .login
        width 80px
        height 40px
        border 1px solid #DD1A21
        color #DD1A21
        text-align center
        line-height 40px
        border-radius 5px
    .navContainer
      width 100%
      height 40px
      margin-top 30px
      .scrollWrap
        display flex 
        .navItem
          position relative
          height 40px
          font-size 30px
          font-weight 500
          color #333
          padding 0 5px
          margin 0 10px
          white-space nowrap
          text-align center
          line-height 40px
         
          &.action::after
            position absolute
            content ''
            display block
            height 2px
            width 100%
            background-color #bb2c08
            left 0 
            bottom 2px
    .contentContainer
      height calc(100vh - 85px)
      overflow hidden
      .swiper-container
        height 375px
        .swiper-wrapper
          height 375px
          margin-top 0px
          img 
            width 100%
            height auto
      .serverContainer
        height 36px
        line-height 36px
        .serverList
          display flex
          list-style none
          align-items center
          margin-left -50px
          .serverItem
            flex 1
            display flex
            align-items center
            img 
              width 32px
              height 32px
            span 
              color #333
      .categoryContainer
        margin-left -50px
        .categoryList
          display flex
          list-style none
          flex-wrap wrap
          .categoryItem
            display flex
            flex-direction column
            align-items center
            margin 5px 10px
            flex 1
            img 
              width 100px
              height 100px
              margin-bottom 8px
      .new
        background #eeeeee
        height 260px
        .banner
          img 
            width 100%
            height 240px
      .newUser
        width 100%
        height 600px
        background #eee
        
        .title
          width 100%
          height 90px
          line-height 90px
          text-align center
          background #fff
          margin-top 20px
          .txt
            font-size 30px
        .content
          width 100%
          height 490px
          position relative
          background #fff
          .left
            width 343px
            height 438px
            float left
            display block
            background #F9E9CF
            .name
              font-size 30px
              padding 40px 0 0 60px
            .imgWrap
              margin 40px auto
              width 258px
              height 257px
              position relative
              img 
                width 100%
                height 100%
              .animate
                width 30px
                height 10px
                position absolute
                right 70px
                bottom 30px
                background url(https://yanxuan.nosdn.127.net/3f7e731c6650bc1770589c78bd5a18b7.png?imageView&type=webp)
          .right
            float right
            position absolute
            right 0
            top 0
            
            .top
              width 340px
              height 220px
              background #FBE2D3
              margin-top -25px
              margin-right 20px
              .topItem
                width 100%
                height 100%
                margin 25px
                .picWrap
                  width 200px
                  height 200px
                  position absolute
                  right 0
                  .pic
                    img 
                      width 100%
                      height 100%
                .discount
                  width 80px
                  height 80px
                  background #F59524
                  opacity 0.5
                  border-radius 50%
                  position absolute
                  top 20px
                  right 40px
                  .line1
                    text-align center
                    color #fff
                    z-index 1
                  .line2
                    text-align center
                    color #fff
                .cnt
                  height 84px
                  position relative
                  .f
                    font-size 35px
                    position absolute
                    top 40px
                  .subTitle
                    color #7F7F7F
                    position absolute
                    bottom -40px
            .bottom
              width 340px
              height 220px
              background #FFECC2
              margin-top -20px
              margin-right 20px
              .bottomItem
                width 100%
                height 100%
                margin 25px
                .picWrap
                  width 200px
                  height 200px
                  position absolute
                  right 0
                  .pic
                    img 
                      width 100%
                      height 100%
                .discount
                  width 80px
                  height 80px
                  background #F59524
                  opacity 0.8
                  color #ffffff
                  border-radius 50%
                  position absolute
                  top 20px
                  right 40px
                  .line1
                    text-align center
                  .line2
                    text-align center
                .t
                  height 84px
                  position relative
                  .x
                    font-size 35px
                    position absolute
                    top 20px
                  .y
                    color #7F7F7F
                    width 140px
                    height 40px
                    line-height 40px
                    text-align center
                    color #fff
                    position absolute
                    bottom -20px
                    background #CBB693
                    border-radius 10px
                    
      .hotListContainer
        .header
          width 100%
          height 100px
          line-height 100px
          //background red
          padding 0 20px
          font-size 32px
        .Wrap
          display flex
          .WrapItem
            display flex
            flex 1
            align-items center
            margin-right 20px
            &:nth-of-type(1)
              background-color #F9F3E4
            &:nth-of-type(2)
              background-color #EBEFF6
            img 
              width 200px
              height 200px
            span
              font-size 26px
              position relative
              margin 0px 30px 0 30px
              &:after
                content ""
                display block
                width 50px
                height 4px
                background-color #333
                position absolute
                left 0px
                top 60px
        .small
          display flex
          flex-wrap wrap
          justify-content space-between
          
          .smallItem
            display flex
            width 170px
            height 180px
            background red
            align-items center
            margin-top 10px
            background #f5f5f5
            flex-direction column
            span 
              font-size 24px
              margin 10px 0 5px 0
            img 
              width 120px
              height 120px
              margin-top 12px

</style>