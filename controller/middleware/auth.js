const jwt = require("jsonwebtoken")
const secret_key = "kanmani"

const auth = (req,res,next)=>{
    const bearerToken = req.headers["authorization"]
    console.log(bearerToken)
    if(bearerToken){
        const token = bearerToken.split(" ")[1]
        const validate = jwt.verify(token,secret_key)
        if(validate){
            next()
        }
        return res.send ({msg: "user not authorized"})
    }
    return res.send ({msg: "user not allowed"})
}
module.exports = auth