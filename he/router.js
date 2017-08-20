var optfile = require('./models/optfile');
var  url  =  require('url');    
var  querystring  =  require('querystring');  //post需导入 
var OptPool = require('./models/OptPool'); 
function getRecall(req, res) {
    res.writeHead(200, {'Content-Type': 'text/html; charset=utf-8'});  
    function recall(data){
        res.write(data);
        res.end('');//不写则没有http协议尾
    }
    return  recall;
}
module.exports = {
    login:function(req,res){
        //--------get方式接收参数----------------      
        /*      
        var    rdata    =    url.parse(req.url,true).query;      
                                console.log(rdata);    
        if(rdata['email']!=undefined){  
            console.log(rdata['email']);      
                                }    
        */      
        //-------post方式接收参数----------------      
              
        var  post  =  '';          //定义了一个post变量，用于暂存请求体的信息      
      
        req.on('data',  function(chunk){        //通过req的data事件监听函数，每当接受到请求体的数据，就累加到post变量中      
            post  +=  chunk;      
        });      
        //-------注意异步-------------      
        req.on('end',  function(){        //在end事件触发后，通过querystring.parse将post解析为真正的POST请求格式，然后向客户端返回。      
            post  =  querystring.parse(post);      
            console.log('email:'+post['email']+'\n');        
            console.log('pwd:'+post['pwd']+'\n');

            var optPool = new OptPool(); 
            var pool = optPool.getPool(); 

            //执行SQL语句 
            pool.getConnection(function(err,conn){ 
                //----插入 
                var userAddSql = 'insert into user (uname,pwd) values(?,?)'; 
                var param = [post['email'],post['pwd']];
                conn.query(userAddSql,param,function(err,rs){
                    if(err){ 
                        console.log('insert err:',err.message); 
                        return; 
                    } 
                    console.log('insert success'); 
                    //conn.release(); //放回连接池
                })
                //查询 
                conn.query('SELECT * from user', function(err, rs) { 
                    if (err) { 
                        console.log('[query] - :'+err); 
                        return; 
                    }   
                    for(var i=0;i<rs.length;i++){
                        console.log(rs[i].uname); 
                    }
                    conn.release(); //放回连接池
                });
            });
        });      
        //---------------------------------------      
        recall = getRecall(req,res);
        optfile.readfile('./views/login.html',recall);
    },
    zhuce:function(req,res){
        recall = getRecall(req,res);
        optfile.readfile('./views/zhuce.html',recall);
    },
    writefile:function(req,res){
        function recall(data){
            res.write(data);
            res.end('');//不写则没有http协议尾
        }
        optfile.writefile('./views/one.txt','今天阳光灿烂',recall);
    },
    showImg:function(req,res){
        res.writeHead(200, {'Content-Type':'image/jpeg'});
        optfile.readImg('./imgs/pig.jpg',res);
    }
}