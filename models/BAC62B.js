const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC62BInterfaz = require("./BAC62BInterfaz");
const BAC62BServicio = require("./BAC62BServicios");
const BAC62A= require("./BAC62A");

class BAC62B extends Model {}

BAC62B.init(
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
      modelName: "BAC62B",
    }
  );
  
  BAC62B.belongsTo(BAC62BInterfaz,{foreignKey: "interfazId",});
  BAC62B.belongsTo(BAC62BServicio,{foreignKey: "servicioId",});
  BAC62B.belongsTo(BAC62A,{foreignKey: "componentesSWId",});

  module.exports = BAC62B;