const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC10 = require("./BAC10");

class BAC67D extends Model {}

BAC67D.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC67D",
    }
  );

  BAC67D.belongsTo(BAC10,{foreignKey: "conceptoId",});

  module.exports = BAC67D;