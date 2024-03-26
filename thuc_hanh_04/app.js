const express = require('express');
const app = express();
const port = 3000;

// Định nghĩa route cho trang chủ
app.get('/', (req, res) => {
  res.send("<h1>Đăng nhập</h1><br><form action='/home'><input type='text' name='username'><br><br><input type='password' name='password'><br><br><button type='submit'>Đăng nhập</button></form>");
});

// Định nghĩa route cho trang home
app.get('/home', (req, res) => {
  res.send(`
  <h1>Home</h1>
  <ul class="nav nav-pills nav-fill gap-2 p-1 small bg-primary rounded-5 shadow-sm" id="pillNav2" role="tablist" style="--bs-nav-link-color: var(--bs-white); --bs-nav-pills-link-active-color: var(--bs-primary); --bs-nav-pills-link-active-bg: var(--bs-white);">
  <li class="nav-item" role="presentation">
    <button class="nav-link active rounded-5" id="home-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="true">Home</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-5" id="profile-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Tin tức</button>
  </li>
  <li class="nav-item" role="presentation">
    <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Sản phẩm</button>
  </li>
  <li class="nav-item" role="presentation">
  <button class="nav-link rounded-5" id="contact-tab2" data-bs-toggle="tab" type="button" role="tab" aria-selected="false">Liên hệ</button>
</li>
</ul>
  `);

});

// Khởi động server
app.listen(port, () => {
  console.log(`Server đang lắng nghe tại http://localhost:${port}`);
});
