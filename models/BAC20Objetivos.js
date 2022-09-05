const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC20Objetivos extends Model {}

BAC20Objetivos.init(
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
      modelName: "BAC20Objetivos",
    }
  );
  
  module.exports = BAC20Objetivos;