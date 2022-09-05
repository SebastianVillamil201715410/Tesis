const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC19 extends Model {}

BAC19.init(
    {
      idIndicador: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      valorObjetivo: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      valorInicial: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC19",
    }
  );
  
  module.exports = BAC19;