const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC56Funciones = require("./BAC56Funciones");

class BAC56Cargos extends Model {}

BAC56Cargos.init(
    {
      cargoId: {
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
      cargoJefeId: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      perfil: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      salarioMensual: {
        type: DataTypes.NUMBER,
        allowNull: false,
      },
      principalesResponsabilidades: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC56Cargos",
    }
  );
  
  BAC56Cargos.belongsTo(BAC56Funciones,{foreignKey: "principalesFuncionesId",});

  module.exports = BAC56Cargos;
  