const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC18 extends Model {}

BAC18.init(
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
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC18",
    }
  );
  
  module.exports = BAC18;