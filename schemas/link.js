var mongoose   = require('mongoose');
var Schema     = mongoose.Schema;
var timestamps = require('mongoose-timestamp')

var LinkSchema = new Schema({
    owner:  { type: Schema.ObjectId, ref: 'User' }
  , parent: { type: Schema.ObjectId, ref: 'Entity' }
  , child:  { type: Schema.ObjectId, ref: 'Entity' }
  , data:   Schema.Types.Mixed
});

LinkSchema.plugin(timestamps);

module.exports = LinkSchema;
