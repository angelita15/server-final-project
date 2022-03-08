const { Schema, model } = require("mongoose")


const productSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            minlength: 1,
            maxlength: 50,
            trim: true,
        },
        price: {
            type: Number
        },
        size: {
            type: String,
            enum: ['SMALL', 'MEDIUM', 'LARGE'],
        },
        type: {
            type: String,
            enum: ['oreo', 'chocolate', 'dulce de leche', 'vainilla', 'red velvet', 'tres chocolates', 'chocolate blanco', 'brownie', 'chocolate y menta', 'kinder bueno', 'cookie cream', 'zanahoria', 'mango', 'fresa', 'platano'],
        },
        description: {
            type: String,
            maxlength: 500,
            trim: true
        },
        images: [String],
    },
    {
        timestamps: true,
    }
);

const Product = model("Product", productSchema)

module.exports = Product