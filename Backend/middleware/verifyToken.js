const jwt = require('jsonwebtoken');

exports.verifytoken=(req,res,next) => {
   const authheader =req.headers.token;

   if(authheader){
    const token = authheader.split(" ")[1];
    jwt.verify(token, process.env.jwt_secret_key, (err, user) => {
        if (err) res.sendStatus(403).json("Not valid token");
        req.user = user;
        next();
      });
   
   }
   else{
    return res.status(401).json("You are not authenticated!");
   }
   if (token == null) return res.sendStatus(401);

  
};

exports.verifyTokenandAuthorization = (req, res,next) => {
    verifyToken(req,res,()=>{
        if(req.user.id==req.params.id ||req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("You are not allowed to do this");
        }
    })
}


exports.verifyTokenandAdmin=(req,res,next) => {
    verifyToken(req,res,()=>{
        if(req.user.isAdmin){
            next();
        }
        else{
            res.status(403).json("You are not Admin");
        }
    })
}


// module.exports={verifytoken,verifyTokenandAuthorization,verifyTokenandAdmin};