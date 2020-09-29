<template>
    <nav class="navbar navbar-expand-lg navbar-dark">
        <div class="container-fluid">
            <NuxtLink class="navbar-brand" to="/"><strong>Vue.Js</strong></NuxtLink>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class=" navbar-nav mr-auto ">
<!--                    <li class=" nav-item">-->
<!--                        <NuxtLink to="/Todo" class=" nav-link">ToDo</NuxtLink>-->
<!--                    </li>-->
<!--                    <li class=" nav-item">-->
<!--                        <NuxtLink to="/Add-blog" class="nav-link"> AddBlog</NuxtLink>-->
<!--                    </li>-->
<!--                    <li class=" nav-item">-->
<!--                        <NuxtLink to="/Blogs" class="nav-link">Blogs</NuxtLink>-->
<!--                    </li>-->
<!--                     <li class=" nav-item">-->
<!--                        <NuxtLink class="nav-link" to="/counter" active-class="active" exact>Counter</NuxtLink>-->
<!--                    </li>-->
                </ul>
                <form class="form-inline">
                    <div v-if="userLogin">
                        <p> hi {{$store.state.userInfo.name}}</p>
                        <a class="log-out" @click="Logout">click to log out!</a>
                    </div>
                    <div v-else>
                        <NuxtLink to="/">Looking for help logging in?</NuxtLink>
                    </div>
                </form>
            </div>
        </div>
    </nav>
</template>

<script>
import { mapGetters, mapMutations} from 'vuex'
export default {
    name: "Navbar",
  computed:{
      ...mapGetters({userLogin:'login/UserLogin'})
  },
    methods: {
      ...mapMutations({Logout: 'login/Logout'})
    }
}
</script>

<style scoped>
.container-fluid {
    padding-left: 0%;
}

.navbar {
    background-color: #111111;
    padding: 0%;
}

.navbar-nav a:hover {
    color: #c2ccc5;
    background-color: #C2983D;
}

.navbar-brand {
    background-color: #e09b06;
    height: 76px;
    scroll-padding-bottom: 0%;
    padding: 0%;
    margin: 0%;
    line-height: 70px;
    padding-left: 15px;
    padding-right: 15px;
}

.navbar-toggler {
    background-color: #e09b06;
}

.navbar-dark .navbar-nav .nav-link,
a {
    color: #c2ccc5;
}

.nav-link {
    line-height: 60px;
}

p,
.log-out {
    color: #c2ccc5;
    font-size: small;
}
</style>
