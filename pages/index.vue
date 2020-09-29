<template>
  <div id="main-index">
    <div class="container set-right">
      <div v-if="userLogin===false" class="col-lg-6 col-md-8 col-sm-12 set-right ">
        <fieldset>
          <div class="form-group">
            <input type="email" class="form-control" :class="{error:!verifyEmail}" placeholder="please enter your email"
                   v-model="userEmail">
            <p v-if="!verifyEmail" class="errorMessage"> your email is incorrect </p>
          </div>
          <div class="form-group">
            <input type="password" class="form-control" :class="{error:!verifyPass}"
                   placeholder="please enter your password" v-model="userPass">
            <p v-if="!verifyPass" class="errorMessage"> your pass is incorrect </p>
          </div>
          <div class="form-group">
            <button class="btn btn-primary" @click="login">Login</button>
            <p style="font-size: small">This is your first time?
              <NuxtLink to="/sign-up">Create new account</NuxtLink>
            </p>
          </div>
        </fieldset>
      </div>
      <div v-else class="alert-success col-lg-6 col-md-8 col-sm-12  concentrated">
        <h3> Hi {{ userInfo.name }} ,</h3>
        <h3> you are login!</h3>
        <hr>
        <p>click to <a @click="Logout">log out!</a></p>
      </div>
    </div>
  </div>
</template>

<script>
import {mapState, mapMutations, mapActions, mapGetters} from 'vuex'

export default {
  data() {
    return {
      userEmail: '',
      userPass: '',
      verifyEmail: false,
      verifyPass: false,
    }
  },
  computed: {
    ...mapGetters({userLogin: 'login/UserLogin'}),
    ...mapState({userInfo: 'userInfo'}),
  },
  methods: {
    ...mapActions(['AddUserInfo']),
    ...mapMutations({Logout: 'login/Logout', Login: 'login/Login'}),
    login() {
      this.$axios.get('https://login-db-4505d.firebaseio.com/posts.json')
        .then(response => {
          this.verifyEmail = false
          for (let key in response.data) {
            if (this.userEmail === response.data[key].email) {
              this.verifyEmail = true
              console.log('email-true')
              if (this.userPass === response.data[key].password) {
                this.verifyPass = true
                console.log('pass-true')
                this.AddUserInfo({data: response.data[key]})
              }
            }
          }
          if (this.verifyEmail && this.verifyPass) {
            this.Login()
          }
        })
        .catch(err => {
          console.log('err', err)
        })
    },
  },
}
</script>

<style scoped>
.container {
  overflow: auto;
  width: 50%;
}

.set-right {
  float: right
}

#main-index {
  height: 100%;
  width: 100%;
  background-image: url("~assets/3.jpg");

  background-position: center center;
  background-attachment: scroll;
  background-size: cover;
  background-repeat: no-repeat;
}

input {
  background-color: #C2CCC5;
}

</style>
