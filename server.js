'use strict'

//---------------------------
//Node modules
//------------------------

//express dependencies
const express = require('express');
const bodyParser = require('bodyParser');
const cors = require('cors');

//initiate express
const app = express()
const router = app.Router()

//-----------------------------------------------
// app configuration
//------------------------------------------------

//req.bodyP
app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json())
//client side
app.use(cors())

const data = require ('/data.json')
