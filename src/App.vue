<template>
<div>
  <router-view></router-view>
</div>
</template>

<script>
import todoApp from "./components/todoApp.vue";
import addBlog from "./components/addBlog.vue";
import showBlogs from "./components/showBlogs.vue";
import header from "./components/header.vue";
import singleBlog from "./components/singleBlog.vue";

export default {
  components: {
    "add-blog": addBlog,
    "show-blog": showBlogs,
    "todo-app" : todoApp,
    "app-header" : header,
    "single-blog" : singleBlog
  },
  data () {
    return {

    }

  },
  methods: {
    
  }
}
</script>

<style scoped> /* scoped use for style individual*/
</style>
