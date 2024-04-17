<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/join">Join</router-link> |
    <router-link to="/form">Form</router-link> |
    <router-link to="/score">Score</router-link> |
    <router-link to="/for">For</router-link> |
    <router-link to="/comp">Component</router-link> |
    <router-link to="/axios">Axios</router-link>
  </nav>
  <router-view/>
 
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 15px;
  background-color: #4f453c;
  border-radius: 10px;
  margin-bottom: 20px;
  color: #ffffff;
}

nav a {
  
  color: #ffffff;
  padding: 20px;
}

nav a.router-link-exact-active {
  color: #FFB53C;
  font-weight: bold;
}
</style>
