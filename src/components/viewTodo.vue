<template>
    <div id="show">
        <div id="todo" v-for="(todo,index) in todosFiltered" :key="todo.id">
        <input type="checkbox" v-model="todo.checked" v-on:change="save">
        <div v-if="!todo.editing" v-bind:class="{completed: todo.checked}" @dblclick="editTodo(todo,index)">
            {{todo.text}}
        </div>
        <input v-else type="text" v-model="todo.text" @keyup.enter="doneEdit(todo)">
      </div>
      <div id="left">
        <p>{{todoId}} items left</p>
      </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            //show: true,
            
        }
        
    },
    methods:{
        save(){
            localStorage.setItem("items",JSON.stringify(this.$store.state.todos));
        },
        doneEdit(todo){
            //alert("done");
            //alert(index)
            localStorage.setItem("items",JSON.stringify(this.$store.state.todos));
            todo.editing = false;
        },
        editTodo(todo){
            todo.editing = true;
        }
    },
    computed:{
        todoId: function(){
            return this.$store.getters.todoId;
        },
        todosFiltered() {
        return this.$store.getters.todosFiltered;
        },
    }
}
</script>
<style scoped>
#show{
  max-width: 500px;
  margin: 50px auto;
  font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
}
#todo{
  height:30px;
  width: 100%;
  background: #209cee;
  border-radius: 3px;
  display: flex;
  align-items: center;
  
  margin: 10px 0;
}
.completed{
  text-decoration: line-through;
  color: grey;
}
#left{
  width: 100%;
  height: 40px;
  margin-top: 40px;
  margin-bottom: 30px;
  background: #00ffff;
  border-radius: 3px;
  text-align: center;
}
input[type="checkbox"]{
    margin-left: 10px;
    margin-right: 20px;
}

</style>
