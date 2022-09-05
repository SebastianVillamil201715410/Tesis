const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC04 = require("./BAC04");
const BAC05 = require("./BAC05");

class BAC03 extends Model {}

BAC03.init(
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
      actividad: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC03",
    }
  );
  
  BAC03.belongsTo(BAC04,{foreignKey: "participantes",});
  BAC03.belongsTo(BAC05,{foreignKey: "recursos",});

  module.exports = BAC03;
  