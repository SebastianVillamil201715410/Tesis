const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC02 extends Model {}

BAC02.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primarykey: true,
        allowNull: false,
      },
      nombre: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      objetivoNegocio: {
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
      modelName: "BAC02",
    }
  );
  
  module.exports = BAC02;
  