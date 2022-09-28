const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    title : String,
    genre : String,
    year : String,
    synopses : String
})

module.exports = mongoose.model('Movie', MovieSchema);