<template>
<div>
  <h2>All blog Article</h2>
  <div v-for="blog in blogs" :key="blog">
    <h3>{{blog.title}}</h3>
    <article>{{blog.body}}</article>
  </div>
</div>
</template>

<script>
export default {

  data () {
    return {
      blogs: []
    }

  },
  methods: {
    
  },
  created(){
      this.$http.get("https://jsonplaceholder.typicode.com/posts/1").then(function(data){
      console.log("hi");
      this.blog = data.body;
    });
  }
}
</script>

<style scoped> /* scoped use for style individual*/
</style>
