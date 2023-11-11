
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('task-bord-database', 'root', '12321', {
    host: 'localhost',
    dialect:  'mysql' 
  });

  try {
   sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  sequelize.sync({force:false})

  module.exports=sequelize