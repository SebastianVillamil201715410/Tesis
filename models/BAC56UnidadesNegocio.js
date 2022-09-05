const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC56Cargos = require("./BAC56Cargos");

class BAC56UnidadesNegocio extends Model {}

BAC56UnidadesNegocio.init(
    {
      id: {
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
      modelName: "BAC56UnidadesNegocio",
    }
  );
  
  BAC56UnidadesNegocio.belongsTo(BAC56Cargos,{foreignKey: "cargosUnidadId",});

  module.exports = BAC56UnidadesNegocio;
  