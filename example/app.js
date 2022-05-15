const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()  //.env 파일에 정의된 환경변수값 사용(MacOS, Windows, Linux 등 다양한 OS에 따른 환경변수 설정이 다른것에 대해 유연하게 대처하기 위해)
const router = require('./routes/index')
const db = require('./db/db');

//console.log("### process.env ### " + process.env.PORT + " " + process.env.MONGO_URL + " " + process.env.NODE_ENV)
const PORT  = process.env.PORT;

// public 폴더를 static으로 설정하여 Client가 Server의 데이터를(html, img 등) 다이렉트로 접근 할 수 있도록 설정
// ex) localhost:3001/home.html   => 라우팅 없이도 접근가능
// 이미지 파일을 추가할때마다 일일이 router 설정을 해줘야 하는 번거로움 없앰
let staticPath = path.join(__dirname,'./public');
app.use(express.static(staticPath))

// routing 설정, ./routes/index.js 파일 연결
app.use(router)

// db/db.js 파일의 connect 함수 실행
db.connect(function(result){
    if(result == 'ok') // DB 연결시에만 nodejs server를 실행
    {
        app.listen(PORT, () => console.log('Example app listening on port' + PORT))
    }
    else
    {
        process.exit()
    }
})
