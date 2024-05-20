<template>
    <div>
        <input v-model="newTodoText" placeholder="Add a new todo - Yeni Yapılacak Ekle" @keyup.enter="addTodo">
        <button @click="addTodo">Add</button>
        <ul>
            <todo-item
                v-for="todo in todos"
                :key="todo.id"
                :todo="todo"
                @delete="deleteTodo"
                @update-todo="updateTodo">
            </todo-item>
        </ul>
    </div>
</template>

<script>
import axios from 'axios';
import TodoItem from './TodoItem.vue';

export default {
    components: {
        TodoItem
    },
    data() {
        return {
            todos: [],
            newTodoText: ''
        };
    },
    methods: {
        fetchTodos() {
            axios.get('http://localhost:3000/api/todos')
                .then(response => {
                    this.todos = response.data;
                });
        },
        addTodo() {
            if (this.newTodoText.trim() === '') return;
            axios.post('http://localhost:3000/api/todos', { text: this.newTodoText })
                .then(response => {
                    this.todos.push(response.data);
                    this.newTodoText = '';
                });
        },
        deleteTodo(id) {
            axios.delete(`http://localhost:3000/api/todos/${id}`)
                .then(() => {
                    this.todos = this.todos.filter(todo => todo.id !== id);
                });
        },
        updateTodo(id, text) {
            axios.put(`http://localhost:3000/api/todos/${id}`, { text })
                .then(() => {
                    const todo = this.todos.find(todo => todo.id === id);
                    if (todo) {
                        todo.text = text;
                    }
                });
        }
    },
    mounted() {
        this.fetchTodos();
    }
}
</script>

<style scoped>
input {
    padding: 8px;
    font-size: 1em;
    margin-right: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
button {
    padding: 8px;
    font-size: 1em;
    cursor: pointer;
    border: 1px solid #007BFF;
    background-color: #007BFF;
    color: white;
    border-radius: 5px;
}
button:hover {
    background-color: #0056b3;
}
ul {
    list-style-type: none;
    padding: 0;
}
</style>
