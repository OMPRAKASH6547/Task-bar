const { DataTypes } = require('sequelize');
const sequelize=require("./index")
const Task = sequelize.define('Task', {
  // Model attributes are defined here
  taskIdem: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
}, {
  // Other model options go here
  tableName:'Tasks'
});

// `sequelize.define` also returns the model
console.log(Task=== sequelize.models.Task); // true

module.exports=Task;