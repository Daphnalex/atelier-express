var mongoose = require('mongoose');
var User = mongoose.model('User');//récupération du model

module.exports.getAll = function(req, res){
  User//variable User qui représente mon model
    .find()//on va rechercher
    .exec(function(err, user){//on execute la requête
      if (err){
        res.status = 500;
        res.json(err);
      } else {
        res.json(user);
      }
    })
};

module.exports.addOne = function(req, res){
  User
    .create({
      name : req.body.name,
    }, function(err, data){
      if (err){
        res
          .status(500)
          .json(err);
      } else {
        res
          .status(201)
          .json(data);
      }
    })
};

module.exports.getOne = function(req, res){
  var id = req.params.userId; //attention userId doit être écrit comme dans la route obligatoirement
  //quand on ajoute un objet, l'objet a automatiquement un id qui lui est attribué. On peut le récupérer grâce à req.params.id_de_la_route
  User
    .findById(id)
    .exec(function(err, user){
      if (err){
        res
          .status(500)
          .json(err);
      } else {
        res
          .status(201)
          .json(user);
      }
  })
};

module.exports.deleteOne = function(req, res){
    var id = req.params.userId;
    User
      .findById(id)//je récupère l'objet ayant l'id entré en paramètre
      .remove()// je le remove
      .exec(function (err, user) { // et j'excécute la fonction
          if (err) {
            res.send(err);
          } else {
            res.json({ message: 'Deleted' });
          }
      });
};

module.exports.updateOne = function(req, res){
  var id = req.params.userId;
  User
    .findById(id)
    .update({name: req.body.name})
    .exec(function(err, user){
      if (err){
        res
          .status(500)
          .json(err);
      } else {
        res
          .status(201)
          .json(user);
      }
  });
};
