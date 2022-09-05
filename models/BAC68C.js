const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const proveedorSoporte = require("./proveedorSoporte");
const BAC68B = require("./BAC68B");

class BAC68C extends Model {}

BAC68C.init(
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
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        descripcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sigla: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        version: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        licencia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fabricante: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ultimaActualizacion: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        responsableFuncional: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        responsableTecnico: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        documentacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        otraInformacionRelevante: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC68C",
    }
  );
  
  BAC68C.belongsTo(proveedorSoporte,{foreignKey: "proveedorSoporteId",});
  BAC68C.belongsTo(BAC68B,{foreignKey: "componenteHWId",});

  module.exports = BAC68C;