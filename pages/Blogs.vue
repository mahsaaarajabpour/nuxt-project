<template>
  <div class="body">
    <div class="container">
      <div class=" form-row">
        <div class="form-group col-md-8 concentrated">
          <h2 class="title-logo" style="margin-bottom: 10px">List of blogs ...</h2>
          <p style="text-align: center;margin-top: 10px"> you don't have any blog yet ?
            <router-link to="/add-blog"> click here</router-link>
          </p>
        </div>
      </div>
      <div class="form-row">
        <div class="col-md-8 concentrated">
          <input v-model="search" class="search-input form-control" type="text"
                 placeholder="what do you want to search?">
        </div>
      </div>
      <div class="row blog">
        <div class="col-md-4" v-for="blog in filteredBlogs" :key="blog.id">
          <div class="card w-auto mb-3">
            <img src="assets/img/download.png" class=" card-img" alt="salam">
            <!-- <img src="./assets/A.jpg" class=" card-img-bottom" alt="salam"> -->
            <div class=" card-body">
              <h5 class="card-title">{{ blog.title }}</h5>
              <!--                        <router-link class="btn btn-primary" :to="{name:'blog',-->
              <!--                                                        params:{blog_id:blog.id}}">see more ...-->
              <!--                        </router-link>-->
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
// import BlogsMixin from '../mixins/BlogsMixin'

export default {
  name: "Lists",
  // mixins: [BlogsMixin],
  data() {
    return {
      blogs: [],
      search: ''
    }
  },
  methods: {
    GetBlogs() {
      this.$axios.get('/posts.json')
        .then(response => {
          return response.data
        }).then(data => {
        for (let key in data) {
          data[key].id = key
          this.blogs.push(data[key])
        }
        console.log(this.blogs)
      })
        .catch(error => {
          console.log(error)
        })

    }
  },
  created() {
    this.GetBlogs()
  },
  computed: {}
}
</script>

<style scoped>
.title-logo {
  font-weight: 900;
  text-align: center;
  margin: 30px 0;
}

.blog {
  padding: 15px;
  margin: 15px 0 0;
}

.blog p {
  color: #888;
  font-size: 14px;
  font-weight: 100;
}

.blog h3 {
  font-weight: 800;
  font-size: 20px
}

.concentrated {
  margin: auto;
  display: block;
}

.search-input {
  font-size: 14px;
  border-radius: 2px;
  border-color: #9d9d9d;
}

.card .card-image {
  height: 60%;
  position: relative;
  overflow: hidden;
  margin-left: 15px;
  margin-right: 15px;
  margin-top: -30px;
  border-radius: 6px;
  box-shadow: 0 16px 38px -12px rgba(0, 0, 0, 0.56), 0 4px 25px 0 rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
}

</style>
