import{React, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom'

import '../css/edit-expense.css';
import '../css/detail-buttons.css';

import { BrowserRouter as Router, useParams } from "react-router-dom";
import FundingStatus from './FundingStatus';
import GlobalContext from '../user-context';
import {currencyFormat, addDateSuffix, month} from '../operations/conversions';

const EditExpense = (props) => {

    const history = useHistory();
    const { id } = useParams();
    const {account, changeModalScreen} = useContext(GlobalContext);

    const expense = account.expenses.find(expense => expense.id == id);

    window.scrollTo(0,0);

    if(!expense){
        history.push(`/home/expenses`);
        return null;
    }

    const {title, amount, amountSaved, dueDate, dueDateLabel, moneyOut, moneyIn, note, contribution, recentTransactions} = expense;

    const convertedAmount = currencyFormat(amount);
    const convertedAmountSaved = currencyFormat(amountSaved);
    const spanStyles = {color: '#ef3f3a'}


    const orders = [
        {screen: "UPDATE_EXPENSE_AMOUNT", item: null},
        {screen: "UPDATE_EXPENSE_DUEDATE", item: null},
        {screen: "UPDATE_EXPENSE_MONEYIN", item: null},
        {screen: "UPDATE_EXPENSE_CONTRIBUTION", item: null},
        {screen: "UPDATE_EXPENSE_MONEYOUT", item: null},        
        {screen: "DELETE_EXPENSE", item: expense}
    ]

    return (
        <div className="editExpenseComponent">
            <div className="activitySummary">
                <h2>{title}</h2>
                {note ? <p><span>{note}</span></p>:null}
                <p><span>{convertedAmountSaved}</span> of {convertedAmount}</p>

                <p>{month[dueDate.getMonth()] + ' ' + addDateSuffix(dueDate)} &bull; {dueDateLabel}</p>

                <FundingStatus moneyIn={moneyIn} moneyOut={moneyOut} spanStyles={spanStyles} amount={amount}/>

                <div>
                    <div>
                        <ul>

                            <li><Link to="home/expenses" className="squareIcon return openPopupMenu">Back to Expenses</Link></li>
                            <li><button  className="squareIcon edit openPopupMenu">Edit Expense Name</button></li>
                            <li><button onClick={() => changeModalScreen(orders[5])} className="squareIcon delete">Delete Expense</button></li>
                            <li><button className="squareIcon transfer">Transfer Funds to Another Expense</button></li>

                        </ul>
                        
                    </div>
                </div>
            </div>
            <div className="editExpenseDetails">
                <section>
                    <button onClick={() => changeModalScreen(orders[0])} type="button" className="detailsStacked">
                        <div className="icon bank">

                        </div>
                        <div>
                            <p>Amount</p> 
                            <p>{convertedAmount}</p>
                        </div>
                    </button>
                    <button  onClick={() => changeModalScreen(orders[1])} type="button" className="detailsStacked">
                        <div className="icon calendar">

                        </div>
                        <div>
                            <p>Due Date</p> 
                            <p>{dueDateLabel}</p>
                        </div>
                    </button>

                    {/* <button  disabled onClick={(e) => e.target.disabled ? null : changeModalScreen(orders[2])} type="button" className="detailsStacked disabled">
                        <div className="icon arrowRight">

                        </div>
                        <div>
                            <p>Money In</p> 
                            <p>{moneyIn}</p>
                        </div>
                    </button> */}
                    <button  onClick={(e) => e.target.disabled ? null : changeModalScreen(orders[2])} type="button" className="detailsStacked">
                        <div className="icon arrowRight">

                        </div>
                        <div>
                            <p>Money In</p> 
                            <p>{moneyIn}</p>
                        </div>
                    </button>
                    
                    <button  onClick={() => changeModalScreen(orders[3])} type="button" className="detailsStacked">
                        <div className="icon target">

                        </div>
                        <div>
                            <p>Contribution Option</p> 
                            <p>{contribution}</p>
                        </div>
                    </button>

                    <button  onClick={() => changeModalScreen(orders[4])} type="button" className="detailsStacked">
                        <div className="icon arrowLeft">

                        </div>
                        <div>
                            <p>Money Out</p> 
                            <p>{moneyOut}</p>
                        </div>
                    </button>							
                </section>

            </div>

            {recentTransactions.length > 0 ?

                (<section className="recentTransactions">
                    <h2>Recent Transactions</h2>
                    <ul>

                        {expense.recentTransactions.map((transaction)  =>
                            
                                <li>
                                    <div>
                                        <p>{transaction.title}</p>
                                        <p>{month[dueDate.getMonth()] + ' ' + addDateSuffix(dueDate)}</p>											
                                    </div>
                                    <div>
                                        <p>{currencyFormat(transaction.amount)}</p>
                                    </div>
                                </li>                            
                            
                            
                            ) }
                    </ul>
                </section> ) : null } 

        </div>
    );

}

export default EditExpense;