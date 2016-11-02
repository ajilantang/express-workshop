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

const books = require ('./data.js')
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

//-----------------------
// add
//-----------------------

router.post('/books',(req,res) => {
  const book ={
    id : req.body.id,
    nama: req.body.nama,
    price: req.body.price
  }
  books.push(book)
  res.json(book)
})
//------------------
// put
//--------------------
router.post('/books/:id', (req,res) => {
  let book = books.filter(book => {
    return book.id === req.params.id
  })

  res.json(book)
})
//----------------------\
// delete
//----------------------
router.delete('/books/:id', (req,res) => {
  let book = books.filter(book =>{
    return book.id === Number(req.params.id)
  })[0]
  //res 404
  if(!book) res.status(404).json({message:"error"})
  //deleting by  ijd
  books.splice(books.indexOf(book),1)
  // send success ,essage
  res.status(200).json("sukses")

})

//updatae

router.put('/books/:id', (req,res) => {

})
//------------------------
// register
//------------------------
