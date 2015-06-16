var mongoose = require('mongoose');
var Char = mongoose.model('Character');

exports.index = function(req, res) {
  Char.find().sort('-update_at').
    exec(function(err, chars) {
      if (err) return next(err);
      res.render('character', {
        chars: chars
      });
    });
};

exports.create = function(req, res, next) {
  new Char ({
    name: req.body.name,
      src: req.body.src,
      taunt: req.body.taunt,
      joke: req.body.joke,
      update_at: Date.now(),
  }).save(function(err, Char){
    if (err) return next(err);
    res.redirect('/character');
  });
};

exports.destroy = function(req, res, next) {
  Char.findById( req.params.id, function (err, Char) {
    Char.remove( function(err, Char) {
      if (err) return next(err);
      res.redirect('/character');
    });
  });
};

exports.edit = function(req, res, next) {
  Char.find().sort('-update_at').
    exec(function(err, Chars) {
      if (err) return next(err);
      res.render('character-edit', {
        Chars: Chars,
        current: req.params.id
      });
    });
};

exports.update = function(req, res) {
  Char.findById( req.params.id, function(err, Char) {
    Char.content = req.body.content;
    Char.update_at = Date.now();
    Char.save( function(err, Char){
      if (err) return next(err);
      res.redirect('/character');
    });
  });
};
