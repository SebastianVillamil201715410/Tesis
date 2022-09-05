const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const cliente = require("./cliente");
const BAC31 = require("./BAC31");

class BAC61BActividades extends Model {}

BAC61BActividades.init(
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
      modelName: "BAC61BActividades",
    }
  );
  
  BAC61BActividades.belongsTo(BAC31,{foreignKey: "capacidadId",});
  BAC61BActividades.belongsTo(cliente,{foreignKey: "clienteId",});

  module.exports = BAC61BActividades;