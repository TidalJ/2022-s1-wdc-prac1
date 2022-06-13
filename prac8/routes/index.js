var express = require('express');
var router = express.Router();


/* GET home page. */
// router.get('/', (req, res) => {
//   res.render('index', { title: 'Express' });
// });

router.get("/get",(req,res) =>{
  req.pool.getConnection( (err, connection) => {
    if (err) {
      console.log(err.message);
      return;
    }

    let query = "SELECT * FROM actor;";
    connection.query(query, (err, rows, fields) => {
        connection.release();
        if (err) {
          console.log(err.message);
          return;
        }
        // res.json(row =>{
        //   rows.actor_id;
        // });
        res.send(
          rows
        );
        // res.json(rows.foreach(row => {
        //   console.log(rows.actor_id);
        // }));
        // console.log(typeof(rows));
        // rows.forEach(row => {
        //   console.log(rows.actor_id);
        // })
    });
});
})

router.post('/add', (req, res) => {
  req.pool.getConnection( (err, connection) => {
      if (err) {
          console.log(err.message);
          return;
      }

      let last_name = req.body.last_name;
      let first_name = req.body.first_name;
      let query = "INSERT INTO actor (first_name, last_name) VALUES (?, ?);";
      connection.query(query, [first_name, last_name], (err, rows, fields) => {
          connection.release();
          if (err) {
            console.log(err.message);
            return;
          }

      });
  });
});

module.exports = router;
