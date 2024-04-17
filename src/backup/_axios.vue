<template>
    <h1>Axios</h1>
    axios<br>
    <button @click="btn_axios">Axios호출</button>
    <button @click="btn_axios2">Axios2호출</button>
  </template>
  
  <script>
  import axios from 'axios'

  export default {
    name: 'App',
    data() {
      return {
      }
    },
    methods: {
        btn_axios(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
            })
        },
        btn_axios2(){
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res2 => {
                console.log(res2);
            })
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
    margin-top: 60px;
  }
  </style>