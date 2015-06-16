var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var app = express();

// mongoose
var credentials = require('./credentials.js');
var dbopts = {
  server: {
    socketOptions: {keepAlive: 1}
  }
};
//mongoose.connect(credentials.mongo.connectString, dbopts);
mongoose.connect('140.112.21.27:8888', dbopts);
require('./models/db.js');

// body-parser
app.use(bodyParser());

// handlebars
app.engine('.hbs', exphbs({
  extname: '.hbs', 
  defaultLayout: 'main',
  helpers: {
    section: function(name, options) {
      if (!this._sections) this._sections = {};
      this._sections[name] = options.fn(this);
      return null;
    },
    ifeq: function(v1, v2, options) {
      if (v1 == v2) return options.fn(this);
      return options.inverse(this);
    }
  }
}));
app.set('view engine', '.hbs');
require('./routes.js')(app);

// other environments
app.set('port', 4000);
app.use(express.static(__dirname + '/public'));

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


