const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

let todos = [];

app.get('/api/todos', (req, res) => {
    res.json(todos);
});

app.post('/api/todos', (req, res) => {
    const todo = { id: Date.now(), text: req.body.text, status: 'pending' };
    todos.push(todo);
    res.json(todo);
});

app.put('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const status = req.body.status;
    const todo = todos.find(t => t.id === id);
    if (todo) {
        todo.status = status;
        res.json(todo);
    } else {
        res.status(404).send('Todo not found');
    }
});

app.delete('/api/todos/:id', (req, res) => {
    const id = parseInt(req.params.id);
    todos = todos.filter(t => t.id !== id);
    res.sendStatus(204);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
