/*
new Buffer(5)
new Buffer(array)
new Buffer(string, [ecoding])
 */
// var bf = new Buffer('miaov', 'utf-8'); // 默认编码'utf-8'
// console.log(bf); // 显示为十六进制

// for(var i=0; i<bf.length; i++) { // 当前内容字节长度
// 	console.log(bf[i]); // 显示为十进制
// 	console.log(bf[i].toString(16)); // 显示为十六进制
// 	console.log(String.fromCharCode(bf[i])); // 显示为字母
// }

/*bf.write*/
// var str = "miaov";
// var bf = new Buffer(5);
// bf.write(str, 1, 3, 'utf-8');

// var bf = new Buffer('miaov');
// console.log(bf.toString('utf-8', 1, 3)); //ia
// var bf2 = new Buffer('妙味');
// console.log(bf2.toString('utf-8', 1));

// console.log(bf.toJSON());

/*slice*/
var bf = new Buffer('miaov');
var bf2 = bf.slice();
console.log(bf2);

var bf3 = bf.slice(2, 4); // 不包含第四位，与原先的是同一引用地址
console.log(bf3);

/*copy*/
var bf4 = new Buffer(10);
// targetStart, sourceStart, sourceEnd
bf.copy(bf4, 1, 2, 4); // 另一引用地址，不会影响原先的bf
console.log(bf4);