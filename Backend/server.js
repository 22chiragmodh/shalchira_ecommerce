const express = require('express');
const cors = require('cors');
const { connectToDB } = require('./config/db')
const authRoute = require('./routes/auth')
const productRoute=require('./routes/product')
const app = express();

app.use(express.json());
app.use(cors());

connectToDB();

const port = process.env.PORT || 8000;


app.get('/', (req, res) => {
    res.status(200).json({
        message: 'Server running on port 8000'
    })
})

app.use('/api/auth', authRoute);
app.use('/api/product',productRoute);

app.listen(port, (err) => {
    if (err) throw err;
    console.log("Server listening on port 8000");
})

