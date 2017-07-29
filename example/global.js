// __filename 表示当前正在执行的脚本的文件名
// __dirname 表示当前执行脚本所在的目录

// 两秒后执行以上函数
var t = setTimeout(printHello, 2000);
// 清除定时器
clearTimeout(t);


function printHello(){
   console.log( "Hello, World!");
}
// 两秒后执行以上函数
setInterval(printHello, 2000);

/* console */
console.error(); // 与console.log() 用法相同，只是向标准错误流输出。
console.trace(); // 向标准错误流输出当前的调用栈

console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
// 
console.timeEnd('获取数据'); // 获取数据: 0ms

console.info("程序执行完毕。")

/* process */
process.on('exit', function(code) { // exit 当进程准备退出时触发

  // 以下代码永远不会执行
  setTimeout(function() {
    console.log("该代码不会执行");
  }, 0);
  
  console.log('退出码为:', code);
});
console.log("程序执行结束");


// 输出到终端
process.stdout.write("Hello World!" + "\n");

// 通过参数读取
process.argv.forEach(function(val, index, array) {
   console.log(index + ': ' + val); // 0: node  1: /web/www/node/main.js
});

// 获取执行路径
console.log(process.execPath); // /usr/local/node/0.10.36/bin/node

// 平台信息
console.log(process.platform);

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage()); // { rss: 12541952, heapTotal: 4083456, heapUsed: 2157056 }