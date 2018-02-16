const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/calendario');
module.exports = mongoose;
