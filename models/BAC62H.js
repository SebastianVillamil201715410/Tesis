const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC62G = require("./BAC62G");
const BAC62I= require("./BAC62I");
const BAC62A= require("./BAC62A");

class BAC62H extends Model {}

BAC62H.init(
    {
        id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            allowNull: false,
        },
        nombreZona: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcionZona: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC62H",
    }
  );
  
  BAC62H.belongsTo(BAC62G,{foreignKey: "sistemasExternosId",});
  BAC62H.belongsTo(BAC62I,{foreignKey: "integracionesId",});
  BAC62H.belongsTo(BAC62A,{foreignKey: "componentesSWId",});

  module.exports = BAC62H;