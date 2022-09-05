const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC62GInterfaz = require("./BAC62GInterfaz");
const BAC62GServicio = require("./BAC62GServicios");

class BAC62G extends Model {}

BAC62G.init(
    {
        id: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            allowNull: false,
        },
        nombreSistemaExterno: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcionSistemaExterno: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC62G",
    }
  );
  
  BAC62G.belongsTo(BAC62GInterfaz,{foreignKey: "interfazId",});
  BAC62G.belongsTo(BAC62GServicio,{foreignKey: "servicioId",});

  module.exports = BAC62G;