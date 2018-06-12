<template>
  <div/>
</template>

<script>
  export default {
    computed: {
      notification() {
        return this.$store.getters.notification;
      },
    },

    watch: {
      notification() {
        const type = this.notification.success ? 'is-success' : 'is-danger';
        if (this.notification.success !== undefined && this.notification.toast) {
          this.$toast.open({
            duration: 5000,
            message: this.notification.message,
            position: 'is-top',
            type,
          });
        }
      },
    },
  };
</script>

