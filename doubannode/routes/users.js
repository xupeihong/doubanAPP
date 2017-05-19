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
    /* GET users listing. */

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
    console.log("查找用户成功");
    var name = req.query.name;
    pool.getConnection(function(err, con) {
        con.query('select * from userinfo where `username`=' + name, function(err, result, f) {
            if (!err) {
                res.send({ status: "ok", message: "查询用户成功" })
                console.log(result);
            } else {
                console.log(err);
            }
        })
        con.release();
    })
})
module.exports = router;
