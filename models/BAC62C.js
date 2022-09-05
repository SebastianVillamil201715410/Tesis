const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC62CModulos = require("./BAC62CModulos");
const BAC62A= require("./BAC62A");

class BAC62C extends Model {}

BAC62C.init(
    {
        id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            allowNull: false,
        },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC62C",
    }
  );
  
  BAC62C.belongsTo(BAC62CModulos,{foreignKey: "modulosId",});
  BAC62C.belongsTo(BAC62A,{foreignKey: "componentesSWId",});

  module.exports = BAC62C;