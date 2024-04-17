<template>
  <img src="../assets/img_DancingLion.png" style="width: 150px;">
  <h1>학생 성적 등록하기</h1>
  이름<input type="text" v-model="name"><br>
  국어점수<input type="text" v-model="kor"><br>
  영어점수<input type="text" v-model="eng"><br>
  수학점수<input type="text" v-model="mat"><br>
  <span id="total">총 합계: {{ total }}</span><br><br>
  <div style="display: inline-block;"><button style="margin: 10px; width: 120px" @click="btn_stu">성적추가</button></div>
  <div style="display: inline-block;"><button style="margin: 10px; width: 120px" @click="btn_stuList">받아오기 테스트</button></div>
  <div style="display: inline-block;"><button style="margin: 10px; width: 120px" @click="btn_modi">성적수정하기</button></div><br>

  <div v-for="li in stuList" :key="li.name">
  이름: {{ li.name }}&nbsp;국어: {{ li.kor }}&nbsp;영어: {{ li.eng }}&nbsp;수학: {{ li.mat }}
  <div><span>=====================================================</span></div>
  </div>
  

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
      objStu: {
        name: '',
        kor: 0,
        eng: 0,
        mat: 0
      }
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
    },
    stuList(){
      return this.$store.getters.getStudentList; // btn_stuList에서 list에 넣었던 this.$store....를 감시자에 준다. 위에서 감시자 for문으로 반복
    }
  },
  methods: {
    btn_stu(){ // 성적추가 버튼
      this.objStu = new Object; 
      this.objStu.name = this.name; // Object의 변수를 따로 선언하지 않고도 바로 가능 
      this.objStu.kor = this.kor;
      this.objStu.eng = this.eng;
      this.objStu.mat = this.mat;
      
      console.log(this.objStu);

      this.$store.commit('addStu', this.objStu); // 커밋해야지 store의 데이터 값이 바뀐다
    },
    btn_stuList(){ // 받아오기 테스트 버튼 
      let list = this.$store.getters.getStudentList;
      console.log(list);
    },
    btn_modi(){
      this.objStu = new Object; 
      this.objStu.name = this.name; 
      this.objStu.kor = this.kor;
      this.objStu.eng = this.eng;
      this.objStu.mat = this.mat;
      this.$store.commit('modiStu', this.objStu);
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
