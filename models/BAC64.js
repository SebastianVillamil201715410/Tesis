const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC31 = require("./BAC31");
const BAC59 = require("./BAC59");

class BAC64 extends Model {}

BAC64.init(
    {
      servicioInternoId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC64",
    }
  );
  
  BAC64.belongsTo(BAC31,{foreignKey: "capacidadNegocioId",});
  BAC64.belongsTo(BAC59,{foreignKey: "procesosInternosId",});

  module.exports = BAC64;