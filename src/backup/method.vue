<template>
  <img alt="logo" src="./assets/img_DancingLion.png">
  <h1>멋진 스타일</h1>
  <h2 :style='color'>{{fashion}}</h2>
  <h2>좋아요: {{ cnt }} <br></h2>
  <button @click="btn_ev">좋아요</button>&nbsp;&nbsp;<button @click="change">패션 변경하기</button>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      cnt: '0',
      fashionCnt: '0',
      fashion: '시원한 유럽패션',
      color: 'color: red'
    }
  },
  methods: {
    btn_ev(){
      this.cnt++;
    },
   change(){
    this.fashionCnt++;
    if(this.fashionCnt % 2 == 0){
        this.fashion = '시원한 유럽패션';
        this.color = 'color: blue';
      }else{
        this.fashion = '멋진 강남패션';
        this.color = 'color: red';
      }
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
