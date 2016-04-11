var mongoose = require('mongoose');

var brewSchema = mongoose.Schema({
  name: {type: String},
  type: {type: String},
  style: {type: String},
  rating: {type: String},
  description: {type: String},
  location: {type: String}
}, {timestamps: true}
);

module.exports = mongoose.model('Brew', brewSchema)
