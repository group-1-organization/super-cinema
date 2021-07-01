//Create model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = new Schema({
    Title: {
        type: String,
        minlength: 2,
        required: true
    },
    Year: {
        type: String,
        minlength: 4,
        required: true
    },
    Runtime: {
        type: String,
        minlength: 2,
        required: true
    },
    Genre: {
        type: String,
        minlength: 4,
        required: true
    },
    Plot: {
        type: String,
        minlength: 4,
        required: true
    },
    Poster: {
        type: String,
        minlength: 2,
        required: true
    }
})

module.exports = mongoose.model("Movies", movieSchema);
