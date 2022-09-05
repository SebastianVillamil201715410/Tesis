const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC62CModulos extends Model {}

BAC62CModulos.init(
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
      modelName: "BAC62CModulos",
    }
  );

  module.exports = BAC62CModulos;