const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC31 = require("./BAC31");
const BAC58 = require("./BAC58");

class BAC34 extends Model {}

BAC34.init(
    {
      servicioId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC34",
    }
  );
  
  BAC34.belongsTo(BAC31,{foreignKey: "capacidadNegocioId",});
  BAC34.belongsTo(BAC58,{foreignKey: "procesosNegocioId",});

  module.exports = BAC34;