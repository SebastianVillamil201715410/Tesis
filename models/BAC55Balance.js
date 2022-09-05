const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC55Balance extends Model {}

BAC55Balance.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      patrimonio: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      activoCorriente: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      activoNoCorriente: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      totalActivos: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      pasivoCorriente: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      pasivoNoCorriente: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      totalPasivo: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      razonCorriente: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      razonEndeudamiento: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      apalancamientoFinanciero: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      concentracion: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC55Balance",
    }
  );
  
  module.exports = BAC55Balance;  