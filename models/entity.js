var mongoose     = require('mongoose');
var EntitySchema = require('../schemas/entity');

var Entity = mongoose.model('Entity', EntitySchema);

module.exports = Entity;
