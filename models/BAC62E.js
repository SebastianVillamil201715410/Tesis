const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC10 = require("./BAC10");

class BAC62E extends Model {}

BAC62E.init(
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
      modelName: "BAC62E",
    }
  );

  BAC62E.belongsTo(BAC10,{foreignKey: "conceptoId",});

  module.exports = BAC62E;