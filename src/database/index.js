const mongoose = require ('mongoose');

mongoose.connect('mongodb+srv://vininribeiro:32616144Vinicius@cluster0.l7orv.mongodb.net/Dba?retryWrites=true&w=majority')
mongoose.Promise = global.Promise;

module.exports = mongoose;