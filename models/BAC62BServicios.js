const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC62BServicio extends Model {}

BAC62BServicio.init(
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
      tipoServicio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ANS: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC62BServicio",
    }
  );

  module.exports = BAC62BServicio;