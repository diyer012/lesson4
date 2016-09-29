var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  //res.send('respond with a resource');
  var userList = ['Mackenzie', 'Matt', 'Dhruva'];

  //load a users view instead
  res.render('users', {userList: userList} );
});

module.exports = router;
