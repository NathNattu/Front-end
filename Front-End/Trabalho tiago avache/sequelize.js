const  {Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define(
    'user',
{
    firstNmae:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    lastNaME:{
        type: DataTypes.STRING
    },
},
{

},
);
