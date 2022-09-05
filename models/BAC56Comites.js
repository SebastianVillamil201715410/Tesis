const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC56Cargos = require("./BAC56Cargos");
const BAC56FuncionesComite = require("./BAC56FuncionesComite");

class BAC56Comites extends Model {}

BAC56Comites.init(
    {
      comiteId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      nombreComite: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC56Comites",
    }
  );
  
  BAC56Comites.belongsTo(BAC56Cargos,{foreignKey: "cargosComiteId",});
  BAC56Comites.belongsTo(BAC56FuncionesComite,{foreignKey: "funcionesComiteId",});

  module.exports = BAC56Comites;
  