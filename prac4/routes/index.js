var express = require('express');
const { status } = require('express/lib/response');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

var times = 0;
router.get('/last.txt', function(req, res,next) {
  var timestamps = new Date();
  if (times == 0)
    res.send() ;
  else
    res.send(timestamps) ;
  times ++;
});

var count = 0;
router.get('/color.html', function(req, res,next) {

  var content = ['red', 'yellow' ,'green','blue'];
  if(count>3)
    count = count - 4;
  var h1content = content[count];    
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Express</title>
  </head>

  <body>
      <h1 style = "color:${h1content}">${h1content}</h1>
  </body>
  
  </html>
  `);
  
  count ++;
});

var list = ``; 
router.get('/log.html', function(req, res, next) {
  var timestamp = new Date();
  list = list + `<li>` + timestamp + `</li>`;
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Express</title>
    </head>
    <body>
      <ul>
        `+ list + `
      </ul>
    </body>
    </html>
    `);
});


var num = 0;
router.get('/color.txt', function(req, res,next) {

  var content = ['red', 'yellow' ,'green','blue'];
  if(num>3)
  num = num - 4;
  var h1content = content[num];    
  res.send(h1content);
  
  num ++;
});

var logjson = []; 
router.get('/log.json', function(req, res, next) {
  var timestamp = new Date();
  logjson.push(timestamp);
  console.log(typeof(logjson)); 
  res.send(logjson);
});

router.get('/log-ro.json', function(req, res, next) {
  res.send(logjson);
});

var countaccept = 0;
router.get('/accept', function(req, res, next) {
  res.status(200).end();
  countaccept++;
});

router.get('/content.ajax', function(req, res, next) {
  if(countaccept === 0 )
  {
    res.status(403).send('Forbidden');
  }
  else
  {
    res.send(`<p>right</p><p>good</p>`);
  }

});



module.exports = router;
