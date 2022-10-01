const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC26 extends Model {}

BAC26.init(
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
      modelName: "BAC26",
    }
  );

  module.exports = BAC26;