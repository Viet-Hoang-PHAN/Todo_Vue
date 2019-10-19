const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const mongoose = require('mongoose')

const Todo = require("./models/Todo")

mongoose.connect(`mongodb+srv://Viet-Hoang:26Juin96@clustertest-iiq48.mongodb.net/todolist?retryWrites=true&w=majority`)
    .then(() => {
        console.log('Database connected')
    })

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use ((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, DELETE, OPTIONS");
    next();
})

app.post("/api/todo", (req, res, next) => {
    console.log(req.body)
    const todo = new Todo({
        title: req.body.title,
        content: req.body.content,
        done: req.body.done
    })
    todo.save()
    res.status(201).json({
        message: "todo added successfully",
        data: todo
    })
})

app.get("/api/todo", (req, res, next) => {
    todo.find().then(documents => {
        console.log(documents)
        res.status(200).json({
            message: "OK",
            todos: documents
        })
    })
})

app.use((req, res, next) => {
    res.send('Hello from express !')
})

module.exports = app;