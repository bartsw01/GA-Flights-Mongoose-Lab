const mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 const Schema = mongoose.Schema;

 const flightSchema = new Schema({
    airline: String,
    flightNo: Number,   // enum 'AUS', 'DFW', 'DEN', 'LAX' & 'SAN'
    departs: Date,   // required between 10 and 9999
    airport: [String]
});

 // Compile the schema into a model and export it
 module.exports = mongoose.model('Movie', movieSchema);