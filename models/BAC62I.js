const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC62BInterfaz = require("./BAC62BInterfaz");
const cliente = require("./cliente");

class BAC62I extends Model {}

BAC62I.init(
    {
        idConector: {
            type: DataTypes.NUMBER,
            primaryKey: true,
            allowNull: false,
        },
        descripcionConector: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipoInvocacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        protocolo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC62I",
    }
  );
  
  BAC62I.belongsTo(BAC62BInterfaz,{foreignKey: "interfazServicioId",});
  BAC62I.belongsTo(cliente,{foreignKey: "clienteId",});

  module.exports = BAC62I;