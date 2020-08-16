var db      = require('./dbconnection');
module.exports = {

    getProdList: function(search, callback){
        var sql="SELECT * FROM `product`";
            db.getResults(sql,function(result){
                callback(result);
            });
    }
}
