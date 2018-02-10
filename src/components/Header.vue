<template>
    <header class="container">
      <nav class="navbar navbar-expand-lg navbar-light bg-faded">
        <a to="/" class="navbar-brand"><img style="max-width:100px; margin-top: -7px;"
                                              src="../assets/LOGO_transparent.png"></a>
        <ul class="navbar-nav mr-auto">
        </ul>
        <ul class="navbar-nav">
          <router-link to="/contact"><contact-form-button v-if="this.$store.state.isStaffPage == false"></contact-form-button></router-link>
          <router-link to="/login" id="logButt"><login-button v-if="this.$store.state.isStaffPage == false"></login-button></router-link>
          <add-staff-button v-if="this.$store.state.isStaffPage == true" @click.native="addStaffMember"></add-staff-button>
          <log-out-button v-if="this.$store.state.isStaffPage == true" id="logOutButt"></log-out-button>
        </ul>
      </nav>
    </header>
</template>

<script>
  import LoginButton from './Buttons/LoginButton'
  import AddStaffButton from './Buttons/AddStaffButton'
  import LogoutButton from './Buttons/LogoutButton'
  import ContactFormButton from './Buttons/ContactFromButton'
  import { dbStaffRef} from "../firebaseConfig";

  export default {
    data(){
      return{
        newStaff:{
          name: 'travis',
          pin: '123'
        },
        dontshow: true,
      }
    },
    components:{
      loginButton: LoginButton,
      addStaffButton: AddStaffButton,
      logOutButton: LogoutButton,
      contactFormButton: ContactFormButton
    },
    methods:{
      addStaffMember(){
        dbStaffRef.push(this.newStaff);
      }
    }

  }

</script>

<style>
  #logButt{
    margin: 0 10px;
  }
  #logOutButt{
    margin: 0 10px;
  }
</style>

