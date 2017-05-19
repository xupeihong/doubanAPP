var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var pool = mysql.createPool({
        host: "127.0.0.1",
        port: 8889,
        user: "root",
        password: "root",
        database: "mydb",
        connectionLimit: 10
    })
    /* GET home page. */

//CROS跨域
router.use(function(req, res, next) {
    // Set permissive CORS header - this allows this server to be used only as
    // an API server in conjunction with something like webpack-dev-server.
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Disable caching so we'll always get the latest comments.
    res.setHeader('Cache-Control', 'no-cache');
    next();
});



router.get('/', function(req, res, next) {
    res.render('index', { title: '后台管理' });
});



module.exports = router;
