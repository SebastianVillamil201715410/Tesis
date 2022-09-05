const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC61BConceptos extends Model {}

BAC61BConceptos.init(
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
      uso: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC61BConceptos",
    }
  );
  
  module.exports = BAC61BConceptos;