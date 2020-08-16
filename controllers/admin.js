var express = require('express');
const { body, validationResult } = require('express-validator');
const { error } = require('console');
var admindb      = require.main.require('./models/admin');
var router = express.Router();

router.get('/', function(req, res){
    if(req.cookies['type'] == 'admin'){
        admindb.getAllEmp(function(result){
            console.log(result);
            res.render('admin/index',{emp:result});
        });
    }
    else{
        res.redirect('/employee');
    }
});

module.exports = router;