const express = require('express');
const app = express()
const path = require('path')
const User = require(path.join(__dirname , '../db/users'))
//const bodyParser = require('body-parser')
//const bcrypt = require("bcryptjs");        // 암호화 모듈
 
// Client로부터의 데이터를 body로 접근하기 위한 설정
//app.use(bodyParser.json())
//app.use(bodyParser.urlencoded({extended:true}))

// ejs를 사용하기 위한 설정, views폴더 하위의 .ejs 파일을 사용하도록 설정
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "../views"));


// @route  GET /join
// @desc   Registration page
// @access Public
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname , '../public/join_form.html'))
})

// @route  POST /join
// @desc   Register user
// @access Public
app.post('/', (req, res) => {
    console.log("This is '/join' post API");

    if(req.body.id == undefined){
        res.send('POST API ERR!');
    }
    else{
        // try {
        //     let user = new User({
        //         name: req.body.name,
        //         userid: req.body.id,
        //         userpw: req.body.pw
        //     })

        //     // password를 암호화 하기
        //     //const salt = await bcrypt.genSalt(10);
        //     //user.userpw = await bcrypt.hash(req.body.pw, salt);

        //     let result = await user.save(); // db에 user 저장

        //     if(result){
        //         console.log('DB Saved Successfully!');
        //         res.render('success_join.ejs', {'name' : req.body.name});
        //     }
        // } catch(err) {
        //     console.log('DB Saved Error!');
        //     res.send(err);
        // }
        
        let user = new User({
            name: req.body.name,
            userid: req.body.id,
            userpw: req.body.pw
        })

        // post로 넘어온 데이터를 받아서 DB에 저장하고 가입완료 화면을 띄워준다.
        user.save()
            .then(() => {
                return res.render('success_join.ejs', {'name' : req.body.name});
            })
            .catch((err) => {
                return res.status(200).send(err);
            })
    }
    
})

// @route  POST /join/ajax_id_duplicate_check
// @desc   Check duplicate user id
// @access Public
app.post('/ajax_id_duplicate_check', async (req, res) => {
    console.log("This is '/join/ajax_id_duplicate_check' post API")

    try {
        const result = await User.findOne({userid: req.body.id}).exec();

        let responseData;
        if(result){
            responseData = {'result' : 'ng', 'id' : req.body.id, 'pw' : req.body.pw};
        }
        else{
            responseData = {'result' : 'ok', 'id' : req.body.id, 'pw' : req.body.pw};
        }
        res.json(responseData);
    } catch(err) {
        res.status(500).send("Server Error");
    }
    
    
})

module.exports = app;