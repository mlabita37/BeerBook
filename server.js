var express     = require('express');
var app         = express();
var bodyParser  = require('body-parser');
var ejs         = require('ejs');
var mongoose    = require('mongoose');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'ejs');

mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/brewbook-01');

var indexRouter = require('./routers/index');
app.use('/', indexRouter);

var port = 5000;
app.listen(port, function(){
  console.log('...listening on ' + port);
});
