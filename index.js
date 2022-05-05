const express = require('express');
const app = express();
const api = require('./server/routes/index');
const path = require("path");
const cors = require('cors');

app.use(cors());

// express server ip와 port를 활용하여 react에서 만든 page를 접근하기 위한 설정
app.use('/react/', express.static(path.join(__dirname, '/build')));
app.use('/react/*', express.static(path.join(__dirname, '/build')));

// client의 api 호출에 대한 라우팅
app.use('/api', api);

const port = 8082;
app.listen(port, ()=>{
    console.log(`express server is running on ${port}`);
})
