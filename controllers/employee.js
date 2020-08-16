var express = require('express');
var employee = require.main.require('./models/employee');
var router = express.Router();
const { check, validationResult } = require('express-validator');

router.get('/', function(req, res){
    var search = req.query.search;
    employee.getProdList(search, function (result){
        res.render('employee/index',{products: result});
    });
});
module.exports = router;