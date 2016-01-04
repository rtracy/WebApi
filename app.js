/**
 * Created by rob on 1/3/2016.
 */

var express = require('express'),
    mongoose = require('mongoose');
bodyParser = require('body-parser');


var db;

if (process.env.ENV == 'test')
    db = mongoose.connect('mongodb://localhost/bookAPI_test');
else
    db = mongoose.connect('mongodb://localhost/bookAPI');


var app = express();
var port = process.env.PORT || 3000;


app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var Book = require('./models/bookModel');
var bookRouter = require('./routes/bookRoutes')(Book);
app.use('/api/books', bookRouter);

//var Author = require('./models/autherModel');
//var authorRouter = require('./routes/authorRoutes')(Auther);
//app.use('/api/authors', authorRouter);

app.get('/', function (req, res) {
    res.send('welcome to my apII');
});

app.listen(port, function () {
    console.log('listening on port: ' + port);
});


module.exports = app;


