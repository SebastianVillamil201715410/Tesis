const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");

class proveedorSoporte extends Model {}

proveedorSoporte.init(
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
      desde: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      hasta: {
        type: DataTypes.DATE,
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: false,
      modelName: "proveedorSoporte",
    }
  );
  

  module.exports = proveedorSoporte;