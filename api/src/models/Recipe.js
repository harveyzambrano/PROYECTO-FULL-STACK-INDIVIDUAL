const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        //allowNull: false
      },
      name: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      summary: {
        type: DataTypes.TEXT,
        //allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      healthScore: {
        type: DataTypes.FLOAT,
        //allowNull: false,
      },
      steps: {
        type: DataTypes.TEXT,
      }
    },
    {
      timestamps: false, // me quita los dos campos de update de la tabla en false, en true no
    }
  );
};
