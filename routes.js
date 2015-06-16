var main = require('./handlers/main.js');
var todo = require('./handlers/todo.js');

module.exports = function(app) {
  app.get('/', main.home);
  app.get('/fortune', main.fortune);

  app.get('/todo', todo.index);
  app.post('/todo-create', todo.create);
  app.get('/todo-destroy/:id', todo.destroy);
  app.get('/todo-edit/:id', todo.edit);
  app.post('/todo-update/:id', todo.update);

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

