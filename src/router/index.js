import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/components/Home';
import Login from '@/components/auth/Login';
import ContactForm from '@/components/ContactForm';
import { AuthGuard, LoggedInGuard } from './guard';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home,
      beforeEnter: AuthGuard,
      beforeRouteUpdate: AuthGuard,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      beforeEnter: LoggedInGuard,
      beforeRouteUpdate: LoggedInGuard,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactForm,
    },
  ],
});
