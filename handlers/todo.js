var mongoose = require('mongoose');
var Todo = mongoose.model('Todo');

exports.index = function(req, res) {
  Todo.find().sort('-update_at').
    exec(function(err, todos) {
      if (err) return next(err);
      res.render('todo', {
        todos: todos
      });
    });
};

exports.create = function(req, res, next) {
  new Todo ({
    content: req.body.content,
    update_at: Date.now(),
  }).save(function(err, todo){
    if (err) return next(err);
    res.redirect('/todo');
  });
};

exports.destroy = function(req, res, next) {
  Todo.findById( req.params.id, function (err, todo) {
    todo.remove( function(err, todo) {
      if (err) return next(err);
      res.redirect('/todo');
    });
  });
};

exports.edit = function(req, res, next) {
  Todo.find().sort('-update_at').
    exec(function(err, todos) {
      if (err) return next(err);
      res.render('todo-edit', {
        todos: todos,
        current: req.params.id
      });
    });
};

exports.update = function(req, res) {
  Todo.findById( req.params.id, function(err, todo) {
    todo.content = req.body.content;
    todo.update_at = Date.now();
    todo.save( function(err, todo){
      if (err) return next(err);
      res.redirect('/todo');
    });
  });
};
