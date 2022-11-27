import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginUser from '../views/LoginUser.vue'
import ContactsView from "../views/ContactsView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: LoginUser,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
    alias: ["/"],

  },
  {
    path: '/home:jwt',
    name: 'homel',
    component: HomeView,
    alias: ["/"],
    meta: { auth: true }
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: ContactsView,
    meta: { auth: true }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const auth = localStorage.getItem('token');
  if (to.meta.auth === !auth) {
    next("/login")
  }else{
    next()
  }
})

export default router
