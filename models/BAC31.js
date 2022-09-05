const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC31 extends Model {}

BAC31.init(
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
      critica: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC31",
    }
  );

  module.exports = BAC31;