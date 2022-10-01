const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC10 = require("./BAC10");

class BAC67E extends Model {}

BAC67E.init(
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
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC67E",
    }
  );

  BAC67E.belongsTo(BAC10,{foreignKey: "conceptoId",});

  module.exports = BAC67E;