<template>
  <div id="app">
      <h1>Todo List Ahmet Gazel Staj Proje</h1>
      <todo-list></todo-list>
  </div>
</template>

<script>
import TodoList from './components/TodoList.vue';

export default {
  name: 'App',
  components: {
      TodoList
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
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  max-width: 600px;
  margin: 60px auto;
}
h1 {
  font-size: 2em;
  margin-bottom: 20px;
}
input {
  padding: 10px;
  width: 80%;
  margin-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
button {
  padding: 10px;
  border: 1px solid #007BFF;
  background-color: #007BFF;
  color: white;
  border-radius: 5px;
  cursor: pointer;
}
button:hover {
  background-color: #0056b3;
}
ul {
  list-style-type: none;
  padding: 0;
}
</style>
