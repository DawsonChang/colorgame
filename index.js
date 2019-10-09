const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));

const indexRoutes = require("./routes/index");

app.use("/", indexRoutes);

app.listen(process.env.PORT, process.env.IP, function(){
   console.log("The color game server is starting!"); 
});