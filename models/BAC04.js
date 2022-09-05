const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC04 extends Model {}

BAC04.init(
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
      modelName: "BAC04",
    }
  );
  
  module.exports = BAC04;
  