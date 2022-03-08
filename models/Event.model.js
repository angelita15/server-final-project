const { Schema, model } = require("mongoose")

const eventSchema = new Schema(
    {
        title: {
            type: String,
            // required: true,
            minlength: 1,
            maxlength: 50,
            trim: true,
        },
        date: {
            type: Date,
            // required: true,
        },
        address: {
            street: {
                streetName: {
                    type: String,
                    // required: true
                },
                streetNumber: Number,
            },
            postCode: Number,
            city: String,
        },
        description: {
            type: String,
            maxlength: 500,
            trim: true
        },
        image: String,
    },
    {
        timestamps: true,
    }
)

const Event = model("Event", eventSchema)

module.exports = Event