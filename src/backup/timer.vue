<template>
<h1>타이머</h1>
<input type="text" v-model="inputText">
<span> 초 뒤 알람</span>&nbsp;
<button @click="btn_ev">알람시작</button><br>
<div></div>
<div id="result" style="display: none;">{{ result }}초가 지났습니다<br>알람 시작!</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
     inputText: '입력하세요',
     result: 0
    }
  },
  methods: {
   btn_ev(){
    this.result = this.inputText;
    document.getElementById("result").style.display = "block";
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
div{
  margin: 20px;
}
span{
  font-size: 15px;
  font-weight: 600;
}
#result{
  color: red;
  font-size: 20px;
  font-weight: 600;
}
</style>
