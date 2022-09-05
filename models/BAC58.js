const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC58 extends Model {}

BAC58.init(
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
      modelName: "BAC58",
    }
  );

  module.exports = BAC58;