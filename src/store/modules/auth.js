import * as firebase from 'firebase';
import router from '@/router/index';

// Initialize Firebase
const config = {
  apiKey: "AIzaSyBalrhrd5hjfB-Ff1glGOqJeBI0moCtRbw",
  authDomain: "exor-ffdab.firebaseapp.com",
  databaseURL: "https://exor-ffdab.firebaseio.com",
  projectId: "exor-ffdab",
  storageBucket: "exor-ffdab.appspot.com",
  messagingSenderId: "998463118303"
};
const Firebase = firebase.initializeApp(config);

// state
const state = {
  user: null,
  loginInfo: null,
};

// getters
const getters = {
  user(state) {
    return state.user;
  },
  loginInfo(state) {
    return state.loginInfo;
  },
};

// mutations
const mutations = {
  setUser(state, payload) {
    state.user = payload;
    console.log(state.user);
  },
  setLoginInfo(state, payload) {
    state.loginInfo = payload;
  },
  logUserOut(state) {
    state.user = null;
    state.loginInfo = null;
  },
};

// actions
const actions = {
  postContactForm(context, payload) {
    const dbContactFormRef = Firebase.database().ref('Account Inquiry');
    dbContactFormRef.push(payload);
  },
  login(context, payload) {
    Firebase.auth().signInWithEmailAndPassword(payload.email, payload.password).then(() =>
    {
      Firebase.auth().onAuthStateChanged((user) => {
        if (user) {
          // User is signed in.
          context.dispatch('createNotification', { message: `Welcome, ${user.email}`, success: true, toast: true });
          context.commit('setUser', user);
          router.push('/');
        } else {
          // No user is signed in.
          router.push('/login');
        }
      });
    })
      .catch((error) => {
        context.commit('setNotification', {
          message: error.message,
          success: false,
          toast: false,
        });
      });
  },
  logOut(context) {
    context.commit('logUserOut');
    Firebase.auth().signOut().then(() =>{
      context.dispatch('createNotification', { message: 'You have been logged out.', success: false, toast: true });
      router.push('/login');
    }).catch((error) => {
      this.$store.dispatch('createNotification', { message: error.message });
    })

  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};

