var main = require('./handlers/main.js');

module.exports = function(app) {
  app.get('/', main.home);
  app.get('/about', main.about);

  app.get('/fight', function(req, res) {
    res.render('fight');
  });
  app.get('/chars', function(req, res) {
    res.render('chars');
  });
  app.get('/canvas', function(req, res) {
    res.render('canvas');
  });
};

