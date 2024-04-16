<template>
<h1><span>전체 주문 수: </span><span id="total">{{total}}</span></h1>

<h2>{{ foodMenu.food1.menu }}</h2>
<h3><span>주문 중: </span><span>{{ foodMenu.food1.order }}</span></h3>
<button @click="ordering(0)">주문하기</button>

<h2>{{ foodMenu.food2.menu }}</h2>
<h3><span>주문 중: </span><span>{{ foodMenu.food2.order }}</span></h3>
<button @click="ordering(1)">주문하기</button>

<h2>{{ foodMenu.food3.menu }}</h2>
<h3><span>주문 중: </span><span>{{ foodMenu.food3.order }}</span></h3>
<button @click="ordering(2)">주문하기</button><br>

<div></div>

<span>{{ like }}</span>&nbsp;&nbsp;<button @click="counting">좋아요</button>

</template>

<script>
export default {
  name: 'App',
  data(){
    return{
     total: 0,
     like: 0,
     foodMenu: {
      food1:{menu: '음식1', order: 0},
      food2:{menu: '음식2', order: 0},
      food3:{menu: '음식3', order: 0}
    }
    }
  },
  methods: {
    ordering(index){
      // this.order[index-1]++;
      // this.total++;
      // this.likeCnt(this.total);
      switch(index){
        case 0: 
          this.foodMenu.food1.order++;
          this.total++;
          this.likeCnt(this.total);
          break;
        case 1:
          this.foodMenu.food2.order++;
          this.total++;
          this.likeCnt(this.total);
          break;
        case 2:
          this.foodMenu.food3.order++;
          this.total++;
          this.likeCnt(this.total);
          break;
      }
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
