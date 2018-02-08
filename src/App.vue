<template>
  <div class="container">
    <form>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <h1>Contact Form</h1>
          <hr>
          <div class="form-group">
            <label for="email">E-mail Address</label>
            <input
              type="text"
              id="email"
              class="form-control"
              v-model="contactForm.email">
          </div>
          <div class="form-group">
            <label for="name">Name</label>
            <input
              type="text"
              id="name"
              class="form-control"
              v-model="contactForm.name">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <label for="message">Message</label><br>
          <textarea
            id="message"
            rows="5"
            class="form-control" v-model="contactForm.message"></textarea>
        </div>
      </div>
      <div class="class row" v-if="isSubmit">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group">
          <p>Thank you for your submission, a Staff might not be contact you because there is no Staff....</p>
        </div>
      </div>
      <hr>
      <div class="row">
        <div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
          <button
            class="btn btn-primary"
            @click.prevent="submitted">Submit</button>
        </div>
      </div>
    </form>
    <hr>
  </div>
</template>

<script>
  import {dbFormRef} from "./assets/firebaseConfig";
  export default {
    data(){
      return{
        isSubmit: false,
        contactForm:{
          email: '',
          name: '',
          message: ''
        }
      }
    },
    methods:{
      submitted(){
        this.isSubmit = true;
        dbFormRef.push(this.contactForm);
      }
    }
  }
</script>

<style>
</style>
