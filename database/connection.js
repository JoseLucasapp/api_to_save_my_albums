const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const {MONGO_URL} = process.env;

module.exports = mongoose.connect(MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true });