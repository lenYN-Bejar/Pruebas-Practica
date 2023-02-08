import axios from "axios";

export const getAllFlags = async () => {
    return await axios.get('https://restcountries.com/v3/all')
    .then((response) => {
        const {data} = response
        const dataApi = data.map( el => {
            return {
                id: el.cca3,
                nombre: el.name.common,
                flag: el.flags[0],
                continent: el.continents[0],
                capital: ( el.capital || []).length === 0 ? "No tiene capital" : el.capital[0],
                subregion: el.subregion,
                area: el.area,
                population: el.population
            }
        })
        return dataApi
    })
}


