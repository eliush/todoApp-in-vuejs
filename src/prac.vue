<template>
<div> <!--a template component has only one div-->
  <h2>list of Prac</h2>
  <ul>
    <li v-for="prac in practice">{{prac}}</li>
  </ul>
</div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      practice: ["hi","hello","bye"]
    }
  }
}
</script>

<style scoped>
h2{
  color: green;
}
li{
  color: red;
}
</style>
