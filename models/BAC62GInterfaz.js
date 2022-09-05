const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC62GInterfaz extends Model {}

BAC62GInterfaz.init(
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
      modelName: "BAC62GInterfaz",
    }
  );

  module.exports = BAC62GInterfaz;