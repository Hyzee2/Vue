<template>
    <div class="child">
    <h1>Component2</h1>
    <h3>{{ childData[0] }}</h3>
    <h4>{{ childData[1] }}</h4>
    <h2>{{ childData2.name }} // {{ childData2.age }}</h2>
    <button @click="btn_ev">부모 호출</button>
</div>
</template>
  
<script>
  export default {
    name: 'App',
    //props: ['childData'], // 부모가 건네준 데이터는 props에 배열로 담기 가능하다. 
    props: { // 부모가 건네준 데이터를 선언
        childData:{
           type: String, //데이터 타입
           default: 'zero', // 데이터가 null일 때 디폴트 값
           required : true // null 허용 여부
        },
        childData2: Object,
    },
    data() {
      return {
        
      }
    },
    methods: {
        btn_ev(){
            this.$emit('getChild', '값');
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
  }
  .child{
    width: 100%;
    height: 500px;
    border: blue 2px solid;
  }
</style>