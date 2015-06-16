var fortune = require('../lib/fortune.js');

exports.home = function(req, res) {
  res.render('home');
};

exports.fortune = function(req, res) {
  res.render('fortune', {
    fortune: fortune.getFortune(),
  });
};
