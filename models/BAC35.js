const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC35 extends Model {}

BAC35.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      instrumentoMedicion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      precision: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      confiabilidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      frecuencia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      visualizacionResultado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      conceptos: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC35",
    }
  );

  module.exports = BAC35;