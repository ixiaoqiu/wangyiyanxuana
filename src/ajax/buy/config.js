export default{
  api:{
    //导航数据
    getBuyNavData:{
      url:'/topic/v1/know/navWap.json',
      corsUrl:'/163',
      method:"get",
      isToast:false
    },
    //瀑布流首页数据
    getBuyData:{
      url:"/topic/v1/find/recManual.json",
      corsUrl: '/163',
      method:"get",
      isToast:false,
    },
    //瀑布流分页数据
    getBuyAutoData:{
      url:"/topic/v1/find/recAuto.json",
      corsUrl: '/163',
      method:"get",
      isToast:false,
    }
  },
  name:'index'
}