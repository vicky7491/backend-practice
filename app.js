// EXPRESS js basics concepts
// const morgan = require('morgan') //requiring third party middleware

const express = require('express');
const app = express();
const userModel = require('./models/user')
const dbConnection = require('./config/db')
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.set('view engine', 'ejs')
app.use(express.static("public"))



// app.use(morgan('dev'))  //third party middleware



// app.get('/', (req, res, next)=>{ // example of middleware in the particular route
//     const a = 5;
//     const b = 4;
//     console.log(a+b)
//      next()
// }, (req, res)=> {
//     res.render('index')
// })

app.get('/', (req, res)=>{
    res.render('index')
})
app.get('/about', (req, res)=>{
    res.send('welcome to the about page')
})

app.get('/profile',(req,res)=>{
    res.send("welcome to the profile")
})

app.post('/get-form-data', (req,res)=>{
    console.log(req.body)
    res.send('data received')
})





app.listen(3000)