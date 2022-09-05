const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class BAC11 extends Model {}

BAC11.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      clase: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      atributoRelacion: {
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
      modelName: "BAC11",
    }
  );
  
  module.exports = BAC11;