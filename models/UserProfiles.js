// models/UserProfiles.js
const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  const UserProfiles = sequelize.define('UserProfiles', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
}, {
    timestamps: false,
  });

  return UserProfiles;
};
