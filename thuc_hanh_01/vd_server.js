const http = require('http');
const server = http.createServer( (req, res)=>{
   res.writeHead(200, "Ket noi thanh cong", {
       'Content-Type':'text/html'
   })
   // viết nội dung gửi xuống client
   res.write("<meta charset='utf-8'/> <h1>Xin chào lớp</h1>");
   res.end();// kết thúc gửi xuống client
}  );


// khởi động server
server.listen(8080);
console.log("Server đang chạy ở địa chỉ:  http://localhost:8080");
//chạy lệnh: node vd-server.js  sau đó mở trình duyệt web vào địa chỉ trên
