import { Router } from "express";
import { getAllFlags } from "../database/services-flags/getAllFlags.js";
import { Tours } from "../models/tourist-activities.js";
import { Contries } from "../models/contries.js";
import { Middle } from "../models/middle.js";


export const router = Router()

router.get('/countries', async (require, response) => {
    let allContries = await Contries.findAll({include: Tours})
    const name = require.query.name
    // console.log('N_________A_____M_____E',require.query.name)

    if(!allContries.length){
        allContries = await getAllFlags()
        await Contries.bulkCreate(allContries)
    }

    if(name){
        let countriesName = allContries.filter( el => el.nombre.toLowerCase() === name.toLowerCase())
        // console.log('AL__________LLLLL___________CONTRIESSSSSSSSSS',countriesName)
        return countriesName.length ? response.status(200).send(countriesName): response.status(400).send('No EXISTE')
    }
    return response.status(200).send(allContries)
    
})

router.get('/countries/:id', async (require, response) => {
    const {id} = require.params
    let allContries = await Contries.findAll({include: Tours})
    // console.log('_________ALcontries___________',allContries)

    if(id){
        let countriesID = allContries.filter( el => el.id.toLowerCase() === id.toLowerCase())
        return countriesID.length ? response.status(200).send(countriesID): response.status(400).send('No EXISTE')
    }
})
router.post('/activities', async (require, response) => {
    const {name, dificultad, duracion, temporada, id} = require.body
    console.log('____________________id____________',id)
    console.log(typeof id)

    const newActivitie = await Tours.create({
        name,
        dificultad,
        duracion,
        temporada
    })

    const contry = await Contries.findByPk(id)
    console.log('_______________-aoeuaoeu________________-',contry)
    await newActivitie.addContries(contry, {through: Middle})
    response.json('Actividad creada')
})

router.get('/activities/', async (require, response) => {
    const activities = await Tours.findAll()
    if(activities.length){
        return response.send(activities)
    }
    return response.send("Aun no se agregaron Actividades")
})

router.get('/activities/:id', async (require, response) => {
    const {id} = require.params
    const activities = await Tours.findAll({
        where:{id},
        include:Contries
    })
    return response.send(activities)
})

// 1. INSERT a new student
// const student = await Student.create({
//     firstName: "Jake",
//   });
  
//   // 2. Find the Classes row
//   const classRow = await Class.findByPk(1);
  
//   // 3. INSERT the association in Enrollments table
//   await student.addClass(classRow, { through: Enrollment });


// const student = await Student.findOne({
//     where: { firstName: "Jake" },
//     include: Class
//   });
  
//   console.log(student.toJSON()); 
//   // ^ Student object instance