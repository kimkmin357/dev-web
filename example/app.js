const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()  //.env 파일에 정의된 환경변수값 사용(MacOS, Windows, Linux 등 다양한 OS에 따른 환경변수 설정이 다른것에 대해 유연하게 대처하기 위해)
const router = require('./routes/index')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser');

// Client로부터의 데이터를 body로 접근하기 위한 설정
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(cookieParser()); // cookieParser(secretKey, optionObj)

// ejs를 사용하기 위한 설정, views폴더 하위의 .ejs 파일을 사용하도록 설정
// app.set('view engine', 'ejs')
// app.set("views", path.join(__dirname, "../views"));

let db

if (process.env.NODE_ENV == 'DEV') {
    db = require('./db/db_dev');
}
else{
    db = require('./db/db');
}

console.log("### process.env ### " + process.env.PORT + " " + process.env.MONGO_URI + " " + process.env.NODE_ENV)
let PORT  = process.env.PORT || 8082;

// public 폴더를 static으로 설정하여 Client가 Server의 데이터를(html, img 등) 다이렉트로 접근 할 수 있도록 설정
// ex) localhost:3001/home.html   => 라우팅 없이도 접근가능
// 이미지 파일을 추가할때마다 일일이 router 설정을 해줘야 하는 번거로움 없앰
let staticPath = path.join(__dirname,'./public');
app.use(express.static(staticPath))

// routing 설정, ./routes/index.js 파일 연결
app.use(router)

// db/db.js 파일의 connect 함수 실행 DB연결 안되면 프로그램 종료
db.connect()

app.listen(PORT, () => console.log('Example app listening on port' + PORT))

