const mongoose = require('mongoose');

// mongodb에는 schema라는 개념이 없지만
// mongoose모듈을 통해 사용자 schema를 생성하여 
// 데이터를 DB에 넣기 전에 먼저 검사할 수 있다.
// 스키마에 어긋나는 데이터가 있으면 에러를 발생시킨다.
const userSchema = new mongoose.Schema({
    name: String,
    userid: { type: String, required: true, unique: true },
    userpw: { type: String, required: true }
})

const User = mongoose.model('User', userSchema);
module.exports = User;