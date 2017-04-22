var express = require("express");
var path = require("path");
var bodyParser = require('body-parser');
var app = express();
var PORT = 3000
var tablesArr = [];
var waitList = [];

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended:true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
	type:"application/vnd.api+json"
}));
app.get('/all',function (req,res) {
	res.sendFile(path.join(__dirname,"table.html"))
});
app.get('/reserve',function (req,res){
	res.sendFile(path.join(__dirname,"reservation.html"));
});
app.get('/api/:tables',function(req,res){
	var newTable = req.params.tables;
	if(newTable === "booked"){
		res.json(tablesArr);
	}
	else{
		res.json(waitList);
	}
});

app.post('/reserve-post', function(req,res){
	var newTable = req.body;
	if(tablesArr.length < 5){
			tablesArr.push(newTable);
			res.send("You have booked a table");
	}
	else{
		waitList.push(newTable);
		res.send("you are on the waiting list");
	}

})
app.listen(PORT,function(){
console.log("Listening on PORT: ",PORT);
});