var express = require('express');
var bodyParser = require('body-parser');
var app = express();
//var app = express.createServer()
app.listen(8000);
var tweets = [];
app.get('/', function(req, res) {
	res.send('Welcome to Node Twitter');
})
app.post('/send', bodyParser.urlencoded({extended:false}), function(req, res) {
	if (req.body && req.body.tweet) {
		tweets.push(req.body.tweet)
		//自动将对象序列化为JSON并添加对应的HTTP头
		res.send({status:"ok", message:"Tweet received"})
	} else {
		// 没有tweet ？
		res.send({status:"nok", message:"No tweet received"})
	}
})
app.get('/tweets', function(req,res) {
	//把tweets数组内容以JSON的形式返回
	res.send(tweets)
})