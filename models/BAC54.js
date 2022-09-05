const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC02 = require("./BAC02");

class BAC54 extends Model {}

BAC54.init(
    {
      empresaId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      empresa: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      negocios: {
        type: DataTypes.STRING,
        primaryKey:true,
        allowNull: false,
      },
      idLineaNegocio: {
        type: DataTypes.NUMBER,
        primaryKey:true,
        allowNull: false,
      },
      nombreLineaNegocio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC54",
    }
  );
  
  BAC54.belongsTo(BAC02,{foreignKey: "idServicioNegocio", targetKey: "id",});

  module.exports = BAC54;
  