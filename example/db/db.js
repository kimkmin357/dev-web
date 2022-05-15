let MONGO_URL  = process.env.MONGO_URL
if(MONGO_URL == undefined)
{
    // mongodb://{아이디}:{비밀번호}@{mongodb 서버 도메인}:{mongodb 서버 포트}/?authMechanism=DEFAULT
    MONGO_URL = 'mongodb://sa:init123!!@kimkmin357.synology.me:27017/?authMechanism=DEFAULT';
}

// mongoose 모듈 가져오기
var mongoose = require('mongoose');

const connect = (callback) => {
    // 개발 환경이 아닐 때 mongoose가 생성하는 쿼리 내용을 콘솔에 출력
    if (process.env.NODE_ENV !== 'DEV') {
        console.log("This is not DEV")
        mongoose.set('debug', true);
    }
    mongoose.connect(MONGO_URL, 
        { dbName: "test" }, // 연결할 DB명(존재하지 않을 경우 해당 이름으로 생성)
        (error) => {
        if (error) {
            console.log('DB Connection Failed!', error);
            callback('ng');
        } else {
            console.log('DB Connection Succeed!');
            callback('ok');
        }
    });
}

// 다른 모듈에서 connect 함수를 사용할 수 있도록 설정
exports.connect = connect;
module.exports = { connect };
