require('./db/db.js');//import de la connexion à la BDD
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();
var routes = require('./routes');

app.set('port', 3000);

app.use(bodyParser.json()); // on lui dit que tout ce qu'il récupère du bodyParser c'est du json -- A METTRE OBLIGATOIREMENT
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname, 'public')))//Tous les fichiers statiques comme angular, jquery, CSS, images vont être dans le dossier public
//dirname récupère le dossier parent, c'est à dire ici \Users\...\express-atelier1 + public



app.use('/api',routes); //on dit à notre application qu'il utilise les routes

var server = app.listen(app.get('port'), function(){
  console.log('Le serveur est en écoute sur'+server.address().address+':'+server.address().port);
});
