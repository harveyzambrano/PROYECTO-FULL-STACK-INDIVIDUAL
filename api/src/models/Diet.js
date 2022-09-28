const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('diet', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
   
  },{
    timestamps: false // me quita los dos campos de update de la tabla en false, en true no
  });
};
