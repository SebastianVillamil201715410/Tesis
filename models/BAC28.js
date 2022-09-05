const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC28 extends Model {}

BAC28.init(
    {
      
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      rol: {
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
      modelName: "BAC28",
    }
  );

  module.exports = BAC28;