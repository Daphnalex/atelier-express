var mongoose = require('mongoose');
var Hotel = new mongoose.Schema({
  name: String,
  town : String
});
mongoose.model('Hotel',Hotel);//(nom du modèle, Schéma)
