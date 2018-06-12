<template>
  <footer class="footer">
    <div class="container">
      <div
        class="content has-text-centered">
        <img
          width="150"
          src="/static/images/logos/logo_slogan_transparent_background.png">
        <div class="level">
          <div class="level-item">
            <p style="margin-bottom: unset">
              © {{ year }} Weiwei Su
            </p>
            <a class="icon is-size-5 is-left" href="https://www.linkedin.com/in/scarittagle/" ><i class="fab fa-linkedin"></i></a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
  export default {
    data(){
      return {
        linkedin: 'https://www.linkedin.com/in/scarittagle/',
      }
    },
    computed: {
      year() {
        return new Date().getFullYear();
      },
    },
  };
</script>
