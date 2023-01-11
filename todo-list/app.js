//const express = require("express");

//const app = express() ;

//app.listen(8000, () => {
  //console.log("app start");
//})

var mysql = require('mysql');

    var con = mysql.createConnection({
      host: "localhost",
      user: "bono",
      database: "todo",
      password: "background",
      //insecureAuth : true
    });

    con.connect(function(err) {
      if (err) {
        console.log("--------error-----");
        console.log(err);
        return err
      }
      console.log("Connected!");
    });

