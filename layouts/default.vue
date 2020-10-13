<template>
  <div id="main-default">
    <Navbar/>
    <Nuxt/>
    <Footer/>
  </div>
</template>

<script>
import Footer from "@/pages/Footer";
import Navbar from "@/pages/Navbar";

export default {
  components: {Navbar, Footer}
}
</script>

<style>
html {

  /*!* background-color: #928A74;*/
  /*background-color: #C2CCC5;*/
  /*background-color: #C2983D;*/
  /*background-color: #303D38;*/
  /*background-color: #252425; *!*/

  position: relative;
  height: 100%;
}
body{
  height: 100%;
  background-color: #928A74;
}
#main-default {
  overflow: auto;
  display: flex;
  flex-direction: column;
}

.concentrated {
  margin: auto;
  display: block;
}

.container {
  padding-top: 70px;
  padding-bottom: 70px;
  overflow: auto;
}

.body {
  height: 100%;
  padding-bottom: 50px;
}

.alert-success {
  padding: 30px;
  text-align: center;
  border-radius: 15px;
  background-color: #303D38;
  color: #C2CCC5;
}

.alert-danger {
  padding: 30px;
  text-align: center;
  border-radius: 15px;
  color: red;
}

.errorMessage {
  color: red;
}

.error {
  border: 1px solid red;
  border-radius: 5px;
}
</style>

