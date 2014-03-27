var mongoose   = require('mongoose');

var Schema     = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var EntitySchema = new Schema({
    owner: Schema.ObjectId
  , name : String
  , data : Schema.Types.Mixed
});

EntitySchema.plugin(timestamps);

module.exports = EntitySchema;
