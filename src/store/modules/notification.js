// initial state
const state = {
  notification: null,
};

// getters
const getters = {
  notification(state) { //eslint-disable-line
    return state.notification;
  },
};

// mutations
const mutations = {
  setNotification(state, payload) { //eslint-disable-line
    payload.toast = (payload.toast === undefined) ? true : payload.toast; //eslint-disable-line
    state.notification = payload;
  },
};

// actions
const actions = {
  createNotification(context, payload) {
    context.commit('setNotification', payload);
  },
  clearNotification(context) {
    context.commit('setNotification', {});
  },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
