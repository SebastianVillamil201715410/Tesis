const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC10 extends Model {}

BAC10.init(
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
      definicion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC10",
    }
  );
  
  module.exports = BAC10;