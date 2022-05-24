const path = require('path')
const User = require(path.join(__dirname , '../db/users'))

let authorization = (req, res, next) => {
    let token = req.cookies.x_auth;

    User.findByToken(token)
        .then((user) => {
            if (!user) return res.json({ isAuth: false, error: true });
            req.user = user;
            next();
        })
        .catch((err) => {
            throw err;
        });
};

exports.authorization = authorization;
module.exports = { authorization };