//路由

import Index from '@/pages/Index/Index.vue'
import Category from '@/pages/Category/Category.vue'
import Buy from '@/pages/Buy/Buy.vue'
import Cart from '@/pages/Cart/Cart.vue'
import Login from '@/pages/Login/Login.vue'
import LoginPhone from '@/pages/LoginPhone/LoginPhone'
import LoginIndex from '@/pages/LoginIndex/LoginIndex'
import LoginEmail from '@/pages/LoginEmail/LoginEmail'
import search from '@/pages/search/search'


export default [
  {path:"/Index",component:Index,meta:{showFooter:true}},
  {path:"/Category",component:Category,meta:{showFooter:true}},
  {path:"/Buy",component:Buy,meta:{showFooter:true}},
  {path:"/Cart",component:Cart,meta:{showFooter:true}},
  {path:"/search",component:search},

  {
    path:"/Login",
    component:Login,meta:{showFooter:false},
    children:[
      {path:'index',component:LoginIndex},
      {path:'phone',component:LoginPhone},
      {path:'email',component:LoginEmail},
      {path:'',redirect:'index'}//重定向
    ]
  },
  {path:'',redirect:'Index'}
]