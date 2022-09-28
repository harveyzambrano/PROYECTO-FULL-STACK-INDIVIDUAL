const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('recipe', {
    ID:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    healthScore: {
      type: DataTypes.FLOAT,
      allowNull: false,
    },
    steps:{
      type: DataTypes.JSON,
    },
    createDB:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },{
    timestamps: false // me quita los dos campos de update de la tabla en false, en true no
  });
};
