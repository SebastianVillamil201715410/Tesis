const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC17 extends Model {}

BAC17.init(
    {
      idEmpresa: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      empresa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      propositoSuperior: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      objetivoRetador: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      vision: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      mision: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC17",
    }
  );
  
  module.exports = BAC17;