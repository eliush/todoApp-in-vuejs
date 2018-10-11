import todoApp from "./components/todoApp.vue"
//import addBlog from "./components/addBlog.vue"
//import singleBlog from "./components/singleBlog.vue"
import viewTodo from "./components/viewTodo.vue"

export default[
    {path:'/',component:todoApp},
    {path:'/vTodo/:id',component: viewTodo}
]