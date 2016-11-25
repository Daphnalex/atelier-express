var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var ctrlUser = require('../controllers/user.controller.js');

router
  .route('/users')
  .get(ctrlUser.getAll)
  .post(ctrlUser.addOne);
/* s'écrit aussi :
router
  .get('/users', ctrlUser.getAll)
  .post('/users', ctrlUser.addOne);
*/
  router
    .route('/users/:userId')
    .get(ctrlUser.getOne)
    .delete(ctrlUser.deleteOne)
    .put(ctrlUser.updateOne);
module.exports = router; //transforme ce fichier en node. Récupère dans routes un objet.
