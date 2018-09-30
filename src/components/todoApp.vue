<template>
<div id="todoapp">
      <h2>TODO APP</h2>
      <input type="text" v-model="newTodo" v-on:keyup.enter="add"/>
      <div id="todo" v-for="(todo,index) in todosFiltered" :key="todo.id">
        <input type="checkbox" v-model="todo.checked" v-on:change="save">
        <div v-bind:class="{completed: todo.checked}">{{todo.text}}</div>
        <div class="remove" v-on:click="remove(index)">
          &times;
        </div>
      </div>
      <div id="left">
        <p>{{todoId}} items left</p>
      </div>
      <div id="but">
        <button id="a" v-on:click="filter = 'all'">All</button>
        <button id="b" v-on:click="filter = 'active'">Active</button>
        <button id="c" v-on:click="filter = 'completed'">Completed</button>
      </div>
      <div id="abut">
        <button id="d" v-on:click="com">Clear Completed</button>
        <button id="e" v-on:click="todos=[]">All Clear</button>
      </div>
    </div>
</template>


<script>

export default {
  data () {
    return {
      newTodo: "",      
      todos: JSON.parse(localStorage.getItem("items")) || [],
      filter: 'all',
     
    }

  },
  methods: {
    add(){
      if(this.newTodo.trim().length==0){
        alert("its can`t be empty");
        return
      }else{
        this.todos.push({
        id: this.todoId,
        text: this.newTodo,
        checked: false
      });
      
      //console.log(this.todos.length);
      //this.todoId++;
      this.newTodo = "";
      localStorage.setItem("items",JSON.stringify(this.todos));
      }
      
    },
    remove:function(index){
      alert("removed");
      this.todos.splice(index,1);
      localStorage.setItem("items",JSON.stringify(this.todos));
    },
    
    /*all: function(){
      console.log("com");
      return this.todos;
    },*/
    com: function(){
      //console.log("com");
      this.todos = this.todos.filter(todo => !todo.checked);
    },
    save(){
        localStorage.setItem("items",JSON.stringify(this.todos));
    }    
  },
  computed:{    
    todoId: function(){
      return this.todos.length;
    },
    todosFiltered() {
      if (this.filter == 'all') {
        console.log("hi");
        return this.todos
      } else if (this.filter == 'active') {
        return this.todos.filter(todo => !todo.checked)
      } else if (this.filter == 'completed') {
        return this.todos.filter(todo => todo.checked)
      }
      return this.todos
    },
   
    
  }
}
</script>


<style scoped> /* scoped use for style individual*/

#todoapp{
  max-width: 500px;
  margin: 50px auto;
  font-family: BlinkMacSystemFont,-apple-system,"Segoe UI",Roboto,Oxygen,Ubuntu,Cantarell,"Fira Sans","Droid Sans","Helvetica Neue",Helvetica,Arial,sans-serif;
}
h2{
  margin-bottom: 30px;
  text-align: center;
  font-size: 35px;
  color: #363636;
}
input[type="text"]{
  width: 100%;
  height: 30px;
  border-radius: 3px;
}
#todo{
  height:30px;
  width: 100%;
  background: #209cee;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;
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
button{
  width: 162px;
  height:40px;
  margin-top: 20px;
  border-radius: 6px;
}
#but{  
  display: flex;
  justify-content: space-between;
}
#abut{
  display: flex;
  justify-content: space-between;
}
#abut button{
  width: 240px;
}
.completed{
  text-decoration: line-through;
  color: grey;
}
#a,#c{
  background: #209cee;
}
#b{
  background: #23d160;
}
#d,#e{
  background: #ff3860;
}


</style>
