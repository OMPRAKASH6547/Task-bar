const express = require('express')
const cors = require("cors")
const app = express()
var userCtr=require('./controller/userController')
var taskController=require('./controller/TaskController')


const User=require("./models/User")
const Task=require("./models/Task")


var bodyParser = require('body-parser')
app.use(cors())
app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/add',userCtr.addUser)

app.get('/users',userCtr.getUser)

app.get('/users/:id',userCtr.getUserbyid)

app.post('/creatUser',userCtr.postUser)

app.delete('/deletUser/:id',userCtr.deletUser)
app.patch('/updateUser/:id',userCtr.updateUser)

//deletUser


// app.get('/add',userCtr.getUser)


// User.sync({force:true});

// User.sync()
// User.drop()



//this is for task

app.get("/addtask",taskController.addTask)

//get task
app.get("/Task",taskController.getTask)
//get task by id
// getTaskById
app.get("/Task/:id",taskController.getTaskById)

//delete task
app.delete("/deleteTask/:id",taskController.deletTaskbyId)

//send task in a bulk
app.post('/creatTask',taskController.postTask)

//update

app.patch("/updateTask/:id",taskController.updateTaskById)











app.listen(5000,()=>{
    console.log("runing server")
})