const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class proyecto extends Model {}

proyecto.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "proyecto",
    }
  );

  module.exports = proyecto;