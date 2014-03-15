var Entity = require('../models/entity.js');

/* GET home page. */
exports.index = function(req, res){
  console.log(Entity);
  var entityPromise = Entity.create({data: 'some shit'}, function(a, b) {
  });

  Entity.find({}, function(error, entity) {
    console.log(entity);
  });
  res.render('index', { title: 'Express' });
};
