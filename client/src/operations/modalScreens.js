import React, {useContext, useState} from 'react';
import GlobalContext from '../user-context';
import {currencyFormat, addDateSuffix, getDisabledDays} from './conversions';
import Flickity from 'react-flickity-component';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../css/modal_screens.css';
import '../css/form-slide.css';

export const DeleteExpenseScreen = (props) => {
    
    const {togglePopup, screen, operation} = useContext(GlobalContext);

    const {id, title, amount, amountSaved } = screen.item;

    const order = {
        type: 'DELETE_ITEM',
        item: screen.item

    }

    let extraInfo = <><p>Your funds from <span className="strong">{title}</span> will be moved to Balance-To-Budget</p>
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
export const UpdatePaydayScreen = (props) => {
    
    const {togglePopup, screen, operation} = useContext(GlobalContext);

    const [newPayday, setPayday] = useState({
        dueDate: new Date,
        dueDateLabel: 'no due date here'

})
    const order = {
        type: 'UPDATE_PAYDAY',
        item: newPayday.dueDate
    }

    const handleDayClick = (day, modifiers) => {
        if (modifiers.disabled) {
          return;
        }else{
         setPayday({dueDateLabel: `the ${addDateSuffix(day)} of the month`})           
         setPayday({dueDate: modifiers.selected ? newPayday.dueDate : day})
        }

    }

      
    const {dueDate} = newPayday;

    const year = new Date().getFullYear().toString();
    const endDate = new Date(year + "/12/31");
    const startDate = new Date(year + "/01/01");    
    const disabledDays = getDisabledDays(startDate, endDate);



    return (
        <div className="smallScreen noselect">
            <h2 className="noCallout noselect">When are you paid?</h2>
            <p>We'll check in a range around the day you select if we don't detect your payment on that day.</p>

            <div className="formSlide">
                <DayPicker changeMonth={false} onDayClick={handleDayClick} selectedDays={dueDate} fromMonth={new Date()} toMonth={new Date()} disabledDays={disabledDays}/>
                            {dueDate ? (<p className="centerText instructions">You selected the {addDateSuffix(dueDate)} of every month.</p>) 
                            : null }
            </div>

            <ul className="selectOptions">
                <li><button onClick={()=> operation(order)}>Confirm</button></li>
                <li><button onClick={()=> togglePopup(screen.popupOpen)} className="closeMenu">Cancel</button></li>                    
            </ul>
        
        </div>

    )
}
export const AddExpenseScreen = (props) => {

    const expenseId = Math.random().toString().substr(2, 5);
    const {togglePopup, operation, screen} = useContext(GlobalContext);
    const [newExpense, setNewExpense] = useState({
            id: expenseId,
            title: '',
            amount: 0,
            amountSaved: 0,
            dueDate: new Date,
            dueDateLabel: 'no due date yet',
            moneyIn: 'No Automatic Funding',
            contribution: 'Reach Target Balance',
            moneyOut: 'No Automatic Spending',
            recentTransactions: []
    })

    const [addScreen, setAddScreen] = useState({screensComplete: [], disabled: true})


    
    const onChange = (e) => {

        if(e.target.name === 'amount'){
            setNewExpense({ ...newExpense, [e.target.name]: parseFloat(e.target.value), id: Math.random().toString().substr(2, 5)});

        }else {
            setNewExpense({ ...newExpense, [e.target.name]: e.target.value, id: Math.random().toString().substr(2, 5)});
        }
   
    }

    const handleDayClick = (day, modifiers) => {
        if (modifiers.disabled) {

          return;

        }else{
        setNewExpense({...newExpense, dueDateLabel: `the ${addDateSuffix(day)} of the month`})           
         setNewExpense({...newExpense, dueDate: modifiers.selected ? newExpense.dueDate : day})
        }

    }

      
    const {title, amount, dueDate, moneyIn, contribution} = newExpense;
    const {screensComplete, disabled} = addScreen;

    const year = new Date().getFullYear().toString();
    const endDate = new Date(year + "/12/31");
    const startDate = new Date(year + "/01/01");    
    const disabledDays = getDisabledDays(startDate, endDate);


    const order = {type: 'ADD_EXPENSE', item: newExpense}
    const flickityOptions ={ cellAlign: 'left', wrapAround: false, groupCells: 1,contain: true, prevNextButtons: true,pageDots: true}
    
    return (
            
            <div>
                <h2 className="centerText noselect">Add New Expense</h2>
                <p className="centerText noselect">Swipe screen or click arrows below to proceed.</p>

            <div className="formSlider">
                <Flickity options={flickityOptions}>
                    <div className="formSlide">
                        <br/><br/>

                        <label htmlFor="expenseName">Expense Title:</label>
                        <input onChange={e => onChange(e)} name="title" type="text" id="expenseName" placeholder="enter your expense title here"/>							
                    </div>
                    <div className="formSlide">
                        <br/><br/>
 
                        <div className="horizontal">

                            <label htmlFor="amount">Amount:</label>
                            <input onChange={e => onChange(e)} name="amount" type="text" id="amount" placeholder="your monthly amount" required pattern="[0-9]"/>						
                        </div>
                        <p className="centerText instructions"><span>Tip:</span> Enter the amount you need monthly.</p>

                    </div>
                    <div className="formSlide">
                        <DayPicker onDayClick={handleDayClick} selectedDays={dueDate} fromMonth={startDate} toMonth={endDate} disabledDays={disabledDays}/>
                            {dueDate ? (<p className="centerText instructions">You selected {dueDate.toLocaleString()}</p>) 
                            : (<p className="centerText instructions">Enter the date you need {currencyFormat(amount)} by.</p>)}
                    </div>
                    <div className="formSlide">
                    <br/><br/>

                        <p className="centerText bold">How do you want money to be moved to this expense?</p>
                        <div className="selectOption">
                            <ul onChange={e => onChange(e)}>
                                <li><label className="radioButton" htmlFor="No Automatic Funding" >No Automatic Funding<input type="radio" id="No Automatic Funding" name="moneyIn"  value="No Automatic Funding" defaultChecked/></label></li>
                                <li><label className="radioButton" htmlFor="On Payday" >On Payday<input type="radio" id="On Payday" name="moneyIn"  value="On Payday"/></label></li>

                            </ul>
                        </div>
                    </div>
                    <div className="formSlide">
                    <br/><br/>

                        <p className="centerText bold">Stop saving once you reach {currencyFormat(amount)} per month, or set aside the same amount per month regardless?</p>
                        <div className="selectOption">
                            <ul onChange={e => onChange(e)}>
                                <li><label className="radioButton" htmlFor="Reach Target Balance" >Reach Target Balance<input type="radio" id="Reach Target Balance" name="contribution"  value="Reach Target Balance" defaultChecked/></label></li>
                                <li><label className="radioButton" htmlFor="Set Aside Target Amount" >Set Aside Target Amount<input type="radio" id="Set Aside Target Amount" name="contribution"  value="Set Aside Target Amount"/></label></li>

                            </ul>
                        </div>
                    </div>
                    <div className="formSlide">
                        <div>
                            <br/>
                            <h3 className="centerText">{title}</h3>
                            <p className="centerText">You need <span className="bold">{currencyFormat(amount)}</span> by the <span className="bold">{addDateSuffix(dueDate)}</span> of each month.</p>
                            <ul className="slideList">
                                <li><p>{moneyIn === "No Automatic Funding" ? 
                                "You will add money from your Balance-to-Budget into this expense manually."
                                : "We will move the amount you need into this expense automatically on payday."}</p></li>
                                <li><p>{contribution === "Reach Target Balance" ? 
                                `Once you reach ${currencyFormat(amount)}, we will not move any more money into this expense.`
                                : `We will move ${currencyFormat(amount)} a month into this expense until you change your mind.`
                                }
                                </p>
                                </li>                             
                            </ul>
                            <br/>
                        </div> 
                       
                           
                        <p className="centerText bold">Press confirm if everything looks good:</p>

                    </div>
                </Flickity>                
            </div>
                <ul>
                    <li><button className={disabled ? "disabled":""} onClick={()=> operation(order)}>Confirm</button></li>
                    <li><button onClick={()=> togglePopup(screen.popupOpen)} className="closeMenu">Cancel</button></li>                    
                </ul>              
            </div>
    )

}
export const EditExpenseScreen = (props) => {

    const expenseId = Math.random().toString().substr(2, 5);
    const {togglePopup, operation, screen} = useContext(GlobalContext);
    const [newExpense, setNewExpense] = useState({
            id: expenseId,
            title: '',
            amount: 0,
            amountSaved: 0,
            dueDate: new Date,
            dueDateLabel: 'no due date yet',
            moneyIn: 'No Automatic Funding',
            contribution: 'Reach Target Balance',
            moneyOut: 'No Automatic Spending',
            recentTransactions: []
    })

    const [addScreen, setAddScreen] = useState({screensComplete: [], disabled: true})


    
    const onChange = (e) => {

        if(e.target.name === 'amount'){
            setNewExpense({ ...newExpense, [e.target.name]: parseFloat(e.target.value), id: Math.random().toString().substr(2, 5)});

        }else {
            setNewExpense({ ...newExpense, [e.target.name]: e.target.value, id: Math.random().toString().substr(2, 5)});
        }
   
    }

    const handleDayClick = (day, modifiers) => {
        if (modifiers.disabled) {

          return;

        }else{
        setNewExpense({...newExpense, dueDateLabel: `the ${addDateSuffix(day)} of the month`})           
         setNewExpense({...newExpense, dueDate: modifiers.selected ? newExpense.dueDate : day})
        }

    }

      
    const {title, amount, dueDate, moneyIn, contribution} = newExpense;
    const {screensComplete, disabled} = addScreen;

    const year = new Date().getFullYear().toString();
    const endDate = new Date(year + "/12/31");
    const startDate = new Date(year + "/01/01");    
    const disabledDays = getDisabledDays(startDate, endDate);


    const order = {type: 'ADD_EXPENSE', item: newExpense}
    const flickityOptions ={ cellAlign: 'left', wrapAround: false, groupCells: 1,contain: true, prevNextButtons: true,pageDots: true}
    
    return (
            
            <div>
                <h2 className="centerText noselect">Edit Expense</h2>
                <p className="centerText noselect">Swipe screen or click arrows below to proceed.</p>

            <div className="formSlider">
                <Flickity options={flickityOptions}>
                    <div className="formSlide">
                        <br/><br/>

                        <label htmlFor="expenseName">Expense Title:</label>
                        <input onChange={e => onChange(e)} name="title" type="text" id="expenseName" placeholder="enter your expense title here"/>							
                    </div>
                    <div className="formSlide">
                        <br/><br/>
 
                        <div className="horizontal">

                            <label htmlFor="amount">Amount:</label>
                            <input onChange={e => onChange(e)} name="amount" type="text" id="amount" placeholder="your monthly amount" required pattern="[0-9]"/>						
                        </div>
                        <p className="centerText instructions"><span>Tip:</span> Enter the amount you need monthly.</p>

                    </div>
                    <div className="formSlide">
                        <DayPicker onDayClick={handleDayClick} selectedDays={dueDate} fromMonth={startDate} toMonth={endDate} disabledDays={disabledDays}/>
                            {dueDate ? (<p className="centerText instructions">You selected {dueDate.toLocaleString()}</p>) 
                            : (<p className="centerText instructions">Enter the date you need {currencyFormat(amount)} by.</p>)}
                    </div>
                    <div className="formSlide">
                    <br/><br/>

                        <p className="centerText bold">How do you want money to be moved to this expense?</p>
                        <div className="selectOption">
                            <ul onChange={e => onChange(e)}>
                                <li><label className="radioButton" htmlFor="No Automatic Funding" >No Automatic Funding<input type="radio" id="No Automatic Funding" name="moneyIn"  value="No Automatic Funding" defaultChecked/></label></li>
                                <li><label className="radioButton" htmlFor="On Payday" >On Payday<input type="radio" id="On Payday" name="moneyIn"  value="On Payday"/></label></li>

                            </ul>
                        </div>
                    </div>
                    <div className="formSlide">
                    <br/><br/>

                        <p className="centerText bold">Stop saving once you reach {currencyFormat(amount)} per month, or set aside the same amount per month regardless?</p>
                        <div className="selectOption">
                            <ul onChange={e => onChange(e)}>
                                <li><label className="radioButton" htmlFor="Reach Target Balance" >Reach Target Balance<input type="radio" id="Reach Target Balance" name="contribution"  value="Reach Target Balance" defaultChecked/></label></li>
                                <li><label className="radioButton" htmlFor="Set Aside Target Amount" >Set Aside Target Amount<input type="radio" id="Set Aside Target Amount" name="contribution"  value="Set Aside Target Amount"/></label></li>

                            </ul>
                        </div>
                    </div>
                    <div className="formSlide">
                        <div>
                            <br/>
                            <h3 className="centerText">{title}</h3>
                            <p className="centerText">You need <span className="bold">{currencyFormat(amount)}</span> by the <span className="bold">{addDateSuffix(dueDate)}</span> of each month.</p>
                            <ul className="slideList">
                                <li><p>{moneyIn === "No Automatic Funding" ? 
                                "You will add money from your Balance-to-Budget into this expense manually."
                                : "We will move the amount you need into this expense automatically on payday."}</p></li>
                                <li><p>{contribution === "Reach Target Balance" ? 
                                `Once you reach ${currencyFormat(amount)}, we will not move any more money into this expense.`
                                : `We will move ${currencyFormat(amount)} a month into this expense until you change your mind.`
                                }
                                </p>
                                </li>                             
                            </ul>
                            <br/>
                        </div> 
                       
                           
                        <p className="centerText bold">Press confirm if everything looks good:</p>

                    </div>
                </Flickity>                
            </div>
                <ul>
                    <li><button className={disabled ? "disabled":""} onClick={()=> operation(order)}>Confirm</button></li>
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
