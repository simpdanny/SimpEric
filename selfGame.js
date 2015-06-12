var express = require('express');
var app = express();

var exphbs = require('express-handlebars');
app.engine('.hbs', exphbs({extname: '.hbs', defaultLayout: 'main'}));
app.set('view engine', '.hbs');

app.set('port', 4000);
app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
  res.render('home');
});
app.get('/fight', function(req, res) {
  res.render('fight');
});
app.get('/chars', function(req, res) {
  res.render('chars');
});
app.get('/canvas', function(req, res) {
  res.render('canvas');
});

app.use(function(req, res) {
  res.status(404);
  res.render('404');
});

app.use(function(err, req, res, next) {
  console.log(err.stack);
  res.status(500);
  res.render('500');
});


app.listen( app.get('port'), function() {
  console.log('Express start on http://localhost:' + app.get('port') + '; press Ctrl-C to terminate');
});


