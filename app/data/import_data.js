const Restaurant = require('../models/restaurant');
const sampleData = require('./restaurants.json');

module.exports.importData = function() {
    for (let rest of sampleData) {
        let newRest = new Restaurant();
        newRest.name = rest.name;        
        newRest.address = rest.address;
        newRest.cuisine = rest.cuisine;
        newRest.lon = rest.lon;
        newRest.lat = rest.lat;
        newRest.rating = rest.rating;
        newRest.votes = rest.votes;
        newRest.save();
    }	
}