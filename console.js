mongoose = require('mongoose');

Entity = require('./models/entity');
Link = require('./models/link');
User = require('./models/user');

mongoose.connect('mongodb://localhost')
