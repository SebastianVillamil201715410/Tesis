const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC01 extends Model {}

BAC01.init(
    {
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipo: {
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
      modelName: "BAC01",
    }
  );
  
  module.exports = BAC01;
  