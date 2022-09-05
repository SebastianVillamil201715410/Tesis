const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC10 = require("./BAC10");

class BAC67C extends Model {}

BAC67C.init(
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
      modelName: "BAC67C",
    }
  );

  BAC67C.belongsTo(BAC10,{foreignKey: "conceptoId",});

  module.exports = BAC67C;