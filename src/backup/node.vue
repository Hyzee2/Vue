<template>
    <h1>Hello</h1>
    Node 파일 입니다. 
    <button @click="btn_ev">서버호출</button>
    <button @click="btn_ev2">서버로전송</button>
    <button @click="btn_POST">포스트로 전송</button>
    <button @click="btn_query">쿼리1</button>
    <button @click="btn_query2">쿼리2</button>
    <button @click="btn_query2">쿼리3</button>
    <button @click="btn_query3">Sal</button>
    <button @click="btn_query4">쿼리 포스트</button>
    <button @click="btn_ev7">쿼리 포스트2</button>
</template>
  
<script>
  import axios from 'axios';

  export default {
    name: 'App',
    data() {
      return {
      }
    },
    methods: {
        btn_ev(){
            alert("서버호출됩니다.");
            // let url = "http://localhost:3000/test";
            axios.get("http://localhost:3000/test") // Node.js 서버를 호출하는 부분
            .then(res => {
                alert("회원이름: " + res.data.name);
                console.log(res);
            })
        },
        btn_ev2(){
            alert("서버전송됩니다.");
            // let url = "http://localhost:3000/test";
            let obj = {};
            obj.userId = 'khj';
            obj.name = 'kim';
            obj.pw = 'qwe';
            obj.birth = '950221';
            obj.fav = 'sleeping';
            //axios.get("http://localhost:3000/get1?name=짱구&age=10") // 값이 여러개이면 &로 붙일 수 있다. 
            axios.get("http://localhost:3000/get1", { // get 방식이지만 Object형식으로 보낼 때는 ? 안 붙임
                params: obj
            }) // Object를 보내려면 중괄호, params에 객체 변수명을 작성해준다. 
            .then(res => {
                console.log(res);
            })
        },
        btn_POST(){
            alert("서버전송됩니다.");
            // let url = "http://localhost:3000/test";
            let obj = {};
            obj.userId = 'khj';
            obj.name = 'kim';
            obj.pw = 'qwe';
            obj.birth = '950221';
            obj.fav = 'sleeping';

            axios.post("http://localhost:3000/post1", obj)
            .then(res => {
                console.log(res);
            })
        },
        btn_query(){
          axios.get("http://localhost:3000/query") // Node.js 서버를 호출하는 부분
            .then(res => {
                console.log(res);
            })
        },
        btn_query2(){
            
            let obj = {};
            // DB에서 검색할 조건 값을 보낼 때 
            obj.job = '부장';
            obj.empNo = 1007;
            axios.get("http://localhost:3000/query2", { 
                params: obj
            }) // Object를 보내려면 중괄호, params에 객체 변수명을 작성해준다. 
            .then(res => {
                console.log(res.data);
            })
        },
        btn_query3(){
            
            let obj = {};
            // DB에서 검색할 조건 값을 보낼 때 
            obj.sal = 500;
            axios.get("http://localhost:3000/query4", { 
                params: obj
            }) // Object를 보내려면 중괄호, params에 객체 변수명을 작성해준다. 
            .then(res => {
                console.log(res.data);
            })
        },
        btn_query4(){
            
            axios.post("http://localhost:3000/insert")
            .then(res => {
                console.log(res);
            })
        },
        btn_ev7(){

          let obj ={};
          obj.deptNo = 70;
          obj.dname = '재정부';
          obj.loc = '부산';

          axios.post("http://localhost:3000/insert2", obj)
            .then(res => {
                console.log(res);
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