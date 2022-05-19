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

app.get('/', (req, res) => { // /join GET
    res.sendFile(path.join(__dirname , '../public/join_form.html'))
})

app.post('/', (req, res) => {// /join POST
    console.log("This is '/join' post API")

    if(req.body.id == undefined)
    {
        res.send('POST API ERR!')
    }
    else
    {
        let user = new User({
            name: req.body.name,
            userid: req.body.id,
            userpw: req.body.pw
        })

        user.save(function(err) {
            if (err) 
            {
                res.send(err)
                throw err;
            }
            
            console.log('DB Saved Successfully!');
            res.render('success_join.ejs', {'name' : req.body.name})
        });
    }
    
})

app.post('/ajax_id_duplicate_check', (req, res) => {
    console.log("This is '/join/ajax_id_duplicate_check' post API")

    // ID 중복 확인
    User.findOne({userid: req.body.id}).then((result) => {
        if(result.userid == req.body.id)
        {
            let responseData = {'result' : 'ng', 'id' : req.body.id, 'pw' : req.body.pw}
            res.json(responseData)
        }
    }).catch((err) => {
        let responseData = {'result' : 'ok', 'id' : req.body.id, 'pw' : req.body.pw}
        res.json(responseData)
    });
    
})

module.exports = app;