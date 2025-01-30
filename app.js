const express = require('express')
const app = express()
const mongoose = require('mongoose')
const contactRoute = require('./routes/contact')
const bodyparser = require('body-parser')


const connectWithDatabase = async()=>{
   try
   {
      await mongoose.connect('mongodb+srv://ssbb123:Ssbb123@cluster0.7jdsm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
      console.log('connect with Database MongoDB')
   }
   catch(err)
   {
    console.log(err)
   }
}

connectWithDatabase()


app.use(bodyparser.json())

app.use('/contact',contactRoute)

module.exports = app;