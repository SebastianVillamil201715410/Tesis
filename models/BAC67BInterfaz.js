const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC67BInterfaz extends Model {}

BAC67BInterfaz.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      URL: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipoTecnologia: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      seguridad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC67BInterfaz",
    }
  );

  module.exports = BAC67BInterfaz;