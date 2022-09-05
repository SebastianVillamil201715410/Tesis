const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC55FlujoCaja extends Model {}

BAC55FlujoCaja.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      desde: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      hasta: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      saldoInicial: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      totalIngresosPeriodo: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      totalEgresosPeriodo: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      saldoFinal: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      indicadoresFinancierosFlujoCaja: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC55FlujoCaja",
    }
  );
  
  module.exports = BAC55FlujoCaja;  