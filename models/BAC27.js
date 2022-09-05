const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC22 = require("./BAC22");
const BAC26 = require("./BAC26");

class BAC27 extends Model {}

BAC27.init(
    {
      
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      valorActual: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      valorEsperado: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC27",
    }
  );
  
  BAC27.belongsTo(BAC22,{foreignKey: "accionesId",});
  BAC27.belongsTo(BAC26,{foreignKey: "indicadoresId",});
  

  module.exports = BAC27;