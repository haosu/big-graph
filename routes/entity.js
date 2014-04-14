var Entity = require('../models/entity')

/* GET entities listing. */
exports.list = function(req, res) {
  Entity.find({}, function(err, data) {
    res.send(data);
  });
}
