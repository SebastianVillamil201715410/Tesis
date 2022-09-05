const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class cliente extends Model {}

cliente.init(
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
      modelName: "cliente",
    }
  );
  

  module.exports = cliente;