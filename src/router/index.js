import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Article from '../views/Article.vue'
import Login from '../views/Login.vue'
import Admin from '@/views/Admin.vue'
import AdminHome from '@/views/Admin/AdminHome.vue'
import Add from '@/views/Admin/Add.vue'
import NoPage404 from '@/views/NoPage404.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: "*",
    name: 'NoPage404',
    component: NoPage404
    // redirect: "/login"
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/article/:id',
    name: 'Article',
    component: Article
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/admin',
    name: 'Admin',
    component: Admin,
    children: [
      {
        path: '/',
        name: 'Admin-Home',
        component: AdminHome
      },
      {
        path: 'add',
        name: 'Amin-Add',
        component: Add
      },
    ]
  },
  
]

const router = new VueRouter({
  routes
})

export default router
