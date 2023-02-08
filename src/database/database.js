import Sequelize from "sequelize";

export const sequelize = new Sequelize('countries','postgres','root',
    {
    host: 'localhost',
    dialect:'postgres'
    })


// conexion con la base de datos