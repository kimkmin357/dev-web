// routing 만 관리하는 js 파일
const express = require('express');
const router = express.Router()
const path = require('path')
const User = require(path.join(__dirname , '../db/users'))

const home = require('./home');
const login = require('./login');
const join = require('./join');
const auth = require('./auth');

// @route  GET /
// @desc   Routing Root
// @access Public
router.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../public/home.html'))
})

// @route  GET /auth
// @desc   Auth
// @access Public
router.get("/auth", auth.authorization, (req, res) => {

    //auth 미들웨어를 정상적으로 수행했으므로
    //req.user에 사용자 정보가 있다.
    res.status(200).json({
        name: req.user.name,
        userid: req.user.userid,
        isAuth: true, 
    });
});

// @route  GET /logout
// @desc   Logout
// @access Public
router.get("/logout", auth.authorization, (req, res) => {

    // auth를 통해 인증과정을 거치고 리턴된 사용자 정보(req.user)를 활용하여
    // db에에서 userid에 해당하는 토큰값을 비워준다.
    User.findOneAndUpdate({ userid: req.user.userid }, { token: "" }, (err, user) => {
        if (err) return res.json({ success: false, err });
        res.clearCookie("x_auth");
    //   return res.status(200).send({
    //     success: true,
    //   });
        res.redirect('/');
    });
});

router.use('/home', home)
router.use('/login', login)
router.use('/join', join)

module.exports = router