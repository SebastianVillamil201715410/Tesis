const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC63IndicadoresExternos extends Model {}

BAC63IndicadoresExternos.init(
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
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fuente: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC63IndicadoresExternos",
    }
  );

  module.exports = BAC63IndicadoresExternos;