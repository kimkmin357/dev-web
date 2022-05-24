// mongodb://{아이디}:{비밀번호}@{mongodb 서버 도메인}:{mongodb 서버 포트}/?authMechanism=DEFAULT
let MONGO_URI  = process.env.MONGO_URI
let NODE_ENV = process.env.NODE_ENV

// mongoose 모듈 가져오기
const mongoose = require('mongoose');

const connect = () => {
    // async & await 방식 코드
    // try {
    //     // 개발 환경이 아닐 때 mongoose가 생성하는 쿼리 내용을 콘솔에 출력
    //     if (NODE_ENV !== 'DEV') {
    //         console.log("This is not DEV")
    //         mongoose.set('debug', true);
    //     }

    //     await mongoose.connect(MONGO_URI, { 
    //         dbName: "test" // 연결할 DB명(존재하지 않을 경우 해당 이름으로 생성)
    //     });
    //     console.log("MongoDB Connected...");
    // } catch(error) {
    //     console.error(error.message);
    //     process.exit(1);
    // }


    // 개발 환경이 아닐 때 mongoose가 생성하는 쿼리 내용을 콘솔에 출력
    if (NODE_ENV !== 'DEV') {
        console.log("This is not DEV");
        mongoose.set('debug', true);
    }

    mongoose.connect(MONGO_URI, { dbName: "test" }) // 연결할 DB명(존재하지 않을 경우 해당 이름으로 생성)
            .then(console.log("MongoDB Connected..."))
            .catch((err) => {
                console.error(error.message);
                process.exit(1);
            })
}

// 다른 모듈에서 connect 함수를 사용할 수 있도록 설정
exports.connect = connect;
module.exports = { connect };