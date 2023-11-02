const express = require("express");
const jadwalmatkulController = require("../controller/jadwalmatkulController");
const routeJadwalMat = express.Router()

routeJadwalMat.post('/', jadwalmatkulController.create)
routeJadwalMat.get('/get', jadwalmatkulController.getAll)
routeJadwalMat.get('/get/:id', jadwalmatkulController.getById)
routeJadwalMat.put('/update/:id', jadwalmatkulController.update)
routeJadwalMat.delete('/delete/:id', jadwalmatkulController.delete)

module.exports = routeJadwalMat;