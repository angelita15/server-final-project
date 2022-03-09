const router= require("express").Router()

const uploader = require('../config/cloudinary.confi')

router.post('/image', uploader.array('imagesData'), (req, res) => {

    let response = req.file || req.files

    if (!response) {
        res.status(500).json({ errorMessage: 'Error cargando el archivo' })
        return
    }

    res.json({ cloudinary_urls: response.map(res => res.path) })
})

module.exports= router