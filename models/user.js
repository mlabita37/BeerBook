var mongoose  = require('mongoose');

var userSchema = mongoose.Schema({
  username: {type: String},
  password: {type: String}
}, {timestamps: true}
);

module.exports = mongoose.model('User', userSchema);
