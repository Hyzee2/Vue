<template>
  <h1>Hello</h1>
  <input type="text" v-model="mem_first">
  <input type="text" v-model="mem_second">

{{ fullName }}
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      mem_first: '',
      mem_second: '',
    }
  },
  watch: {
    mem_first(){
      console.log("변경확인");
    }
  },
  computed: {
    fullName(){
      return this.mem_first+this.mem_second;
    }
  },
  components: {
    
  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 30px;
}

</style>
