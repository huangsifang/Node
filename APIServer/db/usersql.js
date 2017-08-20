var UserSQL = {  
    insert:'INSERT INTO User(uid,pwd,name,age,city) VALUES(?,?,?,?,?)', 
    queryAll:'SELECT * FROM User',  
    getUserById:'SELECT * FROM User WHERE uid = ? ',
};
module.exports = UserSQL;