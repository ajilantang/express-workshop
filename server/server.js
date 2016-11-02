'use strict'
require('dotenv').config()
//---------------------------
//Node modules
//------------------------

//express dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
//require router
const apiBooks = require('./router/router.js');
//initiate express
const app = express()
const mongoose = require('mongoose');
mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGODB_URI)
//-----------------------------------------------
// app configuration
//------------------------------------------------

//req.bodyP
app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json())
//client side
app.use(cors())
app.use('/api', apiBooks)
//---------------------
// Run the App
//----------------------

const hostname = process.env.HOST || "localhost"
const port = process.env.PORT || "3000"

app.listen(port,hostname, (err) => {
  if (err) console.log(err);
  console.log(`server is running ${hostname} : ${port}`);
})
