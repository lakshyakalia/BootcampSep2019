const jwt = require("jsonwebtoken");
const {SECRET} = require('../config/config')

module.exports = isAuthenticated = (req, res, next) => {
    const token = req.headers.token;
    jwt.verify(token, new Buffer(SECRET, 'base64'), (err) => {
        if (err) {
           
            res.send({ "message": "session expired" })

        } else 
        {       req.headers.role= token.claim;
                   next() //TODO: hit the next user profile route
        }

    });
} 
