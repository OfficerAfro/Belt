console.log("rest.js is running");

const mongoose = require('mongoose');
const ReviewSchema = require('./review');
const uniqueValidator = require('mongoose-unique-validator');

const RestSchema = new mongoose.Schema({
    restName: {
        type: String,
        required: true,
        minlength: [3, "Restaurant name must be more than 3 characters"],
        unique: [true]

    },
    restCuisine: {
        type: String,
        required: true,
        minlength: [3, "Restaurant Cuisine must be longer than 3 chRACTERS"]
    },
    review: [ ReviewSchema ]
}, {timestamps: true});

mongoose.model("Rest", RestSchema);
