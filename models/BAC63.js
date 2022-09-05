const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC35 = require("./BAC35");

class BAC63 extends Model {}

BAC63.init(
    {
      id: {
        type: DataTypes.NUMBER,
        primaryKey: true,
        allowNull: false,
      },
      estrategico: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      tactico: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      operativo: {
        type: DataTypes.STRING,
        allowNull: false,
      },    
    },
    {
      sequelize,
      timestamps: false,
      modelName: "BAC63",
    }
  );
  
  BAC63.belongsTo(BAC35,{foreignKey: "indicadorId",});

  module.exports = BAC63;
  