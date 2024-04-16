<template>
<h1><span>전체 주문 수: </span><span id="total">{{total}}</span></h1>

<h2>{{ menu[0] }}</h2>
<h3><span>주문 중: </span><span>{{ order[0] }}</span></h3>
<button @click="ordering(1)">주문하기</button>

<h2>{{ menu[1] }}</h2>
<h3><span>주문 중: </span><span>{{ order[1] }}</span></h3>
<button @click="ordering(2)">주문하기</button>

<h2>{{ menu[2] }}</h2>
<h3><span>주문 중: </span><span>{{ order[2] }}</span></h3>
<button @click="ordering(3)">주문하기</button><br>

<div></div>

<span>{{ like }}</span>&nbsp;&nbsp;<button @click="counting">좋아요</button>

</template>

<script>
export default {
  name: 'App',
  data(){
    return{
     total: 0,
     menu: ['음식1', '음식2', '음식3'],
     order: [0, 0, 0],
     like: 0
    }
  },
  methods: {
    ordering(index){
      this.order[index-1]++;
      this.total++;
      this.likeCnt(this.total);
    },
    likeCnt(total){
      this.like = total;
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
  margin: 50px;
}
</style>
