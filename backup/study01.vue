<template>
  <img alt="logo" src="./assets/img_DancingLion.png">
  <h1 v-bind:style="color">Hello World</h1>
  <span>
    <h2>
      Welcome Monday!<br>
      <span :class="{active: set}">Class</span>
      This is {{ data }}!!<br><br>
      I'm {{ name }}<br>
      오늘의 점메추: {{ menu[0] }}<br>
      오늘의 점메추: {{ menu[1] }}<br>
      오늘의 저메추: {{ menu[2] }}<br><br>
     <span :class="{style: set}">
      과일이름: {{ fru.key1 }}<br>
      과일이름: {{ fru.key2 }}<br>
      과일이름: {{ fru.key3 }}
     </span>
    </h2>
  </span>
</template>

<script>
export default {
  name: 'App',
  data(){
    return{
      data: 'Hello World',
      name: 'KAKAO Lion',
      menu: ['된장찌개', '김치찌개', '초밥'],
      color: 'blue',
      set: true,
      fru: {key1: '사과', key2: '바나나', key3: '딸기'} 
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
.active{
  font-size: 40px;
  color: rgb(204, 123, 82);
}
.style{
  font-size: 30px;
  color: rgb(248, 35, 35);
}
</style>
