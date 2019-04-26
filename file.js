var express = require("express");
var http = require('http');
// var hbs = require("hbs");
var app = express()
var multer = require("multer");
app.set('view engine', 'hbs')

app.get("/home",(req,res)=>{
    res.render("home.hbs")
});

    app.post("/upload",(req,res)=>{
    var storage = multer.diskStorage({
        destination: function (req, file, cb) {
          // var Tesseract = require('tesseract.js');
          // console.log(file);
          // Tesseract.recognize(file)
          // .progress(function  (p) {x  })
          // .catch(err => console.error(err))
          // .then(function (result) {
          //   var output = result.text;  
          //   res.writeHead(200, {'Content-Type': 'text/html'}); 
          //   res.write(output); //write a response to the client
          //   res.end(); //end the response
    // });
          cb(null, __dirname+"\\public")
        },
        filename: function (req, file, cb) {
          cb(null, file.originalname)
        },
        buffer: function (req, file, cb) {
          console.log(file);
          cb(null, file)
        } 
    })
    var upload = multer({ storage: storage }).array('myfile',4)
    //console.log(file.originalname);

    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        // A Multer error occurred when uploading.
        //console.log("err",err)
        res.send({"ret": "err"})
      } 
      else if (err) {
        // An unknown error occurred when uploading.
        //console.log("err",err)
        res.send({"ret": "err"})
      }
          //console.log("res",res)
          res.send({"ret": "sucess"})
        
        // Everything went fine.
    })

});


var server = app.listen(3000,()=>{
    console.log("Server Started on",server.address().port)
})


// var filename = file;

// http.createServer(function (req, res) {

//   // if(req.path === "/sendtoocr"){
//     var Tesseract = require('tesseract.js');
//     Tesseract.recognize(filename)
//     .progress(function  (p) { console.log('progress', p)  })
//     .catch(err => console.error(err))
//     .then(function (result) {
//       var output = result.text;  
//       res.writeHead(200, {'Content-Type': 'text/html'}); 
//       res.write(output); //write a response to the client
//       res.end(); //end the response
//     });
//   // }
  
  
// })