import todoApp from "./components/todoApp.vue"
import addBlog from "./components/addBlog.vue"
import singleBlog from "./components/singleBlog.vue"

export default[
    {path:'/',component:addBlog},
    {path:'/todo',component: todoApp},
    {path:'/blog/:id',component: singleBlog}
]