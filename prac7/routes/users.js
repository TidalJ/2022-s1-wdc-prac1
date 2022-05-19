var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res) {
  res.send('respond with a resource');
  // next();
});



router.post('/*',(req,res,next) => {
  console.log("POST from a user");
  // res.send("qwq");
  next();
});


router.post('/*',(req,res,next) => {
  if(req.is('application/json') != 'application/json'){
    res.sendStatus(412);    
  }
  next();
});

var allPosts = [];
router.post('/addpost',(req, res) => {
  allPosts.unshift({ "title" : req.body.title, "content" : req.body.content });
  res.sendStatus(200);
});

router.get('/getposts',(req, res) => {
  res.send(allPosts);
});

// var base = ''
// router.get('/accepted',(req,res) => {
//   // if(req.session.name == undefined){
//   //   res.sendStatus(403);
//   //   // console.log(key);
//   //   console.log(req.session.name);
//   //   res.send();
//   // }
//   // else{
//   //   res.send('It works');
//   //   console.log(req.session.name);
//   // }
//   console.log(req.session.id);
// });

module.exports = router;
