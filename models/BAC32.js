const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC32 extends Model {}

BAC32.init(
    {
      
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      responsablesId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      procedimientosId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      recursosId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC32",
    }
  );

  module.exports = BAC32;