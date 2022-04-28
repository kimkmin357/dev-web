const express = require('express');
const app = express();
const api = require('./routes/index');
const path = require("path");
var cors = require('cors');

app.use(cors());

// express api 호출 라우팅
app.use('/api', api);

// express server ip와 port를 활용하여 react에서 만든 page를 접근하기 위한 설정
app.use('/react/', express.static(path.join(__dirname, '/build')));
app.use('/react/*', express.static(path.join(__dirname, '/build')));

const port = 8085;
app.listen(port, ()=>{
    console.log(`express is running on ${port}`);
})
