var express = require('express');
const session = require('express-session');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/brew', (req,res) => {
  // res.send(req.query.drink)
  var q = req.query.drink;
  // res.send(q)
  if(q == 'tea')
    res.send('A delicious cup of tea!');
  else if(q == 'coffee')
    res.status(418).send('i am a teapot');
  else
    res.status(400).send('Bad Request');

})

var count = 0;
var lastText = '';
router.post('/pass-it-on',(req,res) => {

  var text = req.body.message;
  if(text === undefined )
    res.sendStatus(400);
  else if(count === 0)
    res.send('first')
  else
    res.send(lastText)
  count++;
  lastText = text;
})

// var suf = [];
// var finalText = '';
// var num = 0;
// router.post('/combine',(req,res) => {
//   var temp = req.body.lines;
//   suf[num] = req.body.suffix;
//   finalText = finalText + temp + suf[num] ;
//   // console.log(temp);

//   res.send(finalText);
//   num ++;
// })

router.post('/combine', (req, res, next) => {
  var suf = req.body.suffix;
  var result = "";
  for (var i=0;i<req.body.lines.length;i++){
    result = result + req.body.lines[i] + suf + '\n';
  }
  res.send(result);
});



router.get('/cookie',(req,res) => {
  if("task3_1" in req.cookies === false || req.cookies === null){
    res.cookie("task3_1",'1');
    res.send('new');
  }
  else{
    var first = Number(req.cookies.task3_1);
    first++;
    res.cookie("task3_1", first.toString(10));
    res.send('update');
  }
});

// router.get('/tcaccept',(req,res) => {
//   req.session.name = "cs";
//   console.log(req.session.name);
//   res.send("It works");
// });


// router.post('/tcaccept',(req,res) => {
//   // req.session.name = "cs";
//   // base = req.session.variableName
//   // console.log(key);
//   // key = req.session.name;
//   console.log(req.sessionID);
//   // req.sessionID
//   // req.session.save(function(err))
//   // console.log(req.session.id);
//   // session = req.session;
//   // console.log(session);
//   res.send("It works");
// });



module.exports = router;
