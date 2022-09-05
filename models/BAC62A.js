const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const proveedorSoporte = require("./proveedorSoporte");

class BAC62A extends Model {}

BAC62A.init(
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
        tipoSoftware: {
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
        Licencia: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ultimaActualizacion : {
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
        tipoDesarrollo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fabricante: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        stacktecnologico: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        sistemaOperativo : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        componenteInfraestructura: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        servidorAplicaciones: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        despliegue: {
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
      modelName: "BAC62A",
    }
  );
  
  BAC62A.belongsTo(proveedorSoporte,{foreignKey: "proveedorId",});

  module.exports = BAC62A;