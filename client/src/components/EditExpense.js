import{React, useContext} from 'react';
import '../css/edit-expense.css';
import { BrowserRouter as Router, Switch, Route, Link, useParams } from "react-router-dom";
import GlobalContext from '../user-context';
import {currencyFormat, addDateSuffix, month} from '../operations/conversions';

const EditExpense = (props) => {


    const { id } = useParams();
    const {account} = useContext(GlobalContext);

    const expense = account.expenses.find(expense => expense.id == id);
    const {title, amount, amountSaved, dueDate, dueDateLabel, moneyOut, moneyIn } = expense;

    window.scrollTo(0,0);




    return (
        <div className="editExpenseComponent">
            <div className="activitySummary">
                <h2>{title}</h2>
                <p><span>$943.60</span> of $250.00</p>
                <p>March 5th &bull; the 5th of every month</p>
                <p><span>$2500.00/Paycheck</span> &bull; <span style={{color: "#ef3f3a;"}}>No automatic spending</span></p>
                <div>
                    <div>
                        <ul>
                            <li><button className="squareIcon edit openPopupMenu">Edit Expense Name</button></li>
                            <li><button className="squareIcon delete">Delete Expense</button></li>
                            <li><button className="squareIcon transfer">Transfer Funds to Another Expense</button></li>

                        </ul>
                        
                    </div>
                </div>
            </div>
            <div className="editExpenseDetails">
                <section>
                    <button  type="button" className="detailsStacked">
                        <div className="icon bank">

                        </div>
                        <div>
                            <p>Amount</p> 
                            <p>$16.00</p>
                        </div>
                    </button>
                    <button  type="button" className="detailsStacked">
                        <div className="icon calendar">

                        </div>
                        <div>
                            <p>Due Date</p> 
                            <p>the 5th of every month</p>
                        </div>
                    </button>
                    <button  type="button" className="detailsStacked">
                        <div className="icon arrowRight">

                        </div>
                        <div>
                            <p>Money In</p> 
                            <p>Payday</p>
                        </div>
                    </button>

                    
                    <button  type="button" className="detailsStacked">
                        <div className="icon target">

                        </div>
                        <div>
                            <p>Contribution Option</p> 
                            <p>Set aside target amount</p>
                        </div>
                    </button>

                    <button  type="button" className="detailsStacked">
                        <div className="icon arrowLeft">

                        </div>
                        <div>
                            <p>Money Out</p> 
                            <p>No automatic spending</p>
                        </div>
                    </button>							
                </section>
                <section className="recentTransactions">
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
                </section>
            </div>
        </div>
    );

}

export default EditExpense;