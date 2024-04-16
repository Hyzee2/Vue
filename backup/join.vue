<template>
<h1>회원가입</h1>
<span :class="{'active': isActive, 'text-red': hasError}">StyleHead</span>
<div :style="mar">
  <h4 style="display: inline-block">회원 아이디</h4>&nbsp;
  <input id="id" type="text" v-model="inputId" :disabled="mem_check">&nbsp;
  <button :style="[스타일1, 스타일2]" @click="checkId">중복체크</button>
</div>
<div :style="mar">
  <h4 style="display: inline-block;">회원 닉네임</h4>&nbsp;
  <input type="text" v-model="inputName">
</div>
<div :style="mar">
  <h4 style="display: inline-block;">좋아하는 숫자는?</h4>
  <select name="num" id="num" :style="mar" v-model="inputNum">
    <option value="1">1</option>
    <option value="2">2</option>
    <option value="3">3</option>
    <option value="4">4</option>
    <option value="5">5</option>
  </select>
</div>
<div style="margin-bottom: 20px;">
  <input type="radio" name="tr" v-model="mem_tr" value="해외">해외
  <input type="radio" name="tr" v-model="mem_tr" value="국내">국내
</div>
<div style="margin-bottom: 20px;">
  <input type="checkbox" name="ch" v-model="mem_ch" value="빨강">빨강
  <input type="checkbox" name="ch" v-model="mem_ch" value="노랑">노랑
  <input type="checkbox" name="ch" v-model="mem_ch" value="파랑">파랑
</div>
<div :style="mar">
  <button :style="[스타일1, 스타일2, mar]" @click="showMem">회원가입</button>&nbsp;
  <h4 id="result" style="display: none;" :style="mar">{{ inputId }} {{inputName}} {{ inputNum }} {{ mem_tr }} {{ mem_ch }}</h4>
</div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      inputId: 'test',
      inputName: '1234',
      inputNum: 1,
      mem_check: false,
      스타일1: 'color : white',
      스타일2: 'backgroundColor : #2c3e50',
      mar: 'margin : 3px',
      isActive: true,
      hasError: false,
      mem_tr: '',
      mem_ch: [],
    }
  },
  methods: {
    showMem(){
      document.getElementById("result").style.display = "inline-block";
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
.headSpan{
  margin: 50px;
  font-weight: bold;
}
.active{
  font-weight: bold;
  font-size: 50px;
  color: rgb(25, 25, 232);
  background-color: rgb(245, 229, 18);
}
.text-red{
  color: red;
}
</style>
