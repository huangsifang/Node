var async = require('async'); 
/*
function oneFun() 
{ 
    ii=0; 
    setInterval(function(){ 
        console.log("aaa="+new Date()); 
        ii++; 
        if(ii==3){ 
            clearInterval(this); 
        } 
    },1000); 
    console.log("oneFun"); 
} 
function twoFun() 
{ 
    jj=0; 
    setInterval(function(){ 
        console.log("bbb="+new Date()); 
        jj++; 
        if(jj==3){ 
            clearInterval(this); 
        } 
    },1000); 
    console.log("oneFun执行完毕"); 
}  
    
oneFun();   
twoFun();
console.log("主进程执行完毕");
*/
  
/*
function exec(){  
    async.series({ //串行无关联  //parallel并无关联
        one: function(done){  
            ii=0;  
            setInterval(function(){  
                console.log('aaa='+new Date());  
                ii++;  
                if(ii==3){  
                    clearInterval(this);  
                    done(null,{one:"one"});  
                }  
            },1000);  
        },  
        two: function(done){  
            jj=0;  
            setInterval(function(){  
                console.log('bbb='+new Date());  
                jj++;  
                if(jj>3){  
                    clearInterval(this);  
                    done(null,{two:"two"});  
                }  
            },1000);  
        }  
    },  
    function(err,rs) {   
        console.log(err);  
        console.log(rs);  
    });  
}  
exec();
*/


// 1.变成方括号
// 2.没有one，two匿名函数
// 3.第一步结果是第二步的参数    
function exec(){ 
    async.waterfall( //串行有关联，瀑布流
        [ 
            function(done){ 
                ii=0; 
                setInterval(function(){ 
                    console.log("aaa="+new Date()); 
                    ii++; 
                    if(ii==3){ 
                        clearInterval(this); 
                        done(null,'one完毕'); 
                    } 
                },1000); 
            }, 
            function(preValue,done){ 
                jj=0; 
                setInterval(function(){ 
                    console.log(preValue+"="+new Date()); 
                    jj++; 
                    if(jj==3){ 
                        clearInterval(this); 
                        done(null,preValue+',two完毕'); 
                    } 
                },1000); 
                 
            } 
        ],function(err,rs){ 
            console.log(err); 
            console.log(rs); 
        }     
    ) 
} 
exec();


// parallelLimit(tasks, limit, [callback])     
     
// parallelLimit函数和parallel类似，但是它多了一个参数limit。     
// limit参数限制任务只能同时并发一定数量，而不是无限制并发,     
     
async.parallelLimit([     
    function(callback){     
        callback(null, 'one');     
    },     
    function(callback){     
        callback(null, 'two');     
    }     
],     
2, //只允许同时有两个函数并行     
function(err, results){     
    console.log(results);     
});