const router = require("express").Router()

const Event = require('./../models/Event.model')

//crear event rout postaman ok 
router.post("/createEvents", (req, res) => {

    const { title, date, streetName, streetNumber, postCode, city, description, image } = req.body
    const address = { street: { streetName, streetNumber }, postCode, city }

    Event
        .create({ title, date, address, description, image })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// todos los eventos rout postman ok 
router.get("/getAllEvents", (req, res) => {

    Event
        .find()
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

//detalles del evento rout postman ok 
router.get("/getOneEvents/:event_id", (req, res) => {

    const { event_id } = req.params

    Event
        .findById(event_id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

// edit event rout postman ok 
router.put("/getOneEvent/:event_id/edit", (req, res) => {

    const { event_id } = req.params
    const { title, date, streetName, streetNumber, postCode, city, description, image } = req.body
    const address = { street: { streetName, streetNumber }, postCode, city }

    Event
        .findByIdAndUpdate(event_id, { title, date, address, description, image }, { new: true })
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})


// --- DELETE  event postman ok 
router.delete("/deleteOneEvent/:id/", (req, res) => {

    const { id } = req.params

    Event
        .findByIdAndDelete(id)
        .then(response => res.json(response))
        .catch(err => res.status(500).json(err))
})

module.exports = router