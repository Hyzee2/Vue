<template>
<h1>설문조사</h1>
<table id="form">
  <tr>
    <td class="bgcolor">좋아하는 음식</td>
    <td><input type="text" v-model="likeFood"></td>
  </tr>
  <tr>
    <td class="bgcolor">최근 1주일 동안 먹은 횟수</td>
    <td>
      <select name="count" v-model="cnt">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </td>
  </tr>
  <tr>
    <td class="bgcolor">국내 음식 여부</td>
    <td>
      <input type="radio" name="food" value="국내음식" v-model="sortFood">국내음식
      <input type="radio" name="food" value="해외음식" v-model="sortFood">해외음식
    </td>
  </tr>
</table>
<br>
<button @click="submit">제출완료</button>
<h4 style="margin-top: 30px">설문 완료</h4>
<table id="result">
  <tr>
    <td class="bgcolor">좋아하는 음식</td>
    <td><span name="result" :class="{default : isDefault}">{{ likeFood }}</span></td>
  </tr>
  <tr>
    <td class="bgcolor">최근 1주일 동안 먹은 횟수</td>
    <td><span name="result" :class="{default : isDefault}">{{ cnt }}</span></td>
  </tr>
  <tr>
    <td class="bgcolor">국내 음식 여부</td>
    <td><span name="result" :class="{default : isDefault}">{{ sortFood }}</span></td>
  </tr>
</table>

</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      likeFood: '',
      cnt: 0,
      sortFood: '',
      isDefault: true
    }
  },
  methods: {
    submit(){
      let arr = document.getElementsByName("result");
      for(let i=0; i<arr.length; i++){
        arr[i].style.display = "inline-block";
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
  margin-top: 30px;
}
#form {
  margin-left: auto;
  margin-right: auto;
  width: max-content;
  border: 1px solid black;
  border-collapse: collapse;
}
#result{
  margin-left: auto;
  margin-right: auto;
  width: max-content;
  border-collapse: collapse;
}
table tr th, table tr td {
  border: none;
  padding: 15px 10px 15px 10px;
}

table tr th {
  text-align: left;
  width: 100%;
  background-color: rgb(226, 197, 197);
}

table tr td {
  text-align: left;
}

input[type="text"] {
  height: 30px;
}

select {
  width: 50px;
  height: 30px;
}

button {
  width: 100px;
  height: 30px;
  margin: 30px;
  padding: 5px;
  border-radius: 15px;
  border: none;
  background-color:lightblue;
  color: #2c3e50;
  font-size: 15px;
  font-weight: bold;
  margin: 2px;
  align-content: center;
}

.default{
  display: none;
}

.bgcolor{
  background-color: rgb(205, 183, 176);
}
</style>
