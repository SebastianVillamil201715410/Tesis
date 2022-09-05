const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC19 = require("./BAC19");
const BAC20Metas = require("./BAC20Metas");
const BAC20Objetivos = require("./BAC20Objetivos");

class BAC20 extends Model {}

BAC20.init(
    {
      
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC20",
    }
  );

  BAC20.belongsTo(BAC20Objetivos,{foreignKey: "objetivosId",});
  BAC20.belongsTo(BAC20Metas,{foreignKey: "metasId",});
  BAC20.belongsTo(BAC19,{foreignKey: "fichaTecnicaId",});
  
  module.exports = BAC20;