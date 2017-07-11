var http = require('http'),
	assert = require('assert')
var opts = {
	host: 'localhost',
	port: 8000,
	path: '/send',
	method: 'POST',
	//因为要模拟网页表单的操作，所以需要采用x-www-form-urlencoded 格式发送数据
	headers: {'content-type':'application/x-www-form-urlencoded'}
}
//工厂方法，创建新的http请求对象
var req = http.request(opts, function(res) {
	res.setEncoding('utf8')
	var data = ""
	res.on('data', function(d) {//d为部分数据
		data += d
	})
	res.on('end', function() {
		//能对数据进行“===”级别的一致性检查，由于缺少received的r，所以报错
		assert.strictEqual(data, '{"status":"ok","message":"Tweet eceived"}')
	})
})
req.write('tweet=test')
req.end()