const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const dbConnect = require('./dbConnect')
const Todo = require('./models/todoModel')

dotenv.config()
dbConnect()
const PORT = process.env.PORT || 3001

const app = express()
app.use(express.json())
app.use(cors())

app.get('/todo', async (req, res) => {
    const todo = await Todo.find()

    res.json(todo)
})

app.post('/todo/new', async (req, res) => {
    const todo = new Todo({
        text: req.body.text
    })

    todo.save()
    res.json(todo)
})

app.put('/todo/:id', async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    todo.text = req.body.text
    todo.save()

    res.json(todo)
})

app.delete('/todo/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id)
    res.json({ message: 'ok' })
})

app.listen(PORT, () => console.log('Server started'))