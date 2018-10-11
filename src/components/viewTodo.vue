<template>
    <div id="show">
        <input type="text" v-model="eTodo[0].text" class="edit" v-on:keyup.enter="update">
        <button class="done" v-on:click="update">Update</button>
    </div>
</template>
<script>
export default {
    data(){
        return{
            //show: true,
            id: this.$route.params.id,
            eTodo: ''            
        }
        
    },
    methods:{
        update(){
            //alert("done");
            //alert(index)
            for(var i=0;i<this.$store.state.todos.length;i++){
                if(this.$store.state.todos[i].id==this.id){
                    this.$store.state.todos[i].text = this.eTodo[0].text;
                }
            }
            localStorage.setItem("items",JSON.stringify(this.$store.state.todos));
            alert("updated");
        },
    },
    created(){
        //alert(this.id);
        this.eTodo = this.$store.state.todos.filter(todo=>{
            return todo.id == this.id;
        });
    }
}
</script>
<style scoped>
#show{
  max-width: 500px;
  margin: 50px auto;
  font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
}

</style>
