<template>
  <div id="app">
    <div class="container">
      <exor-header></exor-header>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
    <div class="container">
      <exor-footer></exor-footer>
    </div>
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Footer from './components/Footer.vue'

export default {
    components:{
      exorHeader: Header,
      exorFooter: Footer
    }
}
</script>

<style>

</style>
