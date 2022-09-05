const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC57Primario extends Model {}

BAC57Primario.init(
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
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC57Primario",
    }
  );

  module.exports = BAC57Primario;