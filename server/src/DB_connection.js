require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const { menu, promos } = require("./models/index");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/restobase`,
  { logging: false }
);

menu(sequelize)
promos(sequelize)

const { Menu, Promos } = sequelize.models;

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};