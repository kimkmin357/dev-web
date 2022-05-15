const express = require('express');
const app = express()
const path = require('path')
const User = require(path.join(__dirname , '../db/users'))
const bodyParser = require('body-parser')

// Client로부터의 데이터를 body로 접근하기 위한 설정
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
// ejs를 사용하기 위한 설정, views폴더 하위의 .ejs 파일을 사용하도록 설정
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "../views"));

app.get('/', (req, res) => { // /login
    res.sendFile(path.join(__dirname , '../public/login_form.html'))
})
 
app.post('/', (req, res) => {// /login
    console.log("This is '/login' post API")

    // Check validation about input vaue => select DB
    User.findOne({userid: req.body.id}).then((result) => {
        if(result == null)
        {
            // ID가 존재하지 않음
            res.render('result_login.ejs', {'response' : 'ID does not exist.', 'result' : false})
        }
        else if(result.userid == req.body.id)
        {
            if(result.userpw == req.body.pw)
            {
                res.render('result_login.ejs', {'response' : 'Welcome ' + req.body.id +' !!', 'result' : true})
            }
            else
            {
                // 비밀번호가 맞지 않음
                res.render('result_login.ejs', {'response' : 'The password is wrong.', 'result' : false})
            }
        }
    }).catch((err) => {
        res.render('result_login.ejs', {'response' : 'Unknown Err', 'result' : false})
    });
})

module.exports = app;