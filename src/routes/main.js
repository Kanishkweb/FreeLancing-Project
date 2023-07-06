const express = require('express')
const { route } = require('express/lib/application')
const Detail = require('../models/Detail')
const Slider = require('../models/slider')
const Services = require('../models/service')
const routes = express.Router()
const Contact = require('../models/Contact')

routes.get('/', async (req,res) =>{
    // res.render('index')
    const details = await Detail.findOne({"_id":"6499c0614deaedde2d898637"})
    // console.log(details)
    const slides = await Slider.find()
    console.log(slides)
    const services = await Services.find()
    res.render("index",{
        details:details,
        slides:slides,
        services:services
    })
})
routes.get('/gallery',async (req,res) =>{
    const details = await Detail.findOne({"_id":"6499c0614deaedde2d898637"})

    res.render('gallery',{
        details:details
    })
})
// Process Contact Form 
routes.post('/process-contact-form', async (req,res) =>{
    console.log('Form is submmitted')
    console.log(req.body)
    //Save the Data to DataBase
    try{
        const data = await Contact.create(req.body)
        console.log(data)
        res.redirect('/')
    }catch(err)
    {
        console.log(err)
        res.redirect('/')
    }
})
module.exports = routes