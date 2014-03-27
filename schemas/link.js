var mongoose   = require('mongoose');
var Schema     = mongoose.Schmea;
var timestamps = require('mongoose-timestamp')

var LinkSchema = new Schema({
    owner:  Schema.ObjectId
  , parent: Schmea.ObjectId
  , child:  Schema.ObjectId
  , data:   Schema.Types.Mixed
});

LinkSchema.plugin(timestamps);

module.exports = LinkSchema;
