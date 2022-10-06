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
      //allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    summary: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      //allowNull: false,
    },
    healthScore: {
      type: DataTypes.INTEGER,
      //allowNull: false,
    },
    steps:{
      type: DataTypes.STRING,
    },
    createDB:{
      type: DataTypes.BOOLEAN,
      defaultValue: true
    }
  },{
    timestamps: false // me quita los dos campos de update de la tabla en false, en true no
  });
};
