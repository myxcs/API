exports.DanhSach = (req, res, next)=>{
    res.send("<h1>Danh sách sản phẩm</h1>");
 }
 exports.XemChiTiet = (req, res, next)=>{
    res.send("<h1>Xem chi tiết sản phẩm</h1>");
 }
 var myMD = require('../models/spModel')
exports.DanhSach = async (req, res, next)=>{
  
   let list = await myMD.spModel.find().sort({name:1});


   res.render('product/danh-sach', { listSP : list  });
}
