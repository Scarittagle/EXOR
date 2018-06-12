<template>
  <div>
    <div class="navbar-extension"/>
    <nav class="navbar container">
      <div class="navbar-brand">
        <div
          class="navbar-item"
          style="padding-left: 0"
          exact>
          <img
            width="100"
            src="/static/images/logos/image2vector.svg">
        </div>
      </div>
      <div class="navbar-end">
        <div
          v-if="!user"
          class="navbar-item">
          <div class="field is-grouped">
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
        </div>
        <div
          v-if="user"
          class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Menu
          </a>
          <div class="navbar-dropdown is-boxed is-right">
            <a class="navbar-item">
              Admin Account:
              <br>
              <span>{{ this.user.email }}</span>
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item">
              <router-link to="/" tag="a">
                Dashboard
              </router-link>
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
              Manage Users
            </a>
            <a class="navbar-item" href="https://bulma.io/documentation/form/general/">
              Settings
            </a>
            <hr class="navbar-divider">
            <a class="navbar-item is-active" @click="logout">
              Log Out
            </a>
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
    dashboard() {
      router.push('/');
    },
    login() {
      router.push('/login');
    },
    logout() {
      this.$store.dispatch('logOut');
    }
  },
};
</script>
