var db      = require('./dbconnection');

module.exports = {
    getAllEmp: function(callback){
        var sql="SELECT * FROM `personal_details` ,login_cred where personal_details.u_id = login_cred.id";
        console.log(sql);
        db.getResults(sql,function(result){
            if(result.length>0){
                callback(result);
                
            }
            else{
                callback([]);
            }
        });
    }
}