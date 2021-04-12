import React, {useContext} from 'react';
import GlobalContext from '../user-context'
import '../css/expenses-component.css'
import '../css/jiggle-animation.css'
import '../css/draggable.css'
import Flickity from 'react-flickity-component'
import currencyFormat from '../operations/conversions'


const Expense = ( props) => {

    const draggableStyles = {
        transition: props.isDragging ? 'none' : 'all 500ms',
        top: `${props.top}px`,
        position: 'absolute'
    }

    const {changeModalScreen} = useContext(GlobalContext);

    const expense = props.info;
    const sorting = props.sorting;
    const {title, amount, amountSaved, dueDate, moneyOut } = expense;

    const spanStyles = {
        color: '#ef3f3a',
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

                <li style={draggableStyles}  className="individualExpense  listElement-carousel">
                    <div className={sorting ? "sorting isClicked" : "isClicked"}>
                        <Flickity options={flickityOptions}>

                            <button className="carousel-cell">
                                <div>
                                    <h3>{title}</h3>
                                    <p><span>{currencyFormat(amountSaved)}</span> of {currencyFormat(amount)}</p>
                                    <p>March 5th &bull; {dueDate}</p>
                                    <p><span>{currencyFormat(amount)}/Paycheck</span> &bull; <span style={spanStyles}>{moneyOut}</span></p>

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