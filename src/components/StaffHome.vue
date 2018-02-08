<template>
  <div class="container">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>Staff Page</h1>
        <h2>Choose one to Login.</h2>
      </div>
    </div>
  </div>

</template>

<script>


  export default {

  }

</script>

<style scoped>
  #home {
    background: url('../../src/assets/Restaurant-POS.jpg');
    height: 600px;
    padding: 10%;
  }
  h1,h2{
    margin: 3%;
  }

  .background{
    background: #eee;
    opacity: 0.8;
    max-width: 80%;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
