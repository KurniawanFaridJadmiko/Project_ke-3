const express = require("express");
const exampleController = require("../controller/exampleController");
const routeMahasiswa = require("./mahasiswa");
const routeDosen = require("./dosen");
const routeMatKul = require("./matakuliah");
const routeDsnMat = require("./dosenmatkul");
const routeJadwalMat = require("./jadwalmatakuliah");
const routeMahasiswaBimbingan = require("./mahasiswabimbingan");
const route = express.Router()

route.get('/', exampleController.index)
route.use('/mahasiswa', routeMahasiswa)
route.use('/dosen', routeDosen)
route.use('/matkul', routeMatKul)
route.use('/dosen-matkul', routeDsnMat)
route.use('/jadwal-matkul', routeJadwalMat)
route.use('/mahasiswa-bimbingan', routeMahasiswaBimbingan)

module.exports = route