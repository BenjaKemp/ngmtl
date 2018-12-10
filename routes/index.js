var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Bens Lovely Website' });
});
router.get('/main', function(req, res, next) {
  res.render('mainpage');
});
router.get('/services', function(req, res, next) {
  res.render('page-services');
});
router.get('/about', function(req, res, next) {
  res.render('page-team');
});
router.get('/sample', function(req, res, next) {
  res.render(`${__dirname}/assan-kit-3.8/index`);
});

module.exports = router;
