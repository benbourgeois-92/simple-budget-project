const mongoose = require('mongoose');

const TransactionSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    title: {
        type: String,
        required: true
    },
    amount: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    note: {
        type: String,
        required: false
    },
    spentFrom: {
        expense: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'expense'
        }
    },
    photo: {
        type: String,
        required: false
    },
    address: {
        type: String,
        required: false
    }

});

module.exports = Transaction = mongoose.model('transaction', TransactionSchema);