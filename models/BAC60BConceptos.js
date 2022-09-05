const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC60BConceptos extends Model {}

BAC60BConceptos.init(
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
      modelName: "BAC60BConceptos",
    }
  );
  
  module.exports = BAC60BConceptos;