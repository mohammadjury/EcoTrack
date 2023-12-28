// models/EnvironmentalAlerts.js
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const EnvironmentalAlerts = sequelize.define('EnvironmentalAlerts', {
   
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    alertType: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    threshold: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
}, {
    timestamps: false, // disable timestamps
  });

  return EnvironmentalAlerts;
};
