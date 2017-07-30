/* util.inherits 继承 */
var util = require('util'); 
function Base() { 
	this.name = 'base'; 
	this.base = 1991; 
	this.sayHello = function() { 
	console.log('Hello ' + this.name); 
	}; 
} 
Base.prototype.showName = function() { 
	console.log(this.name);
}; 
function Sub() { 
	this.name = 'sub'; 
} 
util.inherits(Sub, Base); 
var objBase = new Base(); 
objBase.showName(); 
objBase.sayHello(); 
console.log(objBase); 
var objSub = new Sub(); 
objSub.showName(); 
//objSub.sayHello(); // 报错
console.log(objSub);


/* util.inspect 将对象转化为字符串 */
var util = require('util'); 
function Person() { 
	this.name = 'byvoid'; 
	this.toString = function() { 
	return this.name; 
	}; 
} 
var obj = new Person(); 
console.log(util.inspect(obj)); // Person { name: 'byvoid', toString: [Function] }
console.log(util.inspect(obj, true)); 
/*
Person {
  name: 'byvoid',
  toString: 
   { [Function]
     [length]: 0,
     [name]: '',
     [arguments]: null,
     [caller]: null,
     [prototype]: { [constructor]: [Circular] } } }
*/

/* util.isArray(object)  判断 "object" 是否为数组 */
var util = require('util');

util.isArray([])
  // true
util.isArray(new Array)
  // true
util.isArray({})
  // false


/* util.isRegExp(object) 正则表达式 */

/* util.isDate(object)  日期 */

/* util.isError(object)  错误对象 */