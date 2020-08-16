var db      = require('./dbconnection');
module.exports = {

    getProdList: function(search, callback){
        var sql="SELECT * FROM `product`";
            db.getResults(sql,function(result){
                callback(result);
            });
    },
    addProduct: function(name, quantity, price, callback){
        var sql="INSERT INTO `product`(`name`, `quantity`, `price`) VALUES ('"+name+"','"+quantity+"','"+price+"');";
        db.getResults(sql,function(result){
            callback(result);
        });
    },

}
