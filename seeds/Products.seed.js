
// const mongoose = require('mongoose');

// const Product = require('../models/Product.model')
// const products = require('../Data/products.json');
// const MONGO_URI = process.env.MONGODB_URI || "mongodb://localhost/Karolina-Rueda-Eventos-";
// mongoose
//     .connect(MONGO_URI)
//     .then((x) => {
//         console.log(
//             `Connected to Mongo! Database name: "${x.connections[0].name}"`
//         );
//     })
//     .catch((err) => {
//         console.error("Error connecting to mongo: ", err);
//     });


// Product.create(products)
//     .then(ProductsFromDB => {
//         console.log(`Created ${ProductsFromDB.length} products`);
//         mongoose.connection.close();
//     })
//     .catch(err => console.log(`An error occurred while creating products from the DB: ${err}`));