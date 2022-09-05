const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC56FuncionesComite extends Model {}

BAC56FuncionesComite.init(
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
      modelName: "BAC56FuncionesComite",
    }
  );

  module.exports = BAC56FuncionesComite;