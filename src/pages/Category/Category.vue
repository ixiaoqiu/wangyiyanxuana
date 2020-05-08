<template>
  <div class="cateGorysListContainer">
    <!-- 头部 -->
    <div class="header">
      <div class="search">
        <i></i>
        搜索商品
      </div>
    </div>
    <!-- 内容区 -->
    <div class="contentContainer">
      <div class="leftContainer">
          <div class="navItem" 
            :class="{active : navId === item.id}"
            :key="item.id"
            @click="changeNav(item.id)"
            v-for="(item) in CateNavDatas.categoryL1List">
            {{item.name}}
          </div>
      </div>
      <div class="righeContainer" v-if="categoryItem">
        <div class="proContainer">
          <img class="proImg" :src="categoryItem.bannerUrl"/>
          <div class="proItem" v-for="(item,index) in categoryItem.categoryList ? categoryItem.categoryList : categoryItem.subCateList" :key="index">
            <img :src="item.wapBannerUrl" alt="">
            <div>{{item.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name:"Category",
  data(){
    return{
      CateNavDatas:{},
      CateListsDatas:[],
      navId:11
    }
  },
  computed:{
    categoryItem(){
      return this.CateListsDatas.find((cateItem)=>{
        return cateItem.id === this.navId
      })
    }
  },

  methods:{
    changeNav(id){
      this.navId = id
    }
  },

  async mounted(){
   this.CateNavDatas = await this.$http.category.getCateNavDatas()
   this.CateListsDatas = await this.$http.category.getCateListsDatas()
    // new BScroll('.contentContainer',{
    //  scrollY: true
    // })
     this.$nextTick(()=>{
       new BScroll('.leftContainer',{
        scrollY: true,
        click:true
        })
      new BScroll('.righeContainer',{
        scrollY: true,
        click:true
       })
     })
  },
}
</script>

<style lang='stylus'>
  .cateGorysListContainer
    .header
      width 100%
      height 60px
      padding 10px 0
      .search
        width 90%
        height 100%
        margin 0 auto
        background #eeeeee
        border-radius 10px
        line-height 60px
        text-align center
        font-size 26px
    .contentContainer
      border-top 1px solid #eeeeee
      height calc(100vh - 76px)
      display flex
      overflow hidden
      .leftContainer
        width 20%
        height 100%
        border-right 1px solid #333
        box-sizing border-box
        .navItem
          font-size 26px
          text-align center
          line-height 80px
          position relative
          &.active
            color #bb2c08
            &:after
              position absolute
              left 2px
              top 15%
              content ''
              width 2px
              height 70px
              background #bb2c08

      .righeContainer
        width 80%
        height 100%
        .proContainer
          display flex
          flex-wrap wrap
          .proImg 
           width 520px
           height 190px
           margin 20px auto 
          .proItem
            width 33.33%
            display flex
            flex-direction column
            align-items center
            margin-top 20px
            img 
              width 144px
              height 144px
            div
              font-size 24px
        
</style>