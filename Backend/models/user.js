const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: {
        type: 'string',
        required: true,
        unique: true
    },

    email: {
        type: 'string',
        required: true,
        unique: true
    },
    password: {
        type: 'string',
        required: true,
    },
    isAdmin: {
        type: 'boolean',
        default: false
    }
})

const User = mongoose.model('User', UserSchema);
module.exports = {User};