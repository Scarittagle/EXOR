import store from '@/store/index';

export const AuthGuard = (to, from, next) => {
  if (store.getters.user) {
    next();
  } else {
    next('/login');
  }
};

export const LoggedInGuard = (to, from, next) => {
  if (store.getters.user) {
    next('/');
  } else {
    next();
  }
};
