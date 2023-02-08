import {DataTypes} from "sequelize";
import { sequelize } from "../database/database.js";

export const Tours = sequelize.define('tours', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dificultad: {
        type: DataTypes.INTEGER,
        validate: {
            min: 1,
            max: 5
        }
    },
    duracion: {
        type: DataTypes.STRING,
    },
    temporada: {
        type: DataTypes.ENUM('Primavera', 'Verano', 'Otoño', 'Invierno'),
        allowNull: false
    }
})

