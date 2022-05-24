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


// promise 참고
// https://www.zerocho.com/category/MongoDB/post/59b6228e92f5830019d41ac4
// https://joshua1988.github.io/web-development/javascript/js-async-await/

// javascript 참고
// https://hanamon.kr/nodejs-%EA%B0%9C%EB%85%90-%EC%9D%B4%ED%95%B4%ED%95%98%EA%B8%B0/

// 로그인 참고
// https://gaga-kim.tistory.com/entry/Nodejs-React-MongoDB-%EB%A1%9C%EA%B7%B8%EC%9D%B8-%EC%9B%B9-%EC%95%A0%ED%94%8C%EB%A6%AC%EC%BC%80%EC%9D%B4%EC%85%98-%EA%B5%AC%ED%98%84
// https://loy124.tistory.com/246
// 토큰
// https://donggoolosori.github.io/2020/12/15/jwt/

// async & await 
// https://joshua1988.github.io/web-development/javascript/js-async-await/