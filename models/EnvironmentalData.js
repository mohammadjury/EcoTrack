const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const EnvironmentalData = sequelize.define('EnvironmentalData', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    timestamp: {
      type: DataTypes.DATE,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    airQuality: {
      type: DataTypes.FLOAT,
    },
    temperature: {
      type: DataTypes.FLOAT,
    },
    humidity: {
      type: DataTypes.FLOAT,
    },
    waterQuality: {
      type: DataTypes.FLOAT,
    },
    biodiversityMetrics: {
      type: DataTypes.FLOAT,
    },
    
  }, {
    timestamps: false, //disable timestamps
  });

  return EnvironmentalData;
};
