const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC30 extends Model {}

BAC30.init(
    {
      
      procesoId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      nombreProceso: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      objetivoProceso: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      actividadId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      descripcionActividad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC30",
    }
  );

  module.exports = BAC30;