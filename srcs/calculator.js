const express = require("express");
// const bodyParser = require("body-parser");

const app = express();
// app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get("/", function(req, res){
	res.sendFile(__dirname + "/app/index.html");
});

// app.post("/", function(req, res){
// 	res.send("gracias bro");
// })

// app.get("/about", function(req, res){
// 	res.send("I'm el Pako<br>Soy el mejor de Korea<br>Jugando al Ping Pong");
// })

app.listen(3000, function(){
	console.log("Server started on port 3000");
});