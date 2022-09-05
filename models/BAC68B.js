const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const proveedorSoporte = require("./proveedorSoporte");

class BAC68B extends Model {}

BAC68B.init(
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
        marca: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        modelo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        uso: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        RPO: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ubicacion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        RTO: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fechaCompra: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        fechaReemplazo: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        serviceTag: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        procesador: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        RAM: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        funcion: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dominio: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        direccionIP: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        addressMAC: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        proovedorGarantia : {
            type: DataTypes.STRING,
            allowNull: false,
        },
        fechaFinalizacionGarantia: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        proovedorSeguro: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        coberturas: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        vigenteDesde: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        vigenteHasta: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        tipoBackup: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        frecuenciaBackup: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        ubicacionBackup: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        espacioAlmacenamientoGB: {
            type: DataTypes.NUMBER,
            allowNull: false,
        },
        tipoAlmacenamiento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        nombreSO: {
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
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC68B",
    }
  );
  
  BAC68B.belongsTo(proveedorSoporte,{foreignKey: "proveedorSoporteId",});

  module.exports = BAC68B;