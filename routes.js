var main = require('./handlers/main.js');
var todo = require('./handlers/todo.js');
var character = require('./handlers/character.js');

module.exports = function(app) {
  app.get('/', main.home);
  app.get('/fortune', main.fortune);

  app.get('/todo', todo.index);
  app.post('/todo-create', todo.create);
  app.get('/todo-destroy/:id', todo.destroy);
  app.get('/todo-edit/:id', todo.edit);
  app.post('/todo-update/:id', todo.update);

  app.get('/character', character.index);
  app.post('/character/create', character.create);
  app.get('/character/destroy/:id', character.destroy);
  app.get('/character/edit/:id', character.edit);
  app.get('/character/update/:id', character.update);
  
  app.get('/fight', function(req, res) {
    res.render('fight');
  });
  app.get('/canvas', function(req, res) {
    res.render('canvas');
  });
};

