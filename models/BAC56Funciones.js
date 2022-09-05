const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC56Funciones extends Model {}

BAC56Funciones.init(
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
      modelName: "BAC56Funciones",
    }
  );

  module.exports = BAC56Funciones;