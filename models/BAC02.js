const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC01 = require("./BAC01");

class BAC02 extends Model {}

BAC02.init(
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
      objetivoNegocio: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      descripcion: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC02",
    }
  );
  
  BAC02.belongsTo(BAC01,{foreignKey: "actorId",});

  module.exports = BAC02;
  