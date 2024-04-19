<template>
    <h1>Axios</h1>
    게시판<br>
    <button @click="btn_axios">Axios호출</button>
    <button @click="btn_axios2">Axios2호출</button>
    <div class="popup_bl" v-if="popupClose">
      <div class="popup_wh">
        <div class="data-id">작성자 ID: {{ detail.id }}</div>
        <span class="data-title">{{ detail.title }}</span><br>
        <div style="margin-top: 50px"><span>{{ detail.body }}</span></div><br>
        <div><button @click="close">닫기</button></div>
      </div>
    </div>
    <table class="brd_table">
      <tr>
        <td>ID</td>
        <td>타이틀</td>
        <td>userID</td>
      </tr>
      <tr v-for="li in list" :key="li.id" @click="setDetail(li.id)">
        <td>{{ li.id }}</td>
        <td>{{ li.title }}</td>
        <td>{{ li.userId }}</td>
      </tr>
    </table>
  </template>
  
  <script>
  import axios from 'axios'

  export default {
    name: 'App',
    data() {
      return {
        list: [],
        detail: {},
        popupClose: false,
      }
    },
    methods: {
        btn_axios(){
            axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                this.list = res.data;
                console.log(this.list);
            })
        },
        btn_axios2(){
            axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                console.log(res);
            })
        },
        setDetail(index){ // 게시판 글 상세보기 / 매개변수 필요
            //alert("게시글이 삭제되었습니다.");
            //alert(index);
            axios.get('https://jsonplaceholder.typicode.com/posts/'+index)
            .then(res => {
                console.log(res);
                this.detail = res.data;
                console.log("==================");
                console.log(this.detail);
                this.popupClose = true;
            })
        },
        close(){
          this.popupClose = false;
        },

        
    },
    mounted(){ // 화면 실행되자마다 함수를 호출하는 공간 
      this.btn_axios();
    },
    components: {
    }
  }
  </script>
  
  <style>
  @import './_axios.css';

  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  </style>