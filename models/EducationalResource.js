// models/EducationalResource.js
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const EducationalResource = sequelize.define('EducationalResource', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  return EducationalResource;
};
