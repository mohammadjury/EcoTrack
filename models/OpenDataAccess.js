// models/OpenDataAccess.js
const { DataTypes } = require('sequelize');
const { Op } = require('sequelize');


module.exports = (sequelize) => {
  const OpenDataAccess = sequelize.define('OpenDataAccess', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    researcherId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dataId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
}, {
    timestamps: false,
  });

  

  return OpenDataAccess;
};
