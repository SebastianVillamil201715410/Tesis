const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC62G = require("./BAC62G");

class BAC62GOrganizacion extends Model {}

BAC62GOrganizacion.init(
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
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC62GOrganizacion",
    }
  );
  
  BAC62GOrganizacion.belongsTo(BAC62G,{foreignKey: "sistemaExternoId",});

  module.exports = BAC62GOrganizacion;