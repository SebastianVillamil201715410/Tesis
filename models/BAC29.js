const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC28 = require("./BAC28");

class BAC29 extends Model {}

BAC29.init(
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
      rolesParticipantesId: {
        type: DataTypes.NUMBER,
        primaryKey: true,
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
      modelName: "BAC29",
    }
  );
  
  BAC29.belongsTo(BAC28,{foreignKey: "funcionId",});
  

  module.exports = BAC29;