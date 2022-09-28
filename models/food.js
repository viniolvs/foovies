const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FoodSchema = new Schema({
    name : String,
    recipe : String
})

module.exports = mongoose.model('Food', FoodSchema);