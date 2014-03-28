var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var UserSchema = new Schema({
    name: String
  , email: String
});

UserSchema.plugin(timestamps);

module.exports = UserSchema;
