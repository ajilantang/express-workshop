'use strict'

//---------------------------
//Node modules
//------------------------

//express dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//initiate express
const app = express()
const router = express.Router()

//-----------------------------------------------
// app configuration
//------------------------------------------------

//req.bodyP
app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json())
//client side
app.use(cors())

const book = require ('./data.js')
//---------------------
//routing
//----------------------
router.get('/ping',(req,res) => {
  res.json("pong")
})

router.get('/book',(req,res) => {
  res.json(book)
})

//--------------------
// register routing
//----------------------
app.use('/',router)
//---------------------
// Run the App
//----------------------

const hostname = process.env.HOST || "localhost"
const port = process.env.PORT || "3000"

app.listen(port,hostname, (err) => {
  if (err) console.log(err);
  console.log(`server is running ${hostname} : ${port}`);
})
