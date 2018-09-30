import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource'
import VueLocalStorage from 'vue-localstorage'
import VueRouter from 'vue-router'
import Routes from './route.js'
 
Vue.use(VueLocalStorage);
Vue.use(VueRouter);
Vue.use(VueResource);

const route = new VueRouter({ //registry for router
  routes : Routes,
  mode: "history" //by default mode is hash(#)
})
//custom filter globally
/*Vue.filter("to-upperCase",function(value){
  return value.toUpperCase();
});
//custom directive globally
Vue.directive("rainbow",{
  bind(el,binding,vnode){
    el.style.color = "#"+ Math.random().toString().slice(2,8);
  }
});*/

/*import Prac from './prac.vue'
Vue.component("prac",Prac);*/ //this global registry for nested
export const bus = new Vue();
new Vue({
  el: '#app',
  render: h => h(App),
  router : route
})
