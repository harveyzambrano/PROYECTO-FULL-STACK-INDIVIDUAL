const { DataTypes} = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "dbapi",
    { 
      id:{
        type: DataTypes.INTEGER,
        primaryKey:true
      },     
      name: {
        type: DataTypes.STRING,
        //allowNull: false,
      },
      vegetarian: {
        type: DataTypes.BOOLEAN,
        //allowNull: false,
      },
      vegan: {
        type: DataTypes.BOOLEAN,
        //allowNull: false,
      },
      glutenFree: {
        type: DataTypes.BOOLEAN,
        //allowNull: false,
      },
      dairyFree: {
        type: DataTypes.BOOLEAN,
        //allowNull: false,
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
      },
      dietsApi: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
      dishTypes: {
        type: DataTypes.ARRAY(DataTypes.STRING),
      },
    },
    {
      timestamps: false, // me quita los dos campos de update de la tabla en false, en true no
    }
  );
};
