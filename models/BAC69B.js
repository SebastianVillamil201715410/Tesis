const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC69B extends Model {}

BAC69B.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      justificacion: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      descripcionRequerimiento: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC69B",
    }
  );

  module.exports = BAC69B;