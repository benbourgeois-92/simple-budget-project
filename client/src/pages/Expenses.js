import React, {useContext, useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import '../css/expenses-component.css'
import Expense from '../components/Expense';
import ExpensesSortableListview from '../components/ExpensesSortableListview';
import GlobalContext from '../user-context' ;
import currencyFormat from '../operations/conversions';

import Muuri from 'muuri';

const Expenses = () => {

    const [sorting, setSorting] = useState(false);
    const {account, screen, changeModalScreen} = useContext(GlobalContext)
    console.log(sorting)


    const orders = [
        {screen: "ADD_EXPENSE", item: null},
        {screen: "SORT_EXPENSE_LIST", item: null},
        {screen: "SORT_EXPENSE_LIST", item: null}
    ]

    return (
        
        <div className="expensesComponent">
            <div className="expensesSummary">
                <h2>Expenses</h2>
                <p>$2578.91</p>
                <p>Budgeted towards 22 expenses</p>
                <p><span>Balance-to-Budget </span>{currencyFormat(account.balance)}</p>
                <div>
                    <div>
                        <p><span>Outgoing:</span> $792.00 per paycheck</p>
                        <p><span>Payday:</span> March 5th</p>							
                    </div>
                    <div>
                        <ul>
                            <li><button onClick={() => changeModalScreen(orders[2])} className="squareIcon edit">Edit</button></li>
                            <li><button onClick={() => setSorting(!sorting)} className="squareIcon sort">Sort Expenses</button></li>
                            <li><button onClick={() => changeModalScreen(orders[0])} className="squareIcon add">Add an Expense</button></li>
                        </ul>
                        
                    </div>
                </div>
            </div>
            <div>

            <ExpensesSortableListview sorting={sorting}/>


    


                {/* <ul className="expensesListview">
        
                    {account.expenses.map((expense) => 
                        <Expense key={expense.id} sorting={sorting} info={expense} />
                    )} 


                </ul>                     */}

        </div>

    </div>	

    )

    
}

export default Expenses;