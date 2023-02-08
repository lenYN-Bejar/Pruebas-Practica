const express = require('express')
const cors = require('cors')
const cloudinary = require('cloudinary')

const app = express()
require('dotenv').config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.CLOUD_API_KEY,
    api_secret: process.env.CLOUD_API_SECRET,
})

app.use(cors())
app.delete('/E-Comerce/:public_id', async(req, res) => {
    const {public_id} = req.params
    console.log(public_id)
    try {
        await cloudinary.uploader.destroy(`E-Comerce/${public_id}`)
        res.status(200).send()
    } catch (error) {
        res.status(400).send()
    }
})

app.listen(3001, () => {
    console.log('server running')
})