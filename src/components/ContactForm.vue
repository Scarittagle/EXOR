<template>
  <div class="columns is-centered">
    <div class="column is-half">
      <div class="content">
        <div class="hero is-medium">
          <div class="hero-body">
            <div class="columns">
              <div class="column">
                <h1 class="title">Inquiry Form</h1>
              </div>
            </div>
            <b-field label="Name">
              <b-input v-model="contactForm.name"></b-input>
            </b-field>
            <b-field label="Email">
              <b-input v-model="contactForm.email"
                       maxlength="30">
              </b-input>
            </b-field>
            <b-field label="Message">
              <b-input v-model="contactForm.message" maxlength="200" type="textarea"></b-input>
            </b-field>
            <div class="button is-info is-fullwidth" @click="submitted">Submit</div>
            <div v-if="isError" class="has-text-centered">
              <br>
              <p class="has-text-danger">{{ message }}</p>
            </div>
            <div v-if="isOK" class="has-text-centered">
              <br>
              <p class="has-text-success">{{ message }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {dbContactFormRef} from "../store/modules/auth.js";
import BField from "buefy/src/components/field/Field";

export default {
  components: {BField},
  data(){
    return{
      isError: false,
      isOK: false,
      contactForm:{
        email: '',
        name: '',
        message: ''
      },
      message: '',
    }
  },
  methods: {
    submitted(){
      if(this.contactForm.email === '' && this.contactForm.name === '' && this.contactForm.message === ''){
        this.isOK = false;
        this.isError = true;
        this.message = 'You cannot submit an empty form!';
      }else{
        this.isError = false;
        this.isOK = true;
        this.message = 'Thank you for your submission, The Developer will contact you soon...';
        this.$store.dispatch('postContactForm', this.contactForm);
      }
    },
  },
}
</script>

<style scoped>

</style>
