var mongoose   = require('mongoose');
var LinkSchema = require('../schemas/link');

var LinkModel = mongoose.model('Link', LinkSchema);

module.exports = LinkModel;
