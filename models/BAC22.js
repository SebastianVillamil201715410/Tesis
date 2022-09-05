const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC18 = require("./BAC18");

class BAC22 extends Model {}

BAC22.init(
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
      responsable: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      aporte: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      fechaFin: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC22",
    }
  );
  
  BAC22.belongsTo(BAC18,{foreignKey: "indicadorId",});

  module.exports = BAC22;