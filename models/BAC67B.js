const { DataTypes, Model } = require("sequelize");
const sequelize = require("../lib/sequelize");
const BAC67BInterfaz = require("./BAC67BInterfaz");
const BAC67BServicio = require("./BAC67BServicios");

class BAC67B extends Model {}

BAC67B.init(
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
      modelName: "BAC67B",
    }
  );
  
  BAC67B.belongsTo(BAC67BInterfaz,{foreignKey: "interfazId",});
  BAC67B.belongsTo(BAC67BServicio,{foreignKey: "servicioId",});

  module.exports = BAC67B;