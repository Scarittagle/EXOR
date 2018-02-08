<<template>
  <div>
    <button class="btn btn-outline-success" type="button" href="" @click.prevent="logOut">Log Out</button>
  </div>
</template>

<script>
  import Firebase from 'firebase'

  export default {
    data(){
      return{
        isSP: true
      }
    },
    methods:{
      logOut(){
        Firebase.auth().signOut().then(() =>{
          alert('You have been logged out.');
          this.isSP = false;
          this.$store.state.isStaffPage = this.isSP;
          this.$router.replace('/');
        }).catch(function(error){
          alert(error.code + '\n' + error.message);
        })

      }
    }

  }

</script>
