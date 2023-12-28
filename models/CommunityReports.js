// models/CommunityReports.js
const { Sequelize, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const CommunityReports = sequelize.define('CommunityReports', {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'UserProfiles',
        key: 'id',
      },
    },
    reportTitle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    reportDescription: {
      type: DataTypes.TEXT,
    },
    reportDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  }, {
    timestamps: false,
  });

  return CommunityReports;
};
