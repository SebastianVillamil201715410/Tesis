const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC69AFuncionalidades extends Model {}

BAC69AFuncionalidades.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
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
      modelName: "BAC69AFuncionalidades",
    }
  );

  module.exports = BAC69AFuncionalidades;