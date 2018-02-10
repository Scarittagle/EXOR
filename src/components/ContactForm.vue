<template>
  <div class="container">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <form id="contactform">
          <div class="container">
            <div>
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
          <div class="container">
            <div>
              <label for="message">Reason of Aquiring Account</label><br>
              <textarea
                id="message"
                rows="2"
                class="form-control" v-model="contactForm.message"></textarea>
            </div>
          </div>
          <div class="container" v-if="isSubmit">
            <div>
              <p>{{ message}}</p>
            </div>
          </div>
          <hr>
          <div>
            <div>
              <button
                class="btn btn-primary"
                @click="submitted">Submit</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import {dbContactFormRef} from "../firebaseConfig";

  export default {
    data(){
      return{
        isSubmit: false,
        contactForm:{
          email: '',
          name: '',
          message: ''
        },
        message: '',
      }
    },
    methods:{
      submitted(){
        if(this.contactForm.email == '' && this.contactForm.name == '' && this.contactForm.message == ''){
          this.isSubmit = true;
          this.message = 'You cannot submit an empty form!';
        }else{
          this.isSubmit = true;
          this.message = 'Thank you for your submission, The Developer will contact you soon...';
          dbContactFormRef.push(this.contactForm);
        }
      },
    }
  }
</script>

<style scoped>
  #home {
    background: url('../../src/assets/Restaurant-POS.jpg');
    height: 600px;
    padding: 4.5%;
  }
  h1,h2{
    margin: 3%;
  }

  .background{
    background: white;
    border: 1px solid rgba(0,0,0,0.1);
    max-width: 40%;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
