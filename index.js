require('dotenv').config()
const userRoute = require('./routes/userRoute')
const express = require('express')
const session = require('express-session')
const nocache = require('nocache')


const app = express()
const port = process.env.PORT

app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: true }))
app.use(session({
    secret: 'thisismysecret',
    resave: false,
    saveUninitialized: true
}))
app.use(nocache())

app.use('/',userRoute)


app.listen(port,()=>{
    console.log('server is running');
})