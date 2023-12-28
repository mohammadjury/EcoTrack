// models/SustainabilityScore.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const SustainabilityScore = sequelize.define('SustainabilityScore', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    
    userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },

    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
    
    category: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  return SustainabilityScore;
};
