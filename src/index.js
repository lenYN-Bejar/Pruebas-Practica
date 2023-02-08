import {app} from './app.js'
import {sequelize} from './database/database.js'

async function main() {
    try {
        await sequelize.sync() //sincronisa con la base de datos agregando eliminando tablas
        const PORT = 3000
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`)
        })

    } catch (error) {
        console.error('Unable to connect to the database')
    }
}
main()



