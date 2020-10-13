<template>
  <div class="body">
    <div class="container">
      <h4>sign up component</h4>
      <div class="col-lg-10 col-md-10 col-sm-12 concentrated">
        <form class="form-horizontal" v-if="!trust" @submit.prevent="SignUp">
          <fieldset class="wraper">
            <div class="form-group">
              <label for="name" class="col-lg-3 col-md-3 col-sm-3 control-label">Name: *</label>
              <input type="text" id="name" class="col-lg-8 col-md-8 col-sm-8" v-model="userInfo.name" required>
            </div>
            <div class="form-group">
              <label for="last-name" class="col-lg-3 col-md-3 col-sm-3 control-label">Last name: *</label>
              <input type="text" id="last-name" class="col-lg-8 col-md-8 col-sm-8" v-model="userInfo.lastName" required>
            </div>
            <div class="form-group">
              <label for="email" class="col-lg-3 col-md-3 col-sm-3 control-label">Email: *</label>
              <input type="email" id="email" class="col-lg-8 col-md-8 col-sm-8" :class="{error:emailError}"
                     v-model="userInfo.email" required>
              <p v-if="emailError" style="color: red">Your email has already been entered</p>
            </div>
            <div class="form-group">
              <label for="pass" class="col-lg-3 col-md-3 col-sm-3 control-label">Password: *</label>
              <input type="password" id="pass" class="col-lg-8 col-md-8 col-sm-8" v-model="userInfo.password" required>
            </div>
            <div class="form-group">
              <label for="gender" class="col-lg-3 col-md-3 col-sm-3 control-label">Gender: </label>
              <div class="col-lg-8 col-md-8 col-sm-8 form-check form-check-inline" id="gender">
                <label for="female" class="form-check-label">
                  <input type="radio" id="female" value="female" class=" form-check-input" v-model="userInfo.gender">
                  female
                </label>
                <label for="male" class=" form-check-label">
                  <input type="radio" id="male" value="male" class=" form-check-input" v-model="userInfo.gender">male
                </label>
                <label for="other" class=" form-check-label">
                  <input type="radio" id="other" value="other" class=" form-check-input" v-model="userInfo.gender">other
                </label>
              </div>
            </div>
            <div class="form-group col-lg-3 col-md-3 col-sm-3 concentrated">
              <button id="submit-btn" name="submit-btn" class="btn btn-primary sign-up-btn btn-block"> Sign Up</button>
            </div>
          </fieldset>
        </form>
        <div v-else class="alert-success col-lg-6 col-md-8 col-sm-12  concentrated">
          <p>congratulation you are submit!</p>
          <p>for login click here <a href="/"> LOGIN </a></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import login from 'axios'

export default {
  name: "Login",
  data() {
    return {
      userInfo: {
        name: '',
        lastName: '',
        email: '',
        password: null,
        gender: ''
      },
      info: [],
      emailError: false,
      trust: false
    }
  },
  methods: {
    SignUp() {
      login.get('https://login-db-4505d.firebaseio.com/posts.json')
        .then(response => {
          this.emailError = false;
          this.trust = false;
          for (let key in response.data) {
            response.data[key].id = key
            if (response.data[key].email === this.userInfo.email) {
              this.emailError = true
              return
            }
            this.info.push(response.data[key])
          }
          if (this.emailError === false) {
            login.post('https://login-db-4505d.firebaseio.com/posts.json', this.userInfo)
              .then(response => {
                console.log(response)
                this.trust = true
              })
              .catch(error => {
                console.log(error)
              })
          }
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
}
</script>

<style scoped>

.wraper {
  padding: 80px;
  background-color: #303D38;
  border: 1px solid #ddd;
  border-radius: 5px;
  color: #C2CCC5;
  font-size: 16px;
  font-weight: 200;
}
</style>
