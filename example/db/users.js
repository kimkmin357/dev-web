const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");        // 암호화 모듈
const saltRounds = 10;
const jwt = require("jsonwebtoken");

// mongodb에는 schema라는 개념이 없지만
// mongoose모듈을 통해 사용자 schema를 생성하여 
// 데이터를 DB에 넣기 전에 먼저 검사할 수 있다.
// 스키마에 어긋나는 데이터가 있으면 에러를 발생시킨다.
const userSchema = new mongoose.Schema({
    name: String,
    userid: { type: String, required: true, unique: true },
    userpw: { type: String, required: true },
    token: String
})

//save 메소드가 실행되기전에 비밀번호를 암호화도록 함
userSchema.pre("save", function (next) {

    //화살표함수 선언시 this는 user.js의 this이므로 데이터가 없다.
    let user = this;
  
    //model 안의 paswsword가 변환될때만 암호화
    if (user.isModified("userpw")) {
      bcrypt.genSalt(saltRounds)
            .then((salt) => {

              bcrypt.hash(user.userpw, salt)
                    .then((hash) => {
                      user.userpw = hash;
                      next();
                    })
                    .catch((err) => next(err));

            })
            .catch((err) => next(err));
    } else {
      next();
    }


    // try {
    //     if (user.isModified("userpw")) {
    //         const salt = await bcrypt.genSalt(saltRounds);
    //         user.userpw = await bcrypt.hash(user.userpw, salt);
    //         next();
    //     }
    //   } catch(err) {
    //     next(err);
    //   }
});
  
userSchema.methods.comparePassword = function (plainPassword) {

    //plainPassword를 암호화해서 현재 비밀번호화 비교
    return bcrypt.compare(plainPassword, this.userpw)
                 .then((isMatch) => {
                   return isMatch;
                 })
                 .catch((err) => {
                   return err;
                 });
};

userSchema.methods.generateToken = function () {
  // MongoDB 고유키인 _id와 secretToken으로 jwt를 만들고 이를 DB에 저장하며 client로 보내주기위해 return 한다.
  const token = jwt.sign(this._id.toHexString(), "secretToken");
  this.token = token;
  return this.save()
             .then((user) => {
               return user;
             })
             .catch((err) => {
               return err;
             });
};

userSchema.statics.findByToken = function (token) {
  let user = this;
  // token과 secretToken 에 맞는 고유키 _id값을 받아오고 
  // _id 아이디를 Db에서 찾아 유저의 정보를 반환
  // return jwt.verify(token, "secretToken")
  //           .then((decoded) => {
  //             return user.findOne({ _id: decoded, token: token })
  //                       .then((user) =>{
  //                         return user;
  //                       })
  //                       .catch((err) => {
  //                         return err;
  //                       });
  //           })

  return jwt.verify(token, "secretToken", function (err, decoded) {
      return user.findOne({ _id: decoded, token: token })
                .then((user) => user)
                .catch((err) => err);
  });
};

const User = mongoose.model('User', userSchema);
module.exports = User;