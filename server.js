var app = require('./app');

var server = app.listen(3000, function() {
  console.log('Graphing all the things on port %d', server.address().port);
});
