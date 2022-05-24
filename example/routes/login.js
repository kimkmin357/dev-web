const express = require('express');
const app = express()
const path = require('path')
const User = require(path.join(__dirname , '../db/users'))

// ejs를 사용하기 위한 설정, views폴더 하위의 .ejs 파일을 사용하도록 설정
app.set('view engine', 'ejs')
app.set("views", path.join(__dirname, "../views"));

// @route  GET /login
// @desc   Login page
// @access Public
app.get('/', (req, res) => { // /login
    res.sendFile(path.join(__dirname , '../public/login_form.html'))
})
 
// @route  POST /login
// @desc   Login user
// @access Public
app.post('/', (req, res) => {// /login
    console.log("This is '/login' post API")

    // Check validation about input vaue => select DB
    User.findOne({userid: req.body.id})
        .then((result) => {
            if(result == null){
                // ID가 존재하지 않음
                return res.render('result_login.ejs', {'response' : 'ID does not exist.', 'result' : false});
            }
            else if(result.userid == req.body.id){
                result.comparePassword(req.body.pw)
                    .then((isMatch) => {
                        if (!isMatch) {
                            // 비밀번호가 맞지 않음
                            return  res.render('result_login.ejs', {'response' : 'The password is wrong.', 'result' : false});
                        }

                        result.generateToken()
                            .then((user) => {
                                return res.cookie("x_auth", user.token)
                                        .status(200)
                                        .render('result_login.ejs', {'response' : 'Welcome ' + req.body.id +' !!', 'result' : true});
                            })
                            .catch((err) => res.status(400).render('result_login.ejs', {'response' : 'Unknown Err', 'result' : false}));
                    })
                    .catch((err) => res.render('result_login.ejs', {'response' : 'Unknown Err', 'result' : false}));
            }
        })
        .catch((err) => res.render('result_login.ejs', {'response' : 'Unknown Err', 'result' : false}));

    // try {
    //     // Check validation about input vaue => select DB
    //     let resultId = await User.findOne({userid: req.body.id}).exec();
        
    //     if(resultId.userid == req.body.id)
    //     {
    //         let resultPw = await User.findOne({userpw: req.body.pw}).exec();
    //         if(resultPw.userpw == req.body.pw)
    //         {
    //             res.render('result_login.ejs', {'response' : 'Welcome ' + req.body.id +' !!', 'result' : true})
    //         }
    //         else
    //         {
    //             // 비밀번호가 맞지 않음
    //             res.render('result_login.ejs', {'response' : 'The password is wrong.', 'result' : false})
    //         }
            
    //     }
    //     else
    //     {
    //         // ID가 존재하지 않음
    //         res.render('result_login.ejs', {'response' : 'ID does not exist.', 'result' : false})
    //     }
    // } catch(err) {
    //     res.status(500).send("Server Error");
    // }
})

module.exports = app;