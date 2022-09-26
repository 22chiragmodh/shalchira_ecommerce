require('dotenv').config();
const mongoose = require('mongoose');
// console.log(process.env)
// console.log(process.env.DB_URL)

const connectToDB = async () => {
    mongoose.connect(process.env.DB_URL, (err) => {
        if (err) {
            console.log("Error caused in connection to database", err);
            throw err;
        } else {
            console.log("Connected to database");
        }
    });
}


module.exports = { connectToDB };