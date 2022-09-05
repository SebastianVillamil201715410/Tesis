const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC59 extends Model {}

BAC59.init(
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
      tipoDocumentacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      macroprocesoId: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC59",
    }
  );

  module.exports = BAC59;