<template>
    <li :class="statusClass">
        <div v-if="isEditing">
            <input v-model="editText" @keyup.enter="updateTodo">
            <button @click="updateTodo">✔️</button>
            <button @click="cancelEdit">❌</button>
        </div>
        <div v-else>
            <span>{{ todo.text }}</span>
            <button @click="editTodo">🔼</button>
            <button @click="deleteTodo">🗑️</button>
        </div>
    </li>
</template>

<script>
export default {
    props: ['todo'],
    data() {
        return {
            isEditing: false,
            editText: this.todo.text
        };
    },
    methods: {
        deleteTodo() {
            this.$emit('delete', this.todo.id);
        },
        editTodo() {
            this.isEditing = true;
        },
        cancelEdit() {
            this.isEditing = false;
            this.editText = this.todo.text;
        },
        updateTodo() {
            if (this.editText.trim() === '') return;
            this.$emit('update-todo', this.todo.id, this.editText);
            this.isEditing = false;
        }
    },
    computed: {
        statusClass() {
            return {
                'completed': this.todo.status === 'completed',
                'ignored': this.todo.status === 'ignored'
            };
        }
    }
}
</script>

<style scoped>
li {
    list-style: none;
    margin: 5px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
button {
    margin-left: 5px;
    cursor: pointer;
    border: none;
    background: none;
    font-size: 1.2em;
}
button:hover {
    color: #007BFF;
}
input {
    flex: 1;
    margin-right: 5px;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
.completed {
    background-color: green;
    color: white;
}
.ignored {
    background-color: red;
    color: white;
}
</style>
