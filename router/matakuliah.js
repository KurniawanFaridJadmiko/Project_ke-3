const express = require("express");
const matkulController = require("../controller/matkulController");
const routeMatKul = express.Router()

routeMatKul.post('/', matkulController.create)
routeMatKul.get('/get', matkulController.getAll)
routeMatKul.get('/get/:id', matkulController.getById)
routeMatKul.put('/update/:id', matkulController.update)
routeMatKul.delete('/delete/:id', matkulController.delete)

module.exports = routeMatKul