const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC56ServiciosInternos extends Model {}

BAC56ServiciosInternos.init(
    {
      idServicio: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      nombreServicio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcionServicio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC56ServiciosInternos",
    }
  );

  module.exports = BAC56ServiciosInternos;