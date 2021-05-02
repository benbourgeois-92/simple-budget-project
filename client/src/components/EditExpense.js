import{React, useContext} from 'react';
import { Link, useHistory } from 'react-router-dom'

import '../css/edit-expense.css';

import { BrowserRouter as Router, useParams } from "react-router-dom";
import FundingStatus from './FundingStatus';
import GlobalContext from '../user-context';
import {currencyFormat, addDateSuffix, month} from '../operations/conversions';
import {DetailButton} from './Widgets';

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

    const {
        title, 
        amount, 
        amountSaved, 
        dueDate, 
        dueDateLabel, 
        moneyOut, 
        moneyIn, 
        note, 
        contribution, 
        recentTransactions
    } = expense;

    const convertedAmount = currencyFormat(amount);
    const convertedAmountSaved = currencyFormat(amountSaved);
    const spanStyles = {color: '#ef3f3a'}


    const orders = [
        {screen: "UPDATE_EXPENSE", item: {properties: {amount: 0}, function: "AMOUNT"}},
        {screen: "UPDATE_EXPENSE", item: {properties: {date: null, dateLabel: null}, function: "DATE"}},
        {screen: "UPDATE_EXPENSE_MONEYIN", item: null},
        {screen: "UPDATE_EXPENSE_CONTRIBUTION", item: null},
        {screen: "UPDATE_EXPENSE_MONEYOUT", item: null},        
        {screen: "DELETE_EXPENSE", item: expense},
        {screen: "EDIT_TITLE_AND_NOTE", item: expense}      

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
                            <li><button onClick={() => changeModalScreen(orders[6])}  className="squareIcon edit openPopupMenu">Edit Expense Name</button></li>
                            <li><button onClick={() => changeModalScreen(orders[5])} className="squareIcon delete">Delete Expense</button></li>
                            <li><button className="squareIcon transfer">Transfer Funds to Another Expense</button></li>

                        </ul>
                        
                    </div>
                </div>
            </div>
            <div className="editExpenseDetails">
                <section> 
                    <DetailButton title="Amount" subtitle={convertedAmount} icon="icon bank" order={orders[0]} changeModalScreen={changeModalScreen} />
                    <DetailButton title="Due Date" subtitle={dueDateLabel} icon="icon calendar" order={orders[1]} changeModalScreen={changeModalScreen} />
                    <DetailButton title="Money In" subtitle={moneyIn} icon="icon bank" order={orders[0]} changeModalScreen={changeModalScreen} />
                    <DetailButton title="Contribution Option" subtitle={contribution} icon="icon bank" order={orders[0]} changeModalScreen={changeModalScreen} />
                    <DetailButton title="Money Out" subtitle={moneyOut} icon="icon bank" order={orders[0]} changeModalScreen={changeModalScreen} />


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