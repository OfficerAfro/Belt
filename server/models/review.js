const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Annonomous is a name also"],
        minlength: [3, "Name longer plz"]
    },
    rating: {
        type: Number,
        required: [true, "Rating is required on a review"]
    },
    comment: {
        type: String,
        required: [true, "At least type something"],
        minlength: [3, "Okay it has to be longer than tht"]
    }
}, {timestamps: true});

mongoose.model("Review", ReviewSchema);

module.exports = ReviewSchema;