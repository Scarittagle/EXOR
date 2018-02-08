<template>
  <div class="container">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <div class="container">
          <form class="form-signin">
            <h2 class="form-signin-heading">ADMIN LOGIN</h2>
            <input type="email" id="inputEmail" class="form-control" placeholder="Email address" required="" autofocus="">
            <label for="inputPassword" class="sr-only">Password</label>
            <input type="password" id="inputPassword" class="form-control" placeholder="Password" required="">
            <span>
              <p>To acquire a account, Please contact with the creater.</p>
            </span>
            <button class="btn btn-lg btn-outline-success btn-block" type="submit" @click="logIn">Log In</button>
            <p color="red">{{errMsg}}</p>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import Firebase from 'firebase'
  import LoginWindowButton from './Buttons/LoginWindowButton.vue'

  export default {
    data(){
      return{
        errMsg: '',
        isSP: false
      }
    },
    components:{
      loginWindowButton: LoginWindowButton
    },
    methods:{
      logIn(){
        var email = document.getElementById('inputEmail').value;
        var password = document.getElementById('inputPassword').value;

        //Firebase Auth
        Firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
          this.isSP = true;
          this.$store.state.isStaffPage = this.isSP;
          this.$router.replace('/staffhome');
        }).catch(function(error) {
          alert(error.code +'\n'+ error.message);
        })


      }
    }

  }

</script>

<style scoped>
  #home {
    background: url('../../src/assets/Restaurant-POS.jpg');
    height: 600px;
    padding: 10%;
  }

  .form-signin {
    max-width: 330px;
    padding: 15px;
    margin: 0 auto;
    background-color: #fff;
    border: 1px solid rgba(0,0,0,0.1);
  }
  .form-signin .form-control {
    position: relative;
    height: auto;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: 10px;
    font-size: 16px;
  }
  .form-signin .form-control:focus {
    z-index: 2;
  }
  .form-signin input[type="email"] {
    margin-bottom: -1px;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
  }
  .form-signin input[type="password"] {
    margin-bottom: 10px;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
</style>
