<template>
<div id="add-blog">
    <h2>Add a new blog</h2>
    <form v-if="!show">
        <label>Blog Title</label>
        <input type="text" v-model.lazy="blog.title" required/>
        <label>Blog Content</label>
        <textarea v-model.lazy="blog.text"></textarea>
        <div id="checkboxes">
            <input type="checkbox" v-model="blog.check" value="Elius"/>
            <label>Elius</label>
            <input type="checkbox" v-model="blog.check" value="Happy"/>
            <label>Happy</label>
            <input type="checkbox" v-model="blog.check" value="Ruha"/>
            <label>Ruha</label>
        </div>
        <label>Author</label>
        <select v-model="blog.author">
            <option v-for="author in authors" :key="author">{{author}}</option>
        </select>
        <button v-on:click.prevent="post">Add</button>
    </form>
    <div v-if="show">
        <h3>Submitted</h3>
    </div>
    <div id="preview">
        <input type="text" v-model="search" placeholder="search">
        <h3>preview Content</h3>
        <p>Blog Title: {{blog.title | to-upperCase}}</p>
        <p>Blog Content:</p>
        <p v-rainbow>{{blog.text}}</p>
        <p>Family:</p>
        <ul>
            <li v-for="check in blog.check" :key="check.id">{{check}}</li>
        </ul>
        <p>Author: {{blog.author}}</p>
    </div>
</div>
</template>

<script>

export default {

  data () {
    return {
        blog: {
            title: "",
            text: "",
            check: [],
            search: "",
            author: ""
        },
        authors: ["Elius","Happy","Ruha"],
        show: false
    }

  },
  methods: {
      post: function(){
          this.$http.post("https://jsonplaceholder.typicode.com/posts",{
              title: this.blog.title,
              body: this.blog.text,
              userId: 1
          }).then(function(){
              this.show=!this.show;
          });
      }

  },
  computed:{
      filterBlogs: function(){
          console.log("hi");
          return this.blog.filter((blog)=>{
              return this.blog.title.match(this.search);
          })
      }
  },
  //custom filter locally
  filters:{
      toUpperCase(value){   //if no quote then we can`t add (-),instead - we use capital of first alphabet or "to-upperCase": function(value){
          return value.toUpperCase();
      }
  },
  //custom directive locally
  directives:{
      "rainbow": {
          bind(el,binding,vnode){
            el.style.color = "red";
        }
      }
  }
}
</script>

<style scoped> /* scoped use for style individual*/
#add-blog *{
    box-sizing: border-box;
}
#add-blog{
    margin: 20px auto;
    max-width: 600px;
}
label{
    display: block;
    margin: 20px 0 10px;
}
input[type="text"],textarea{
    display: block;
    width: 100%;
    padding: 8px;
}
#preview{
    padding: 10px 20px;
    border: 1px dotted #ccc;
    margin: 30px 0;
}
h3,h2{
    margin: 10px 0;
    text-align: center;
}
#checkboxes input{
    display: inline-block;
    margin-left: 10px;
}
#checkboxes label{
    display: inline-block;
}
#preview li{
    margin-left: 20px;
}
option{
    width: 200px;
}
</style>
