const mongoose = require('mongoose');
mongoose.connect( 'mongodb://127.0.0.1:27017/demo_rest_api')
       .catch( (err) =>{
               console.log("Loi ket noi CSDL");
               console.log(err);
       });
      
module.exports = {mongoose}
