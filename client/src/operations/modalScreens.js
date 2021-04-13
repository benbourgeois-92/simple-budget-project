import React, {useContext, useState} from 'react';
import GlobalContext from '../user-context';
import currencyFormat from './conversions';
import Flickity from 'react-flickity-component';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../css/modal_screens.css';
import '../css/form-slide.css'

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
    const[dateState, setDateState] = useState(null)
    const [newExpense, setNewExpense] = useState({
        id: null,
        title: '',
        amount: 0,
        amountSaved: 0,
        dueDate: null,
        moneyIn: 'Payday/No Automatic Funding',
        contribution: 'Reach Target Balance/Set Aside Target Amount',
        moneyOut: 'No Automatic Spending',
        recentTransactions: [],
        checked: false
    })

    const {title, amount, dueDate, checked} = newExpense;
    
    const onChange = (e) => {
        setNewExpense({ ...newExpense, [e.target.name]: e.target.value });
    }


    const order = {type: 'ADD_EXPENSE', item: null}
    const flickityOptions ={ cellAlign: 'left',wrapAround: false,groupCells: 1,contain: true,prevNextButtons: true,pageDots: true}
    
    return (
            
            <div>
                <h2 className="centerText noselect">Add New Expense</h2>
                <p className="centerText noselect">Swipe screen, click arrows or tab to proceed.</p>

            <div className="formSlider">
                <Flickity options={flickityOptions}>
                    <div className="formSlide">
                        <label htmlFor="expenseName">Expense Title:</label>
                        <input type="text" id="expenseName" placeholder="enter your expense title here"/>							
                    </div>
                    <div className="formSlide">
                        <div className="horizontal">
                            <label htmlFor="amount">Amount:</label>
                            <input type="text" id="amount" placeholder="your monthly amount" required pattern="[0-9]"/>						
                        </div>
                        <p className="centerText instructions"><span>Tip:</span> Enter the amount you need monthly.</p>

                    </div>
                    <div className="formSlide">
                        <DayPicker onDayClick={(day) => setNewExpense({dueDate: day})} selectedDays={dueDate} />
                            {dueDate ? (<p className="centerText instructions">You selected {dueDate.toLocaleDateString()}</p>) 
                            : (<p className="centerText instructions">Enter the date you need {currencyFormat(amount)} by.</p>)}
                    </div>
                    <div className="formSlide">
                        <p className="centerText bold">How do you want money to be moved to this expense?</p>
                        <div className="selectOptions">
                            <ul>
                        
                                <li><button className="checkboxButton">On Payday<input  type="checkbox" checked={checked} value="On Payday"/></button></li>
                                <li><button className="checkboxButton">No Automatic Funding<input  type="checkbox"  checked={checked} value="On Payday"/></button></li>

                            </ul>
                        </div>
                    </div>
                </Flickity>                
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
