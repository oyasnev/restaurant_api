const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// ToDo: improve restaurant schema e.g. comments, open hours, photos etc.
// ToDo: generalize for other POIs
const restaurantSchema = new Schema({
    name: String,
    address: String,
    cuisine: [String],
    lon: { type: Number, min: -180, max: 180 },
    lat: { type: Number, min: -90, max: 90 },
    rating: { type: Number, default: 0 },
    votes: { type: Number, default: 0 }
}, {
        versionKey: false
    });

module.exports = mongoose.model('Restaurant', restaurantSchema);
