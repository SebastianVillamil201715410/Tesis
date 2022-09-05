const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC60B extends Model {}

BAC60B.init(
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
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC60B",
    }
  );

  module.exports = BAC60B;