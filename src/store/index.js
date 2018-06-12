import Vue from 'vue';
import Vuex from 'vuex';

// import fetchFromAPI from './modules/fetchFromAPI';
import notification from './modules/notification';
import auth from './modules/auth';

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    // fetchFromAPI,
    auth,
    notification,
  },
});

export { store as default };
