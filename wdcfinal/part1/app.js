var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();
var mysql = require('mysql');
const { response } = require('express');
const { stringify } = require('querystring');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'jc',
  database: 'OrderSystem'
});

connection.connect();
// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(__dirname + "/public", { index: "index.html" }));

// connection.query('SELECT * FROM orders', function (error, results, fields) {
//   // connection.release();
//   if (error) throw error;
//   var deal = JSON.parse(JSON.stringify(results));
//   console.log('The solution is: ', deal);
//   // console.log(typeof(results));

//   console.log(deal);
//   // res.json(deal);
// });

app.get('/searchorder', function (req, res) {
  connection.query('SELECT * FROM orders WHERE ordertime <= "2022-06-20"', function (error, results, fields) {
    // connection.release();
    if (error) throw error;
    var deal = JSON.parse(JSON.stringify(results));
    console.log('The solution is: ', deal);
    // console.log(typeof(results));

    // console.log(deal);
    res.json(deal);
  });
  // var order = JSON.stringify(results);
  // res.end();
})

app.get('/ava', function (req, res) {
  connection.query('SELECT * FROM seats WHERE ordertime IS NULL', function (error, results, fields) {
    if (error) throw error;
    var deal = JSON.parse(JSON.stringify(results));
    // console.log('The solution is: ', deal);
    res.json(deal);
  });
})

app.get('/order', function (req, res) {
  // res.send(req.query);
  // console.log(req.query);
  let data = req.query.dataselect;
  let section = req.query.sectionselect;
  console.log(data);
  console.log(section);
  let searchsql = 
    connection.query('SELECT * FROM seats WHERE ordertime IS NULL', function (error, results, fields) {
    if (error) throw error;
    var deal = JSON.parse(JSON.stringify(results));
    // console.log('The solution is: ', deal);
    res.json(deal);
  });

});

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

module.exports = app;
