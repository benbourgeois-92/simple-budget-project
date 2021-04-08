const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    photo: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    },
    subscription: {
        type: String,
        default: 'Free Trial',
    }

});

module.exports = User = mongoose.model('user', UserSchema);