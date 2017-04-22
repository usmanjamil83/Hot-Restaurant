var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000
var tablesArr = [];
var waitList = [];
app.get('/all',function (req,res) {
	res.sendFile(path.join(__dirname,"table.html"))
});
app.get('/reserve',function (req,res){
	res.sendFile(path.join(__dirname,"reservation.html"));
});
app.get('/api/:tables',function(req,res){
	var newTable = req.params.tables;
	if(newTable === booked){
		res.json(tablesArr);
	}
	else{
		res.json(waitList);
	}
});

app.post('/all', function(req,res){
	if(tablesArr.length < 5){
			tablesArr.push(req)
	}
	else{
		waitList.push(req)
	}
})
app.listen(PORT,function(){
console.log("Listening on PORT: ",PORT);
});