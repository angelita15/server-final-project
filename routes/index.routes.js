
const router = require("express").Router();

/* GET home page */
router.use("/products", require('./products.routes'))
router.use("/events", require('./events.routes'))
router.use("/auth", require('./auth.routes'))
router.use("/upload", require("./upload.routes"))
router.use("/contact", require('./contact.routes'))

module.exports = router;
