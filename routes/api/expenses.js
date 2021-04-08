const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');

const Expense = require('../../models/Expense');
const User = require('../../models/User');
const { route } = require('./users');


//GET api/expenses
//Get all expenses
//Private
router.get('/', auth, async(req, res) => {
    try {
        //finds all expense records using the user field in each expense
        const expenseList = await Expense.find({user: req.user.id});

        if(!expenseList){
            return res.status(400).json({msg: 'No expenses.'})
        }

        res.json(expenseList);

    } catch(err) {
        console.error(err.message);
        res.status(500).send('server error')
    }


});


//POST api/expenses
//Add an expense
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

//DELETE api/expenses
//Remove an expense
//Private
router.delete('/:expense_id', auth, async(req, res) => {

    try {

        await Expense.findOneAndDelete(req.params.expense_id);

        res.json({msg: 'Deletion Successful!'});


    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server Error')
    }

});




module.exports = router;