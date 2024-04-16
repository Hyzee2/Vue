<template>
  <img alt="dancing lion" src="./assets/img_DancingLion.png" style="width: 100px;">
  <h1>학생 성적 등록하기</h1>
  이름<input type="text" v-model="name"><br>
  국어점수<input type="text" v-model="kor"><br>
  영어점수<input type="text" v-model="eng"><br>
  수학점수<input type="text" v-model="mat"><br>
  <span>총 합계: {{ total }}</span>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      name: '',
      kor: 0,
      eng: 0,
      mat: 0,
    }
  },
  watch: {
    name(){
      this.kor = 0;
      this.eng = 0;
      this.mat = 0;
    }
  },
  computed: {
    total(){
      return parseInt(this.kor)+parseInt(this.eng)+parseInt(this.mat);
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
input{
  margin: 5px;
  width: 100px;
}
span{
  color: rgb(155, 139, 215);
  font-weight: bold;
  font-size: larger;
}
</style>
