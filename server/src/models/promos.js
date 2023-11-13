const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "Promos",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      image: {
        type: DataTypes.STRING,
      },
    },
    { timestamps: false }
  );
};