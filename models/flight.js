const mongoose = require('mongoose');
 // optional shortcut to the mongoose.Schema class
 const Schema = mongoose.Schema;

 const flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Southwest', 'United', 'Alaska', 'Delta']

    },

    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        required: true
    },

    flightNo: {
        type: Number,   
        min: 10,
        max: 9999
    },
    
    departs: {
    type: Date
    },
    
    onTime: {
    type: Boolean
    }

},
    {timestamps: true}
);

 // Compile the schema into a model and export it
 module.exports = mongoose.model('Flight', flightSchema);