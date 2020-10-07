import Vue from 'vue'
import VueRouter from 'vue-router'
const Home = () => import('@/views/Shouye')
const Detail = () => import('../components/Detail');
const Page = () => import('@/views/Page')

const User = () => import('@/views/User')
const Faxian = () => import('@/views/Faxian')
// 首页下的内容
const Food = () => import('@/views/shouye/Food');
const Hotel = () => import('@/views/shouye/Hotel');
const Tourism = () => import('@/views/shouye/Tourism');
const Tour = () => import('@/views/shouye/Tour');
const Fastfood = () => import('@/views/shouye/Fastfood');
const Activity = () => import('@/views/shouye/Activity');
const Dd = () => import('@/views/shouye/Dd');
const Movie = () => import('@/views/shouye/Movie');





Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    redirect: "/shouye"
  },
  {
    path: "/shouye",
    component: Home,

    children: [{
        path: '/shouye',
        redirect: '/shouye/food',

      }, {
        path: "/shouye/food",
        name: "food",
        component: Food,
        meta: {
          keepAlive: true
        }
      },

      {
        path: "/shouye/hotel",
        name: "hotel",
        component: Hotel
      }, {
        path: "/shouye/movie",
        name: "movie",
        component: Movie,
      }, {
        path: "/shouye/activity",
        component: Activity,
      }, {
        path: "/shouye/fastfood",
        component: Fastfood,
      },
      {
        path: "/shouye/dd",
        component: Dd,
      },
      {
        path: "/shouye/tour",
        component: Tour,
      }, {
        path: "/shouye/tourism",
        component: Tourism,
      }
    ],

  },
  {
    path: "/detail/:id",
    name: "Details",
    component: Detail,
    meta:{
      keepAlive:true
    }
  },
  {
    path: '/faxian',
    component: Faxian
  },
  {
    path: '/page',
    component: Page
  },
  {
    path: '/user',
    component: User
  }
]

const router = new VueRouter({
  routes,
  linkActiveClass: "active",

})

export default router