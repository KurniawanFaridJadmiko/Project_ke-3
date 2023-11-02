const express = require("express");
const mahasiswabimbinganController = require("../controller/mahasiswabimbinganController");
const routeMahasiswaBimbingan = express.Router()

routeMahasiswaBimbingan.post('/', mahasiswabimbinganController.create)
routeMahasiswaBimbingan.get('/get', mahasiswabimbinganController.getAll)
routeMahasiswaBimbingan.get('/get/:id', mahasiswabimbinganController.getById)
routeMahasiswaBimbingan.put('/update/:id', mahasiswabimbinganController.update)
routeMahasiswaBimbingan.delete('/delete/:id', mahasiswabimbinganController.delete)

module.exports = routeMahasiswaBimbingan;