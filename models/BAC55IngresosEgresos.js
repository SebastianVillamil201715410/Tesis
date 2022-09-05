const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC55IngresosEgresos extends Model {}

BAC55IngresosEgresos.init(
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
      totalIngresosOperacionales: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      totalIngresosNoOperacionales: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      totalIngresos: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      totalCostos: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      totalGastos: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      totalEngresosOperacionales: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      totalEgresosNoOperacionales: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      totalEgresos: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      amortizacionDeuda: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      interesesDeuda: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      depreciacionActivos: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      pagoImpuestos: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      utilidadBruta: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      margenBruto: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      EBITDA: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      porcentajeEBITDA: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      utilidadNeta: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      margenNeto: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC55IngresosEgresos",
    }
  );
  
  module.exports = BAC55IngresosEgresos;  