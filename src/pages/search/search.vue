<template>
  <div class="SearchContainer">
    <div class="searchHeader">
      <div class="searchWrap">
        <div class="search">
          <div class="icon"></div>
          <input type="text" placeholder="9.9超值专区" v-model="search" @keyup="searchData">
        </div>
      </div>
      <span class="close" @click="$router.push('/Index')">取消</span>
    </div>
    <!-- 热门 -->
    <div class="searchSuggestions" v-if="!search">
      <div class="title">
        <span>热门搜索</span>
      </div>
      <!-- 热门东西 -->
      <div class="hotItem" v-for="(hostItem,index) in hotDatas" :key="index">
        <span>{{hostItem.keyword}}</span>
      </div>
    </div>
    <div class="searchList">
      <ul>
        <li v-for="(item,index) in listData" :key="index">
          <span>{{item}}</span>
          <i></i>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name:"Search",
  data(){
    return{
      hotDatas:[],
      search:'',
      listData:[]
    }
  },
  //界面初始化数据
  async mounted(){
    let {hotKeywordVOList} = await this.$http.search.getSearchHouData()
    console.log(hotKeywordVOList)
    this.hotDatas = hotKeywordVOList
  },
  methods:{
    async searchData(){
      if(!this.search) this.listData = []
      clearTimeout(this.timer)
      if(!this.search) return
      this.timer = setTimeout(async ()=>{
        this.listData = await this.$http.search.searchData({keywordPrefix:this.search})
      },1000)
    }
  }
}
</script>

<style lang='stylus'>
  .SearchContainer
    width 100%
    height calc(100vh - 65px)
    background #eee
    .searchHeader
      width 100%
      height 65px
      // background pink
      position relative
      .searchWrap
        width 530px
        height 50px
        background #eee
        align-items center
        display flex
        padding 0 40px
        position absolute
        left 10px
        top 10px
        .search
          width 100%
          display flex
          .icon
            background url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/search2-553dba3aff.png?imageView&type=webp')
            width 28px
            height 28px
            background-size 100%
            margin-right 20px
          input 
            font-size 28px
            border none 
            background #eee
            outline medium
      .close
        font-size 28px
        float right 
        position relative
        right 20px
        top 15px
    .searchSuggestions
      display flex
      flex-wrap wrap
      padding 40px 20px 20px 20px
      background #fff
      .title
        width 100%
        height 30px
        line-height 30px
        // background pink
        font-size 28px
        color #999
      .hotItem
        height 50px
        margin 20px
        padding 5px
        line-height 50px
        border 1px solid #999
        font-size 24px
        color #333
        border-radius 5px
        display flex
        &:nth-child(even)
          color red
          border 1px solid red
        span 
          white-space nowrap
    .searchList
      ul
        // padding 15px
        width 100%
        box-sizing border-box
        background #fff
        li
          width 100%
          height 62px
          display flex
          justify-content space-between
          align-items center
          border-bottom 1px solid #eeeeee
          // background #fff
          span 
            font-size 34px
          i 
            background-image url('//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/address-right-f33ab6b984.png?imageView&type=webp')
            width 45px
            height 45px
            background-size 100%

          
         
</style>