var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/xem/123', (req, res, next) =>{
  res.send("Trang chi tiết user: ");
});
//
router.get('/xem/:id', (req, res, next) =>{
  res.send("Trang chi tiết user: " + req.params.id);
});
//http://localhost:3000/users/xem/xxxxx   (xxxxx = id)
//http://localhost:3000/users/xem?id=2222

router.get('/xem', (req, res, next) =>{
  res.send("Trang chi tiết user: " + req.query.id);
});

module.exports = router;
