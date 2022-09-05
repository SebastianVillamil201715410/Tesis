const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC57Soporte extends Model {}

BAC57Soporte.init(
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
      modelName: "BAC57Soporte",
    }
  );

  module.exports = BAC57Soporte;