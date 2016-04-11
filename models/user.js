var mongoose  = require('mongoose');

var UserSchema = mongoose.Schema({
  username: {type: String},
  password: {type: String},
  token: {type: String}
});

module.exports = mongoose.model('User', UserSchema);
