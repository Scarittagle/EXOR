import Firebase from 'firebase'
import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import Home from './components/Home.vue'
import Login from './components/LoginPage.vue'
import StaffHome from './components/StaffHome'
import ContactForm from './components/ContactForm'

import { store } from './PageState/pageState'

//Vue-Router to redirect the pages
Vue.use(VueRouter)

const routes = [
  {
    path:'*', redirect:'/'
  },
  {
  path:'/', component: Home
  },
  {
    path:'/contact', component: ContactForm
  },
  {
    path:'/login', component: Login
  },
  {
    path:'/staffhome', component: StaffHome, meta:{
    requiresAuth: true
    }
  }
]

const router = new VueRouter({
  routes
})

//Check Auth User to access the secured page.
router.beforeEach((to, from, next) => {
  let currentUser = Firebase.auth().currentUser;
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser){
    next('/');
  }
  else if (!requiresAuth && currentUser){
    next('/staffhome');
  }
  else next()
})

//
Firebase.auth().onAuthStateChanged(function(user){
  if(!app){
    app = new Vue({
      el: '#app',
      template: '<App/>',
      components: { App },
      router
    })
  }
})

//Base
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App)
})
