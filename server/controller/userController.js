const { Model, build, where } = require("sequelize");

var db = require('../models')
var User = require("../models/User");

var addUser = async (req, res) => {
    const jane = User.build({ username: "Jane", password: "12345" });
    console.log(jane instanceof User); // true
    jane.set({ username: "Jane", password: "12345" })
    console.log(jane.username); // "Jane"
    await jane.save()
    res.status(200).json(jane.toJSON());
}

var getUser = async (req, res) => {
    const data =await User.findAll({});
    console.log(data)
    res.status(200).json({ data:data});
}
var getUserbyid = async (req, res) => {
    const data =await User.findOne({
        where:{
            id:req.params.id
        }
    });
    console.log(data)
    res.status(200).json({ data:data});
}

var postUser = async (req, res) => {
    const postdata = req.body;
    if (postdata.length > 1) {

        const data = User.bulkCreate(postdata);
    } else {
        const data = User.create(postdata);

    }
    res.status(200).json({ data: data });
}

var deletUser = async (req, res) => {
    const data = User.destroy(
        {
            where: {
                id: req.params.id
            }
        }
    );
    res.status(200).json({ data: data });
}

var updateUser = async (req, res) => {
    const updateData = req.body

    const data = User.update(updateData,
        {
            where: {
                id: req.params.id
            }
        }
    );
    res.status(200).json({ data: data });
}




module.exports = {
    addUser,
    getUser,
    postUser,
    deletUser,
    updateUser,
    getUserbyid
}


