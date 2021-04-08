const mongoose = require('mongoose');

const ExpenseSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
    },
    title: {
        type: String,
        required: true
    },
    currentAmount: {
        type: String,
        default: '0.00'
    },
    dueDate: {
        type: Date,
        required: false
    },
    moneyIn: {
        type: String,
        required: false
    },
    contribution: {
        type: String,
        required: false
    },
    moneyOut: {
        type: String,
        required: false
    },
    recentTransactions: [
        {
        transaction: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'transaction'
        }
    }
    ]
});

module.exports = Expense = mongoose.model('expense', ExpenseSchema);