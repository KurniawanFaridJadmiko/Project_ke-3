const { Dosen, Mahasiswa, DosenMatkul, JadwalMatkul, MahasiswaBimbingan } = require("../models")
const mahasiswa = require("../models/mahasiswa")
const mahasiswabimbinganController = {}

/*
    this is auto generate example, you can continue 

*/
mahasiswabimbinganController.index = async (req, res) => {
    res.json({
        message: "Hello mahasiswabimbinganController"
    })
}

mahasiswabimbinganController.create = async (req, res) => {
    const { id_mahasiswa, id_dosen } = req.body
    try {
        const getMhsBimbingan = await Mahasiswa.findOne({
            where: {
                id: id_mahasiswa
            }
        })
        if (getMhsBimbingan === null) {
            throw Error("Data Tidak Ditemukan")
        } else {
            const createBimbinganMhs = await MahasiswaBimbingan.create({
                id_mahasiswa: getMhsBimbingan.id,
                id_dosen: id_dosen
            })
            return res.status(201).json({
                message: 'Data Berhasil Ditambahkan !'
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

mahasiswabimbinganController.getAll = async (req, res) => {
    const getMhsBimbingan = await MahasiswaBimbingan.findAll({
        include: [
            {
                model: Mahasiswa
            },
            {
                model: Dosen
            }
        ]
    })
    res.json({
        data: getMhsBimbingan
    })
}

mahasiswabimbinganController.getById = async (req, res) => {
    const { id } = req.params
    try {
        const getMhsBimbingan = await MahasiswaBimbingan.findAll({
            include: [
                {
                    model: Mahasiswa
                },
                {
                    model: Dosen
                }
            ],
            where: {
                id: id
            }
        });
        return res.status(200).json({
            data: getMhsBimbingan
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error
        })
    }
}

mahasiswabimbinganController.update = async (req, res) => {
    const { id_mahasiswa, id_dosen } = req.body
    const { id } = req.params
    try {
        const getMhsBimbingan = await Mahasiswa.findOne({
            where: {
                id: id_mahasiswa
            }
        })
        if (getMhsBimbingan === null) {
            throw Error("Data Tidak Ditemukan")
        } else {
            const updateBimbinganMhs = await MahasiswaBimbingan.update({
                id_mahasiswa: getMhsBimbingan.id,
                id_dosen: id_dosen
            }, {
                where: {
                    id: id
                }
            })
            return res.status(201).json({
                message: 'Data Berhasil Diubah !'
            })
        }
    } catch (error) {
        return res.status(404).json({
            message: error.message
        })
    }
}

mahasiswabimbinganController.delete = async (req, res) => {
    const { id } = req.params
    try {
        const deleteMhsBimbingan = await MahasiswaBimbingan.destroy({
            where: {
                id: id
            }
        })
        return res.status(200).json({
            message: "Data Berhasil Dihapus !"
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error
        })
    }

}

module.exports = mahasiswabimbinganController

