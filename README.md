1.
'telnet'不是内部或外部命令解决方法
控制面板-程序-打开或关闭Windows功能-勾选Telnet服务器和Telnet客户端

2.
clientList.splice(clientList.indexOf(cleanup[i]), 1)
IE9以前的版本都不支持此方法
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
