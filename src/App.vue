<template>
  <div id="app">
    <app-navbar/>
    <app-notifications/>
    <section
      id="section"
      class="section">
      <div class="container">
        <router-view/>
      </div>
    </section>
    <app-footer/>
  </div>
</template>

<script>
  import Navbar from './components/layout/Navbar';
  import Notifications from './components/layout/Notification';
  import Footer from './components/layout/Footer';
  export default {
    name: 'App',
    components: {
      'app-navbar': Navbar,
      'app-notifications': Notifications,
      'app-footer': Footer,
    },
  };
</script>

<style lang="sass">
  @import "~bulma"
  @import "~buefy/src/scss/buefy"
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  #section
    min-height: 75vh;
</style>
