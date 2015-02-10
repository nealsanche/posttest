var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('photo', { title: 'Photo' });
});

router.post('/georeferencedPhoto', function(req, res, next) {
	console.log("Body: " + JSON.stringify(req.body));
	console.log("Files: " + JSON.stringify(req.files));
	res.render('photo', { title: 'Photo'});
});

module.exports = router;
