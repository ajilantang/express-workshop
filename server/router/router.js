'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controller/api.books.js');
const books = require('../model/books.js');
router.get('/ping',controller.pong)


router.get('/book',controller.getBooks)

router.post('/books',controller.postBooks)

router.post('/books/:id', controller.getBookById)

router.delete('/books/:id',controller.deleteBookById)

router.put('/books/:id',controller.updateBookById)

module.exports = router
