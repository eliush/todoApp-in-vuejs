<template>
    <div id="single-blog">
        <h2>{{blog.title}}</h2>
       <article>{{blog.body}}</article>
    </div>
</template>
<script>
export default {
    data(){
        return{
            id: this.$route.params.id ,
            blog: {}
        }
    },
    created(){
        console.log("hi");
        this.$http.get('http://jsonplaceholder.typicode.com/posts'+this.id).then(function(data){
            this.blog = data.body;
            
        });
    }
    
}
</script>
<style scoped>

</style>

