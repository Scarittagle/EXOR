<template>
  <div class="columns is-centered has-text-centered">
    <div class="hero is-medium">
      <div class="hero-body">
        <div class="content">
          <h1 class="title">Admin Login</h1>
          <p>To inquire an account, please contact with the developer.</p>
          <div
            v-if="showLoginForm"
            class="box content">
            <form @submit.prevent="login">
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    v-model="email"
                    class="input is-medium"
                    type="email"
                    placeholder="Email"
                    autocomplete="username">
                  <span class="icon is-small is-left">
                    <i class="fas fa-envelope"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control has-icons-left">
                  <input
                    v-model="password"
                    class="input is-medium"
                    type="password"
                    placeholder="Password"
                    autocomplete="current-password">
                  <span class="icon is-small is-left">
                    <i class="fas fa-lock"></i>
                  </span>
                </p>
              </div>
              <div class="field">
                <p class="control">
                  <input
                    class="button is-info is-medium is-fullwidth"
                    type="submit"
                    value="Login">
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showLoginForm: true,
      email: '',
      password: '',
    }
  },
  computed: {
    error() {
      return this.$store.getters.notification;
    },
  },

  // created() {
  //   this.$store.dispatch('clearNotification');
  // },

  methods: {
    login() {
      this.$store.dispatch('login', {
        email: this.email,
        password: this.password,
      });
    },
  },

};
</script>
