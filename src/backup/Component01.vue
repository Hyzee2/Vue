<template>
    <div class="parent">
        <h1>Component1</h1>
        
        <h2>{{ parData }}</h2>
        <h2>{{ parData2 }}</h2>
    </div>
    <ChildComp :childData="[parData, parData2]" :childData2="member" @getChild="parMethod"/>
</template>
  
  <script>
  import ChildComp from '@/backup/Component02.vue'

  export default {
    name: 'App',
    data() {
      return {
        parData: 'Hello world!',
        parData2: '너무 졸리다',
        member:{
            name: 'Kim',
            age: 20
        }
      }
    },
    methods:{
        parMethod(state){ // state 단어는 변경 가능. 자식의 데이터를 매개변수로 담겨오는 것
            alert("자식으로부터 호출받음");
            console.log(state);
        }
    },
    components: {
        ChildComp // 자식 컴포넌트 작성
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
  }
  .parent{
    width: 100%;
    height: 500px;
    border: #2c3e50 2px solid;
  }
  </style>