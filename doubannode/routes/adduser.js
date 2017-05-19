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
//添加用户
router.post('/', function(req, res, next) {
    console.log("添加用户成功");
    var email = req.body.email;
    var pwd = req.body.password;
    var name = req.body.name;
    var time = new Date().toLocaleString();
    pool.getConnection(function(err, con) {
        con.query('insert into `userinfo`(`username`,`password`,`date`,`email`)values (?,?,?,?)', [name, pwd, time, email], function(err, result, f) {
            if (!err) {
                res.send({
                    status: "ok",
                    message: "添加用户成功"
                })
            } else {
                console.log(err);
            }
        })
        con.release();
    })
})
router.post('/getuser', function(req, res, next) {
        console.log("查找用户");
        var name = req.body.name;
        var pwd = req.body.pwd;
        // console.log(name);
        // console.log(pwd);
        pool.getConnection(function(err, con) {
            con.query('select * from `userinfo` where `email`=? and `password`=?', [name, pwd], function(err, result, f) {
                if (!err) {
                    res.send({ status: "ok", message: "查找成功", list: result })
                } else {
                    console.log(err);
                }
            })
        })
    })
    //检查是否重名
router.post('/checknameS', function(req, res, next) {
    console.log("查找用户成功");
    var name = req.body.name;
    pool.getConnection(function(err, con) {
        con.query('select * from `userinfo` where `username`=' + "'" + name + "'", function(err, result, f) {
            if (!err) {
                if (result.length == 0) {
                    res.send({ status: 'ok', message: '没有重名' });
                } else {
                    res.send({ status: 'no', message: '已经存在用户' });
                }

                // console.log(result);
            } else {
                console.log(err);
            }
        })
        con.release();
    })
})



module.exports = router;
