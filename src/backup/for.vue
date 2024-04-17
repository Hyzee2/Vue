<template>
    <h1>for문</h1>
    for문 연습하기
    <div v-for="(메뉴, i) in menu" :key="메뉴">
        {{ 메뉴 }}
        {{ i }}
    </div>
    <div v-for="(가격,i) in price" :key="가격">
        {{ 가격 }}  // {{ menu[i] }}
    </div>
    <br><br>
    <div v-for="(li) in menuPlus" :key="li.name"> 
        지역: {{ li.name }} / 가격: {{ li.price }}원
    </div>
  
</template>
  
<script>
  export default {
    name: 'App',
    data() {
      return {
        menu: ['우동', '짜장면', '메밀'],
        price: [2000, 3000, 4000],
        menuPlus: [
            {name: '강남', price: 1000},
            {name: '서초', price: 2000},
            {name: '동작', price: 3000}
        ]
      }
    },
    components: {
    }
  }
</script>
  
<style>
.hambugerName {
  font-size: 30px;
  margin: 10px;
  font-weight: bold;
  color: blue;
}
.hambugerPrice {
  font-size: 20px;
  margin-bottom: 10px;
  font-weight: bold;
  color:green
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
</style>