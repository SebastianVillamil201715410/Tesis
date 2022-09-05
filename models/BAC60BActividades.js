const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const cliente = require("./cliente");
const BAC31 = require("./BAC31");

class BAC60BActividades extends Model {}

BAC60BActividades.init(
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
      modelName: "BAC60BActividades",
    }
  );
  
  BAC60BActividades.belongsTo(BAC31,{foreignKey: "capacidadId",});
  BAC60BActividades.belongsTo(cliente,{foreignKey: "clienteId",});

  module.exports = BAC60BActividades;