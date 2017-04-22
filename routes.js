var express = require("express");
var app = express();
var PORT = 3000
var tablesArr = [];
var waitList = [];
app.get('/tables',function (req,res) {
	res.send("this is tables");
});
app.get('/reserve',function (req,res){
	res.send("this is reserve");
});
app.get('/api/:tables',function(req,res){
	var newTable = req.params.tables;
	console.log(req.params);
});
app.listen(PORT,function(){
console.log("Listening on PORT: ",PORT);
});