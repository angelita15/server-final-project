const router = require("express").Router()

const Product = require('./../models/Product.model')

// crear un porducto  postman ok 
router.post("/createProducts", (req, res) => {

    const { title, price, size, type, description, images } = req.body

    Product
        .create({ title, price, size, type, description, images })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// todos los produtctos postman ok 
router.get("/getAllProducts", (req, res) => {

    Product
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// producto detelle por el id postman ok 
router.get("/getOneProduct/:product_id", (req, res) => {

    const { product_id } = req.params

    Product
        .findById(product_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// producto detalle edit postman ok 
router.put("/getOneProduct/:product_id/edit", (req, res) => {

    const { product_id } = req.params
    const { title, price, size, type, description, images } = req.body


    Product
        .findByIdAndUpdate(product_id, { title, price, size, type, description, images }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// --- DELETE  product postman ok 
router.delete("/deleteOneProduct/:product_id/", (req, res) => {

    const { product_id } = req.params

    Product
        .findByIdAndDelete(product_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})



module.exports = router