const { Model, build, where } = require("sequelize");

var db = require('../models')
var Task= require("../models/Task");


const addTask= async (req, res) => {
  const  task=Task.build({ taskIdem: "this is my first task"});
    console.log(task instanceof Task); // true
    task.set({ taskIdem: "this is my first task"})
    await task.save()
    res.status(200).json(task.toJSON());    
}

const getTask= async (req, res) => {
    const data =await Task.findAll({});
    console.log(data)
    res.status(200).json({ data:data}); 
  }

  const getTaskById=async (req, res) => {
    const task =await Task.findOne({
        where:{
            id:req.params.id
        }
    });
    // res.status(200).json({ task:task});
}

const postTask= async (req, res) => {
    const postdata = req.body;
    if (postdata.length > 1) {

        const task = Task.bulkCreate(postdata);
    } else {
        const task = Task.create(postdata);

    }
    res.status(200).json({task:""});
}

var deletTaskbyId = async (req, res) => {
    const data = Task.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    );
    res.status(200).json({ data: data });
}

const updateTaskById=async (req, res) => {
    const updateData = req.body

    const data = Task.update(updateData,
        {
            where: {
                id: req.params.id
            }
        }
    );
    res.status(200).json({ data: data });}

module.exports = {
    addTask,
    getTask,
    getTaskById,
    postTask,
    deletTaskbyId,
    updateTaskById
}