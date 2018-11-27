import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Msite from '../pages/Msit/MSite.vue'
import Search from '../pages/Search/Search.vue'
import Profile from '../pages/Profile/Profile.vue'
import Order from '../pages/Order/Order.vue'
import Login from '../pages/Login/Login.vue'

Vue.use(Router)

export default new Router({
  //所有路由
  routes: [
      {
        path: '/msite',
        component:Msite,
        // 从路由处理footer组件的显示隐藏，meta属性本来就存在，为空
        meta:{
          showFooter:true
        }
      },
      {
        path: '/Search',
        component:Search,
        meta:{
          showFooter:true
        }
      },
      {
        path: '/Profile',
        component:Profile,
        meta:{
          showFooter:true
        }
      },
      {
        path: '/Order',
        component:Order,
        meta:{
          showFooter:true
        }
      },{
        path:'/',
        redirect:'/msite',
      },{
        path:'/login',
        component:Login
      }
  ]
})
