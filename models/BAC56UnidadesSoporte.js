const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC56Cargos = require("./BAC56Cargos");
const BAC56ServiciosInternos = require("./BAC56ServiciosInternos");

class BAC56UnidadesSoporte extends Model {}

BAC56UnidadesSoporte.init(
    {
      unidadSoporteId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      nombreUnidad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      unidadPertenece: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC56UnidadesSoporte",
    }
  );
  
  BAC56UnidadesSoporte.belongsTo(BAC56Cargos,{foreignKey: "cargosComiteId",});
  BAC56UnidadesSoporte.belongsTo(BAC56ServiciosInternos,{foreignKey: "serviciosInternosId",});

  module.exports = BAC56UnidadesSoporte;
  