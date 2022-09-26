const bcrypt = require('bcrypt');
// const crypto = require('crypto');
// var CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


const { User } = require('../models/user');

//Register User

exports.register = async (req, res) => {

   const newuser = new User;
   newuser.email = req.body.email;

   bcrypt.hash(req.body.password, 10, async (err, hash) => {
      if (err) {
         res.status(400).json({ err: "Internal server error" });
      }
      newuser.password = hash;
      newuser.username = req.body.username;

      const token = jwt.sign({
         email: newuser.email,

      },
         process.env.JWT_SECRET_KEY);


      try {
         const saveuser = await newuser.save();

         res.status(200).json({ saveuser, token });
      } catch (err) {
         res.status(500).json(err);
      }
      res.status(200).send(hash);

      // Store hash in your password DB.
   });



};


//Login user

exports.login = async (req, res) => {

   
   const user = await User.findOne({
      "email": req.body.email
   })
   if (!user) return res.status(401).send("Invalid user");
   console.log(user.password);
   bcrypt.compare(req.body.password, user.password, function (err, result) {
      if (err) {
         res.status(400).send(err);

      }
      else if (result === true) {
         const accesstoken = jwt.sign(
            {
               email: req.body.email,

            },
            process.env.JWT_SECRET_KEY,


         );
         try {
            res.status(200).json({
               msg: "user login successfully",
               token: accesstoken
            });
         } catch (e) {
            res.status(500).json({
               e: "user login error"
            })
         }
      }
   });

}