const { Dosen, MataKuliah, DosenMatkul, JadwalMatkul } = require("../models")
const jadwalmatkulController = {}

/*
    this is auto generate example, you can continue 

*/
jadwalmatkulController.index = async (req, res) => {
    res.json({
        message: "Hello jadwalmatkulController"
    })
}

jadwalmatkulController.create = async (req, res) => {
    const { id_matkul, hari, jam } = req.body
    try {
        const getMatKul = await MataKuliah.findOne({
            where: {
                id: id_matkul
            }
        })
        if (getMatKul === null) {
            throw Error("Data Tidak Ditemukan")
        } else {
            const createJadwalMat = await JadwalMatkul.create({
                id_matkul: getMatKul.id,
                hari: hari,
                jam: jam
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

jadwalmatkulController.getAll = async (req, res) => {
    const getMatKul = await JadwalMatkul.findAll({
        include: [
            {
                model: MataKuliah
            }
        ]
    })
    res.json({
        data: getMatKul
    })
}

jadwalmatkulController.getById = async (req, res) => {
    const { id } = req.params
    try {
        const getMatKul = await JadwalMatkul.findOne({
            include: [
                {
                    model: MataKuliah
                }
            ],
            where: {
                id: id
            }
        })
        return res.status(200).json({
            data: getMatKul
        })
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            message: error
        })
    }
}

jadwalmatkulController.update = async (req, res) => {
    const { id_matkul, hari, jam } = req.body
    const { id } = req.params
    try {
        const getMatKul = await MataKuliah.findOne({
            where: {
                id: id_matkul
            }
        })
        if (getMatKul === null) {
            throw Error("Data Tidak Ditemukan")
        } else {
            const createJadwalMat = await JadwalMatkul.update({
                hari: hari,
                jam: jam
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

jadwalmatkulController.delete = async (req, res) => {
    const { id } = req.params
    try {
        const deleteJadwalMat = await JadwalMatkul.destroy({
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

module.exports = jadwalmatkulController;
