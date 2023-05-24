const mongoose = require('mongoose');
// Shortcut variable 
const Schema = mongoose.Schema;



const destinationSchema = new Schema ({
    airport: {
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN']
    }, 
    arrival: {
        type: Date,
    },
})

const flightSchema = new Schema({
    airline: { 
        type: String,
        enum: ['American', 'Southwest', 'United']
    },
    airport: { 
        type: String,
        enum: ['AUS', 'DFW', 'DEN', 'LAX', 'SAN'],
        default: 'DEN'
    }, 
    flightNo: {
        type: Number,
        required: true,
        min: 10,
        max: 9999
    },
    departs: {
        type: Date, 
        default: function() {
        

            let date = new Date() 
            date.setFullYear(date.getFullYear() + 1);
            return date;
            // console.log(date);
        }
    },
    destinations: [destinationSchema],
    
});

module.exports = mongoose.model('Flight', flightSchema);





