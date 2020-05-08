//路由

import Index from '@/pages/Index/Index.vue'
import Category from '@/pages/Category/Category.vue'
import Buy from '@/pages/Buy/Buy.vue'
import Cart from '@/pages/Cart/Cart.vue'
import Login from '@/pages/Login/Login.vue'

export default [
  {path:"/Index",component:Index},
  {path:"/Category",component:Category},
  {path:"/Buy",component:Buy},
  {path:"/Cart",component:Cart},
  {path:"/Login",component:Login},
]