import {DataTypes} from "sequelize";
import {sequelize} from '../database/database.js'
import {Tours} from './tourist-activities.js'
import {Middle} from './middle.js'

// definir la tabla

export const Contries = sequelize.define('contries',{
    id: {
        type: DataTypes.STRING(3),
        allowNull: false,
        primaryKey: true,
    },
    nombre: {
        type: DataTypes.STRING, "type": "module",
        allowNull: false
    },
    flag: {
        type: DataTypes.STRING,
    },
    continent: {
        type: DataTypes.STRING,
        allowNull: false
    },
    capital: {
        type: DataTypes.STRING,
        allowNull: false
    },
    subregion: {
        type: DataTypes.STRING,
    },
    area: {
        type: DataTypes.INTEGER,
    },
    population: {
        type: DataTypes.INTEGER,
    }
})

Contries.belongsToMany(Tours, {through: Middle})

Tours.belongsToMany(Contries, {through: Middle})