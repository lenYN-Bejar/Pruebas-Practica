import axios from "axios";
const baseUrl = 'http://localhost:3001/notes'

export const getAll = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

export const createNew = async (content) => {
    const note = { content, important: false}
    const response = await axios.post(baseUrl, note)
    return response.data
} 