var express = require("express");
var app = express();
var PORT = 3000

app.get('/tables',function (req,res) {
	res.send("this is tables");
})
app.get('/reserve',function (req,res){
	res.send("this is reserve");
})
app.listen(PORT,function(){
console.log("Listening on PORT: ",PORT);
});