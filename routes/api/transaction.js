const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Transaction = require('../../models/Transaction');
const User = require('../../models/User');
const { route } = require('./users');


//GET api/transactions
//Get all transactions
//Private
router.get('/', auth, async(req, res) => {
    try {
        //finds all expense records using the user field in each expense
        const transactionList = await Transaction.find({user: req.user.id});

        if(!transactionList){
            return res.status(400).json({msg: 'No transactions to show.'})
        }

        res.json(transactionList);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('server error')
    }

});


//POST api/transactions
//Adding transactions?
//Private
router.post('/', auth, async(req, res)=> {

    const user = req.user.id;

    //to be deleted
    const dueDate = new Date();

    const { 
        title, 
        currentAmount, 
        moneyIn,
        contribution, 
        moneyOut  
    } = req.body;

    console.log(title, 
        currentAmount, 
        moneyIn, 
        contribution, 
        moneyOut, 
        user, 
        dueDate)

    try {

      const expense = new Expense({
          user,
          title,
          currentAmount,
          dueDate,
          moneyIn,
          contribution,
          moneyOut
      });


      await expense.save();

      console.log(expense)

    } catch(error) {

        res.status(500).json({msg: "Something went wrong"});

    }
});



module.exports = router;