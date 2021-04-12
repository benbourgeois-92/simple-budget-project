import React, {useContext} from 'react';
import GlobalContext from '../user-context';
import currencyFormat from './conversions';
import '../css/modal_screens.css';

export const DeleteExpenseScreen = (props) => {
    
    const {togglePopup, screen, operation} = useContext(GlobalContext);

    const {id, title, amount, amountSaved } = screen.item;

    const order = {
        type: 'DELETE_ITEM',
        item: screen.item

    }

    let extraInfo = <><p>Your funds from <span className="strong">{title}</span> will be moved to safe-to-spend</p>
            <p className="strong">Funds: {currencyFormat(amountSaved)}</p></>
    if(amountSaved <= 0){
        extraInfo = null;
    }
    return (
        <div className="smallScreen noselect">
            <h2 className="noCallout noselect">Delete this expense?</h2>
            {extraInfo}
            <ul className="selectOptions">
                <li><button onClick={()=> operation(order)}>Confirm</button></li>
                <li><button onClick={()=> togglePopup(screen.popupOpen)} className="closeMenu">Cancel</button></li>                    
            </ul>
        
        </div>

    )
}

export const UpdateTransactionScreen = (props) => {
    
    const {togglePopup, operation, screen} = useContext(GlobalContext);

    const order = {
        type: 'UPDATE_TRANSACTION',
        item: screen.item
    }


    return (
        <div>
            <h2 className="noselect">Update Transaction</h2>

            <ul className="selectOptions">
                <li><button onClick={()=> operation(order)}>Confirm</button></li>
                <li><button onClick={()=> togglePopup(screen.popupOpen)} className="closeMenu">Cancel</button></li>                    
            </ul>
        
        </div>

    )
}

export const AddExpenseScreen = (props) => {

    const {togglePopup, operation, screen} = useContext(GlobalContext);

    const order = {type: 'ADD_EXPENSE',item: null}

    return (
            <div>
                <h2>Add New Expense</h2>
                <div>
                    <label htmlFor="expenseName">Expense Title:</label>
                    <input type="text" id="expenseName" placeholder="enter your expense title here"/>							
                </div>
                <div>
                    <label htmlFor="expenseName">Expense Name:</label>
                    <input type="text" id="expenseName" placeholder="Enter Expense Name"/>							
                </div>

                <ul>
                    <li><button onClick={()=> operation(order)}>Confirm</button></li>
                    <li><button onClick={()=> togglePopup(screen.popupOpen)} className="closeMenu">Cancel</button></li>                    
                </ul>              
            </div>
    )

}

export const EditExpenseScreen = (props) => {

    const {togglePopup, operation, screen} = useContext(GlobalContext);

    const order = {type: 'UPDATE_EXPENSE',item: null}

    return (
            <div>
                <h2>Edit Expense</h2>
                <div>
                    <label htmlFor="expenseName">Expense Title:</label>
                    <input type="text" id="expenseName" placeholder="enter your expense title here"/>							
                </div>
                <div>
                    <label htmlFor="expenseName">Expense Name:</label>
                    <input type="text" id="expenseName" placeholder="Enter Expense Name"/>							
                </div>

                <ul>
                    <li><button onClick={()=> operation(order)}>Confirm</button></li>
                    <li><button onClick={()=> togglePopup(screen.popupOpen)} className="closeMenu">Cancel</button></li>                    
                </ul>              
            </div>
    )

}

export const DefaultScreen = (props) => {

    const {togglePopup, screen} = useContext(GlobalContext);

    return (
            <div>
                <div>
                    <label htmlFor="expenseName">Expense Name:</label>
                    <input type="text" id="expenseName" placeholder="Enter Expense Name"/>							
                </div>
                <div>
                    <label htmlFor="expenseName">Expense Name:</label>
                    <input type="text" id="expenseName" placeholder="Enter Expense Name"/>							
                </div>

            <ul className="selectOptions">
                <li><button>Confirm</button></li>
                <li><button onClick={()=> togglePopup(screen.popupOpen)} className="closeMenu">Cancel</button></li>                    
            </ul>             
            </div>
    )

}



export default DefaultScreen;
