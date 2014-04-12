var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;
var timestamps = require('mongoose-timestamp');

var EntitySchema = new Schema({
    owner: { type: Schema.ObjectId, ref: 'User' }
  , name : String
  , data : Schema.Types.Mixed
});

EntitySchema.plugin(timestamps);

module.exports = EntitySchema;
