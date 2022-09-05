const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC12 extends Model {}

BAC12.init(
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
      modelName: "BAC12",
    }
  );
  
  module.exports = BAC12;