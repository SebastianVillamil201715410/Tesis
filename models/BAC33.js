const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC31 = require("./BAC31");

class BAC33 extends Model {}

BAC33.init(
    {
      paqueteId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      nombrePaquete: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      subpaqueteId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      nombreSubpaquete: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      nombreCapacidadNegocio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC33",
    }
  );
  
  BAC33.belongsTo(BAC31,{foreignKey: "capacidadNegocioId",});

  module.exports = BAC33;