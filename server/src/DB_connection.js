require('dotenv').config()
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { menu , promos } = require('./models/index')

const sequelize = new Sequelize(`postgresql://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/restobase`, {
logging: false
});


module.exports = {
  menu,
  promos,
  conn: sequelize,
};
