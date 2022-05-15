// routing 만 관리하는 js 파일
const express = require('express');
const router = express.Router()
const path = require('path')

const home = require('./home');
const login = require('./login');
const join = require('./join');

//url routing root
router.get('/', function(req,res) {
    res.sendFile(path.join(__dirname, '../public/home.html'))
})

router.use('/home', home)
router.use('/login', login)
router.use('/join', join)

module.exports = router