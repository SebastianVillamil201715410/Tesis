const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const proyecto = require("./proyecto");
const BAC22 = require("./BAC22");
const BAC26 = require("./BAC26");

class BAC23 extends Model {}

BAC23.init(
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
      costo: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC23",
    }
  );
  
  BAC23.belongsTo(proyecto,{foreignKey: "proyectoId",});
  BAC23.belongsTo(BAC22,{foreignKey: "accionesId",});
  BAC23.belongsTo(BAC26,{foreignKey: "indicadoresEjecucionId",});
  

  module.exports = BAC23;