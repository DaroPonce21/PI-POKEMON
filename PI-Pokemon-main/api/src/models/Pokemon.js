const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4,
      primaryKey: true,
      allowNull: false 
    },
    /*
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
  },*/
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vida:{
      type:DataTypes.STRING
    },
    fuerza:{
      type:DataTypes.STRING
    },
    defensa:{
      type:DataTypes.STRING
    },
    velocidad:{
      type:DataTypes.STRING
    },
    altura:{
      type:DataTypes.STRING
    },
    peso:{
      type:DataTypes.STRING
    },
    img:{
      type:DataTypes.STRING,
      defaultValue:'https://www.pinpng.com/pngs/m/8-82850_poke-ball-png-pokeball-png-transparent-png.png'
    },

  });
};

