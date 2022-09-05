const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC10 = require("./BAC10");

class BAC62D extends Model {}

BAC62D.init(
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
      modelName: "BAC62D",
    }
  );

  BAC62D.belongsTo(BAC10,{foreignKey: "conceptoId",});

  module.exports = BAC62D;