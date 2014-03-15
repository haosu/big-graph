var mongoose     = require('mongoose');
var EntitySchema = require('../schemas/entity');

console.log(EntitySchema);
var Entity = mongoose.model('Entity', EntitySchema);

module.exports.Entity = Entity;
