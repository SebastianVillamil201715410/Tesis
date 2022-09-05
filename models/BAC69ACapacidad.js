const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC69ACapacidad extends Model {}

BAC69ACapacidad.init(
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
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC69ACapacidad",
    }
  );

  module.exports = BAC69ACapacidad;