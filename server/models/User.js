const { DataTypes } = require('sequelize');
const sequelize=require("./index")
const User = sequelize.define('User', {
  // Model attributes are defined here
  username: {
    type: DataTypes.STRING,
    allowNull: false
  },
  password: {
    type: DataTypes.STRING
    // allowNull defaults to true
  }
}, {
  // Other model options go here
  tableName:'Users'
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

module.exports=User;