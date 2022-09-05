const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC67A extends Model {}

BAC67A.init(
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
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tipo: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      estado: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      documentacion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tamanio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      componentesInfraestructura: {
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
      modelName: "BAC67A",
    }
  );

  module.exports = BAC67A;