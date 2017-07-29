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


1.
Node.js模块分为两类：
.原生（核心）模块，在Node.js源代码编译的时候编译了二进制执行文件，加载速度最快
.文件模块，动态加载
Node.js对原生模块和文件模块都进行了缓存

文件模块分为三类：
.js 通过fs模块同步读取js文件并编译执行
.node 通过C/C++进行编译的Addon。通过dlopen方法进行加载
.json 读取文件，调用JSON。parse解析加载

Node.js在编译js文件过程中对js文件内容进行头尾包装
(function (exports, require, module, __filename, __dirname)) {
	var circle = require('./circle.js');
	console.log(circle.area(4));
});
所以require方法没有定义却能使用
__filename, __dirname在查找文件路径的过程中分析得到后传入
module是这个模块对象自身
exports是在module的构造函数中初始化的一个空对象（{}，而不是null）