const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC20Metas extends Model {}

BAC20Metas.init(
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
      modelName: "BAC20Metas",
    }
  );
  
  module.exports = BAC20Metas;