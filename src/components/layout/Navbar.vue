<template>
  <div>
    <div class="navbar-extension"/>
    <nav class="navbar container">
      <div class="navbar-brand">
        <div
          class="navbar-item"
          exact>
          <img
            width="150"
            src="/static/images/logos/image2vector.svg">
        </div>
      </div>
      <div class="navbar-end">
        <div class="navbar-item">
          <div
            v-if="!user"
            class="field is-grouped">
            <div class="control">
              <button
                class="button is-link is-outlined level-item" @click="login">
                Login
              </button>
            </div>
            <div class="control">
              <button
                class="button is-link is-outlined level-item" @click="contact">
                Contact Form
              </button>
            </div>
          </div>
          <div
            v-if="user"
            class="field is-grouped">
            <div class="control">
              <button
                class="button is-link is-outlined level-item" @click="logout">
                Log Out
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script>
import router from '@/router';

export default {
  computed: {
    user() {
      return this.$store.getters.user;
    },
  },
  methods: {
    contact() {
      router.push('/contact');
    },
    login() {
      router.push('/login');
    },
    logout() {
      this.$store.dispatch('logOut');
      this.$store.dispatch('createNotification', { message: 'You have been logged out.', success: false, toast: true });
    }
  },
};
</script>
