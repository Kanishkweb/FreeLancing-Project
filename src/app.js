// All required pakages import
const express  = require('express')
const hbs = require('hbs')
const app = express();
const mongoose = require('mongoose')
const Detail = require('../src/models/Detail')
const slider = require('../src/models/slider')
const Services = require('../src/models/service')
const bodyParser = require('body-parser')
// Imported routes js file
const routes = require('./routes/main')

// Using Routes get request
app.use(bodyParser.urlencoded({
    extended:true
}))
app.use('/static',express.static("public"))
app.use('', routes)

//(Template Engine)
app.set('view engine','hbs')
app.set('views','views')
hbs.registerPartials("views/partials")

// db connections
async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/website_tut');
    console.log('Hey its working bro /sis..')
    // Services.create([
    //     {
    //         title:'Provide Best Courses',
    //         icon:'fa-duotone fa-computer-classic',
    //         description:'We provide cousrses that helps in Students learninng and Placement',
    //         linkText:'https://www.google.com/',
    //         link:'Cheak'
    //     },
    //     {
    //         title:'Provide Best Facilities',
    //         icon:'fa-duotone fa-computer-classic',
    //         description:'We provide cousrses that helps in Students learninng and Placement',
    //         linkText:'https://www.google.com/',
    //         link:'Learn'
    //     },
    //     {
    //         title:'Online Live Classes',
    //         icon:'fa-duotone fa-computer-classic',
    //         description:'We provide cousrses that helps in Students learninng and Placement',
    //         linkText:'https://www.google.com/',
    //         link:'Live Classes'
    //     }
    // ])
    // slider.create([
    //     {
    //         title:'Learn JavaScript by Kanishk',
    //         subtitle:'JavaScript is the most Popular Programing  Language',
    //         imgUrl:'/static/images/s1.jpg'
    //     },
    //     {
    //         title:'What is Django in Python',
    //         subtitle:'Djnago is very popular Python Framework',
    //         imgUrl:'/static/images/s2.jpg'
    //     },
    //     {
    //         title:'Learn React with Some Interesting projects',
    //         subtitle:'React is an very popular framework of the JavaScript used as Frontend Development',
    //         imgUrl:'/static/images/bg1.jpg'
    //     }
    // ])
    // Detail.create({
    //     brandName:"Info Technical Solution",
    //     brandIconUrl:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2QluozzocrfL-feO1DU5WDeKVMbLwvu_dl1vIfkKmdw&s",
    //     links:[
    //         {
    //             label:"Home",
    //             url:"/"
    //         },

    //         {
    //             label:"Services",
    //             url:"/services"
    //         },
    //         {
    //             label:"Gallery",
    //             url:"/gallery"
    //         },
    //         {
    //             label:"About",
    //             url:"/about"
    //         },
    //         {
    //             label:"Contact Us",
    //             url:"/contact-us"
    //         }
    //     ]
    // })
    
    // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
main().catch(err => console.log(err));


app.get('/',(req,res)=>{
    res.send('Wow this is data form server .')
})
app.listen(process.env.PORT | 5556, ()=> {
    console.log('Server Started')
});
