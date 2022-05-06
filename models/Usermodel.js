const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    email: {
        type: String,
        required: true
    },

    Fullname: {
        type: String,
        required: true
    },
    Topic: {
        type: String,
        required: true
    }
}, { timestamps: true });

const User = mongoose.model('User', UserSchema);
module.exports = User;