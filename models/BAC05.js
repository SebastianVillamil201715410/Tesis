const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC05 extends Model {}

BAC05.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC05",
    }
  );
  
  module.exports = BAC05;
  