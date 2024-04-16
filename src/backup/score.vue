<template>
  <img src="../assets/img_DancingLion.png" style="width: 150px;">
  <h1>학생 성적 등록하기</h1>
  이름<input type="text" v-model="name"><br>
  국어점수<input type="text" v-model="kor"><br>
  영어점수<input type="text" v-model="eng"><br>
  수학점수<input type="text" v-model="mat"><br>
  <span id="total">총 합계: {{ total }}</span><br><br>
  <div><button @click="btn_stu()">성적추가</button></div>
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
  methods: {
    btn_stu(){
      let obj = new Object; 
      obj.name = this.name; // Object의 변수를 따로 선언하지 않고도 바로 가능 
      obj.kor = this.kor;
      obj.eng = this.eng;
      obj.mat = this.mat;
      
      console.log(obj);

      this.$store.commit('addStu', obj);
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
#total{
  color: rgb(155, 139, 215);
  font-weight: bold;
  font-size: larger;
}
</style>
