1.
'telnet'不是内部或外部命令解决方法
控制面板-程序-打开或关闭Windows功能-勾选Telnet服务器和Telnet客户端

2.
clientList.splice(clientList.indexOf(cleanup[i]), 1)
IE9以前的版本都不支持此方法
解决方法：
if(!Array.indexOf){
  	Array.prototype.indexOf = function(el){
	 	for (var i=0,n=this.length; i<n; i++){
	 		if (this[i] === el){
	  			return i;
	 		}
	 	}
	 	return -1;
   	} 
}

3.
Express 增加了两样http 模块所没有的功能：
.根据HTTP 请求的不同方法进行过滤
.根据特定的URL 进行过滤

4.
express.bodyParser 中间件只能够处理POST 方法的数据，
而且要求HTTP 头的content-type 属性是application/x-www-form-urlencoded 或application/json。
新版本的express中已经不包含bodyparser了
解决方法：
1.需要单独安装bodyparser(npm install body-parser)
2.然后在app.js中加载body-parser模块var bodyParser = require('body-parser')
3.把app.use(express.bodyParser())替换成app.use(bodyParser.urlencoded({ extended: false }))

5.
node.js的express模块已经更新了，新版本不支持旧版本的createServer()。
解决方法：
将 var app = express.createServer()
替换成 var app = require('express')()