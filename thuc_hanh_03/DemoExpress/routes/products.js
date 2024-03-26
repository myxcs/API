var express = require('express');
var router = express.Router();
var productCtrl = require('../controllers/product.ctrl')

// http://localhost:3000/products
router.get('/',   productCtrl.DanhSach);
// http://localhost:3000/products/view/123456
router.get('/view/:id', productCtrl.XemChiTiet);
//khu vực code
// http://localhost:3000/products
router.get('/', (req, res, next)=>{
    res.send("Hello");
});
// http://localhost:3000/products/view/123456
router.get('/view/:id', (req, res, next)=>{
res.send("<h1>Xem chi tiết sản phẩm</h1>");
});
// http://localhost:3000/products/add
router.get('/add', (req, res, next)=>{
res.send("<h1>Thêm mới</h1>");
});

// http://localhost:3000/products/edit/123456
router.get('/edit/:id', (req, res, next)=>{
res.send("<h1>Sửa sản phẩm</h1>");
});
// http://localhost:3000/products/delete/123456
router.get('/delete/:id', (req, res, next)=>{
res.send("<h1>Xóa sản phẩm</h1>");
});

//chú ý export
module.exports = router;
