const express = require('express')
const app = express()
const path = require("path");
//const cors = require('cors');
const api = require('./apis/api')


//app.use(cors());

// express server ip와 port를 활용하여 react에서 만든 page를 접근하기 위한 라우팅
app.use('/react/', express.static(path.join(__dirname, '/build')));
app.use('/react/*', express.static(path.join(__dirname, '/build')));

// client의 api 호출에 대한 라우팅. react의 package.json의 homepage 경로와 동일해야함
app.use('/api', api);

const PORT = 8082

// app.get('/', (req,res) => {
//     res.send('hello express');
// })

app.listen(PORT, (res) => {
    console.log('running server on', PORT);
})