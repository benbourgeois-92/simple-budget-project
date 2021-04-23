import React, {useContext, useEffect, useState} from 'react';
import '../css/expenses-component.css'
import Expense from '../components/Expense';
import GlobalContext from '../user-context';
import {currencyFormat, addDateSuffix, month} from '../operations/conversions';

const Expenses = () => {

    const [sorting, setSorting] = useState(false);
    const {account, screen, changeModalScreen} = useContext(GlobalContext);

    const nbrOfExpenses = account.expenses.length;
    var amountSaved = 0.0;
    var totalBudgeted = 0.0;
    let payday;

    if(new Date().getDate() < account.payday.getDate()){
        payday = month[new Date().getMonth()] + ' ' + addDateSuffix(account.payday);
    }else {
        payday = month[new Date().getMonth() + 1] + ' ' + addDateSuffix(account.payday);
    }

    for(var i = 0; i < nbrOfExpenses; i++){
        amountSaved += account.expenses[i].amountSaved;
        totalBudgeted += parseFloat(account.expenses[i].amount);
    }
    
    const orders = [
        {screen: "ADD_EXPENSE", item: null},
        {screen: "SORT_EXPENSE_LIST", item: null},
        {screen: "UPDATE_PAYDAY", item: null}
    ]

    return (
        
        <div className="expensesComponent">
            <div className="expensesSummary">
                <h2>Expenses</h2>
                <br/>
                <br/>

                <p><span>Saved: </span>{currencyFormat(amountSaved)}</p>
                <p><span>Balance-to-Budget </span>{currencyFormat(account.balance)}</p>
                <p><span>Outgoing: </span>{currencyFormat(totalBudgeted)} per paycheck</p>
                <p><span>Payday: </span>{payday}</p>	                
                 
                    <div>
                        <ul>
                            <li><button onClick={() => changeModalScreen(orders[2])} className="squareIcon edit">Edit</button></li>
                            <li><button onClick={() => setSorting(!sorting)} className="squareIcon sort">Sort Expenses</button></li>
                            <li><button onClick={() => changeModalScreen(orders[0])} className="squareIcon add">Add an Expense</button></li>
                        </ul>
                        
                    </div>
            </div>

            <div>
                { account.expenses.length > 0 ? null : <p className="centerText bold noExpensesMessage">no expenses here! <br/><br/> use the '+' above to add an expense. </p>}




                 <ul className="expensesListview">
        
                    {account.expenses.map((expense) => 
                        <Expense key={expense.id} sorting={sorting} info={expense} />
                    )} 

                </ul>                     

        </div>

    </div>	

    )

    
}

export default Expenses;