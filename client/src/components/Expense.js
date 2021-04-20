import React, {useContext} from 'react';
import GlobalContext from '../user-context'
import '../css/expenses-component.css'
import '../css/jiggle-animation.css'
import Flickity from 'react-flickity-component'
import {currencyFormat, addDateSuffix} from '../operations/conversions';


const Expense = ( props) => {


    const {changeModalScreen} = useContext(GlobalContext);

    const expense = props.info;
    const sorting = props.sorting;
    const {title, amount, amountSaved, dueDate, dueDateLabel, moneyOut, moneyIn } = expense;

    const spanStyles = {color: '#ef3f3a'}
    let fundingStatus = '';
    if(moneyIn === 'On Payday'){
        fundingStatus = (<span>{currencyFormat(amount)}/Paycheck</span>);
    }else {
        fundingStatus = (<span style={spanStyles}>{moneyIn}</span>);
    }

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
        {screen: "UPDATE_EXPENSE", item: expense}
      ]
 


        return (

                <li className="individualExpense  listElement-carousel">
                    <div className={sorting ? "sorting isClicked" : "isClicked"}>
                        <Flickity options={flickityOptions}>

                            <button className="carousel-cell">
                                <div>
                                    <h3>{title}</h3>
                                    <p><span>{currencyFormat(amountSaved)}</span> of {currencyFormat(amount)}</p>
                                    <p>March 5th &bull; {dueDateLabel}</p>


                                    <p>{fundingStatus} &bull; <span style={spanStyles}>{moneyOut}</span></p>

                                </div>
                                <div>
                                    <div className="statusBar"><span style={statusBarStyles}></span></div>

                                </div>								
                            </button>
                            <button onClick={() => changeModalScreen(orders[1])} className="carousel-cell editButton">Edit</button>
                            <button onClick={() => changeModalScreen(orders[0])} className="carousel-cell deleteButton">Delete</button>
                            
                        </Flickity> 
                    </div>     
                </li>
            );



}

export default Expense;