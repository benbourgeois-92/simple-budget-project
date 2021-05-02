import React, {useContext} from 'react';
import GlobalContext from '../user-context';
import { useHistory, useRouteMatch } from 'react-router-dom'
import '../css/expenses-component.css'
import '../css/jiggle-animation.css'
import Flickity from 'react-flickity-component'
import FundingStatus from './FundingStatus'
import {currencyFormat, addDateSuffix, month} from '../operations/conversions';


const Expense = ( props) => {


    const {changeModalScreen} = useContext(GlobalContext);
    const history = useHistory();
 

    const expense = props.info;
    const sorting = props.sorting;
    const {title, amount, amountSaved, dueDate, dueDateLabel, moneyOut, moneyIn } = expense;

    const spanStyles = {color: '#ef3f3a'}
    

    const width = (amountSaved/amount)*100
    const statusBarWidth = width.toString() + '%';
    const statusBarStyles = {
        backgroundColor: '#ff9b42',
        width: statusBarWidth
    }

    const flickityOptions ={
        cellAlign: 'left',
        contain: true,
        prevNextButtons: false,
        pageDots: false,
        draggable: !sorting
      }

      const orders = [
        {screen: "DELETE_EXPENSE", item: expense},
      ]
 

        return (

                <li className="individualExpense  listElement-carousel">
                    <div className={sorting ? "sorting isClicked" : "isClicked"}>
                        <Flickity options={flickityOptions}>

                            <button className="carousel-cell">
                                <div>
                                    <h3>{title}</h3>
                                    <p><span>{currencyFormat(amountSaved)}</span> of {currencyFormat(amount)}</p>
                                    <p>{month[dueDate.getMonth()] + ' ' + addDateSuffix(dueDate)} &bull; {dueDateLabel}</p>

                                    <FundingStatus moneyIn={moneyIn} moneyOut={moneyOut} spanStyles={spanStyles} amount={amount}/>
                                    {/* <p>{fundingStatus} &bull; <span style={spanStyles}>{moneyOut}</span></p> */}

                                </div>
                                <div>
                                    <div className="statusBar"><span style={statusBarStyles}></span></div>

                                </div>								
                            </button>
                            <button onClick={() => history.push(`/home/expenses/edit_expense/${expense.id}`)} className="carousel-cell editButton">Edit</button>
                            <button onClick={() => changeModalScreen(orders[0])} className="carousel-cell deleteButton">Delete</button>
                            
                        </Flickity> 
                    </div>     
                </li>
            );



}

export default Expense;