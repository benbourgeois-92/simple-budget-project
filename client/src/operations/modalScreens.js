import React, {
    useContext, 
    useState} from 'react';
import GlobalContext from '../user-context';
import {
    currencyFormat, 
    addDateSuffix, 
    getDisabledDays} from './conversions';
import Flickity from 'react-flickity-component';
import {
    UpdateAmount, 
    Calendar, 
    ConfirmCancelButtons, 
    OptionButtonList,
    SelectFunds,
    TitleAndSubtitle} from '../components/Widgets';
import DayPicker from 'react-day-picker';
import 'react-day-picker/lib/style.css';
import '../css/modal_screens.css';
import '../css/form-slide.css';
import '../css/incorrect-shake.css';
import { useParams} from 'react-router';
import {useForm} from 'react-hook-form';

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
                            {dueDate ? (<p className="centerText instructions">You selected the <span className="bold">{addDateSuffix(dueDate)} </span>of every month.</p>) 
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
            dueDateLabel: `the ${addDateSuffix(new Date)} of the month`,
            moneyIn: 'No Automatic Funding',
            contribution: 'Reach Target Balance',
            moneyOut: 'No Automatic Spending',
            recentTransactions: []
    })
    const [addScreen, setAddScreen] = useState({

        title: false,
        amount: false,
        moneyIn: true,
        contribution: true,
        disabled: true

    })

    const onChange = (e) => {

        setAddScreen({...addScreen, [e.target.name]: true});

        if(e.target.name === 'amount'){
            setNewExpense({ ...newExpense, [e.target.name]: parseFloat(e.target.value), id: Math.random().toString().substr(2, 5)});
        }else {
            setNewExpense({ ...newExpense, [e.target.name]: e.target.value, id: Math.random().toString().substr(2, 5)});
        }

        if( addScreen.title  == true &&
            addScreen.amount  == true &&
            addScreen.moneyIn  == true &&
            addScreen.contribution == true)
            {
        setAddScreen({...addScreen, disabled: false});
        }
   
    }

    const handleDayClick = (day, modifiers) => {
        if (modifiers.disabled) {

          return;

        }else{
            setNewExpense({...newExpense, dueDate: modifiers.selected ? newExpense.dueDate : day, dueDateLabel: `the ${addDateSuffix(day)} of the month`});           
            setAddScreen({...addScreen, dueDate: true, dueDateLabel: true});
        }

        if( addScreen.title  == true &&
            addScreen.amount  == true &&
            addScreen.moneyIn  == true &&
            addScreen.contribution == true)
            {
        setAddScreen({...addScreen, disabled: false});
        }

    }

      
    const {title, amount, dueDate, moneyIn, contribution} = newExpense;
    const {disabled} = addScreen;

    const year = new Date().getFullYear().toString();
    const endDate = new Date(year + "/12/31");
    const startDate = new Date(year + "/01/01");    
    const disabledDays = getDisabledDays(startDate, endDate);


    const order = {type: 'ADD_EXPENSE', item: newExpense}


    const flickityOptions = { initialIndex: 0, cellAlign: 'left', wrapAround: false, groupCells: 1, contain: true, prevNextButtons: true,pageDots: true}
    const fundingOptions = ['No Automatic Funding', 'On Payday'];
    const contributionOptions = ['Reach Target Balance', 'Set Aside Target Amount'];

    return (
            <div>
                <h2 className="centerText noselect">Add New Expense</h2>
                <p className="centerText noselect">Swipe screen or click arrows below to proceed.</p>

            <div className="formSlider">
                <Flickity  options={flickityOptions}>
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

                                <OptionButtonList options={fundingOptions} primaryOption={fundingOptions[0]} range="moneyIn" />

                
                            </ul>
                        </div>
                    </div>
                    <div className="formSlide">
                    <br/><br/>

                        <p className="centerText bold">Stop saving once you reach {currencyFormat(amount)} per month, or set aside the same amount per month regardless?</p>
                        <div className="selectOption">
                            <ul onChange={e => onChange(e)}>

                                <OptionButtonList options={contributionOptions} primaryOption={contributionOptions[0]} range="contribution" />

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
                    <li><button className={disabled ? "disabled" : ""} onClick={() => disabled ? null : operation(order)}>{disabled ? 'Please complete all fields.' : 'Confirm' }</button></li>
                    <li><button onClick={()=> togglePopup(screen.popupOpen, {screen: screen.modal_screen})} className="closeMenu">Cancel</button></li>                    
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
export const SelectSortScreen = (props) => {

    const {togglePopup, screen, operation, account} = useContext(GlobalContext);
    const [sortType, setSortType] = useState(null)

    const onChange = (e) => {
        setSortType(e.target.value);
    }

    const order = {type: 'UPDATE_EXPENSE_SORT', item: sortType};
    const options = ['Alphabetically', 'By Amount', 'By Saved Amount'];

    return (
            <div>
                <div>                        
                        <h2 className="centerText bold">How do you want your expenses ordered?</h2>
                        <p className="centerText bold">Select how you want your expenses displayed.</p>
                        <div className="selectOption">
                            <ul onChange={e => onChange(e)}>

                                <OptionButtonList options={options} primaryOption={account.expenseOrder} range="select_sort"/>
                         
                            </ul>
                        </div>
                </div>

                <ul className="selectOptions">
                    <li><button onClick={()=> operation(order)}>Confirm</button></li>
                    <li><button onClick={()=> togglePopup(screen.popupOpen)} className="closeMenu">Cancel</button></li>                    
                </ul>             
            </div>
    )

}
export const EditTitleAndNote = (props) => {

    const {id} = useParams();
    const [noteAndTitle, setNoteAndTitle] = useState({title: '', note: ''})
    let disabled = true;

    const onChange = (e) => {
        setNoteAndTitle({...noteAndTitle, [e.target.id]: e.target.value});
    }
    console.log(noteAndTitle)

    if(noteAndTitle.title == '' && noteAndTitle.note == ''){
        disabled = true;
    }else{
        disabled = false;
    }



    const order = {type: 'UPDATE_EXPENSE', item: noteAndTitle, id: id};

    return (
            <div>
                <div>                        
                    <h2 className="centerText bold">Edit Expense Title</h2>
                    <p className="centerText">Adding a note is optional.</p>
                    
                    <div >
                        <br/>

                        <label htmlFor="title">Title:</label>
                        <input onChange={e => onChange(e)} name="title" type="text" id="title" placeholder="enter your title here"/>							
                        
                        <label htmlFor="note">Note:</label>
                        <textarea onChange={e => onChange(e)} rows="2" name="title" type="text" id="note" placeholder="enter your note here"/>							
                        <br/>
                    </div>

                   
                </div>

                <ConfirmCancelButtons order={order} disabled={disabled} text="" />

            </div>
    )

}
export const UpdateExpense = (props) => {

    const {id} = useParams();
    const {screen} = useContext(GlobalContext)
    const [propertiesToUpdate, setPropertiesToUpdate] = useState(screen.item.properties)
    let disabled = true;
    console.log(propertiesToUpdate)

    function onChange(e) {
        setPropertiesToUpdate({...propertiesToUpdate, [e.target.id]: e.target.value});
        console.log(propertiesToUpdate)
        disabled = false;
    //    for (const property in propertiesToUpdate) {

    //         console.log(`${property}: ${propertiesToUpdate[property]}`);

    //         if(propertiesToUpdate[property] == null){
    //             disabled = true;
    //         }
    //      if(propertiesToUpdate[property].length != 0) {

    //         disabled = true;

    //      }
         

    //         }
    
    }

    function onSubmit(e){
        e.preventDefault();
        disabled = false;
    }
 
    // function validate(e) {
    //          for (const property in propertiesToUpdate) {

    //         console.log(`${property}: ${propertiesToUpdate[property]}`);


    //         // if(propertiesToUpdate[property].length == 0){
    //         //     console.log(`${property}: ${propertiesToUpdate[property]} is zero in length`);


    //         // }

    //             if(propertiesToUpdate[property] == null){
    //                 disabled = true;
    //                 return;
    //             }

    //         }


    // }


 
    
    



    let screenToDisplay;
    switch(screen.item.function){
        case "AMOUNT":
            screenToDisplay = <UpdateAmount currentAmount={16} onChanges={onChange} title="How much do you want to put away each month?" />
            break;
        case "DATE":
            screenToDisplay = <Calendar propertiesToUpdate={propertiesToUpdate} setPropertiesToUpdate={setPropertiesToUpdate} title="Select a new date." subtitle="Choose a new due date for this expense"/>
            break;
        case "MONEY_IN":
            screenToDisplay = <UpdateAmount/>
            break;
        case "CONTRIBUTION":
            screenToDisplay = <UpdateAmount/>
            break;
        case "MONEY_OUT":
            screenToDisplay = <UpdateAmount/>
            break;
        default:
            screenToDisplay = null;
    }
    

    // if(noteAndTitle.title == '' && noteAndTitle.note == ''){
    // }else{
    //     disabled = false;
    // }

    const order = {type: 'UPDATE_EXPENSE', item: propertiesToUpdate, id: id};

    return (
            <div>
                <form onSubmit={onSubmit}>
                    {screenToDisplay}
                    <ConfirmCancelButtons order={order} disabled={disabled} text="" />
                </form>
            </div>
    )

}
export const TransferFunds = (props) => {

    const {id} = useParams();
    const {screen, account} = useContext(GlobalContext)
    const [fundsToMove, setFundsToMove] = useState({moveFrom: id, moveTo: null, fundsToMove: 0})
    let disabled = true;
 

    function onChange(e) {

        setFundsToMove({...fundsToMove, [e.target.id]: e.target.value});
        console.log(e.target.id)
    }

    function onSubmit(e){
        e.preventDefault();
        disabled = false;
    }



    const order = {type: 'UPDATE_EXPENSE', item: fundsToMove, id: id};

    return (
            <div>
                <form onSubmit={onSubmit}>
                    <TitleAndSubtitle title="Transfer Funds" subtitle="Move funds from an expense or goal to a another one." textLeft/>
                    <label className="textLeft" htmlFor="amount">How much do you want to move?</label>
                    <input required min="0" max="500"  pattern="^[1-9]+" type="number" id="amount" placeholder="0"/>							
                    <br/>
                    <SelectFunds name="Move Funds From: " onChange={onChange} list1={account.expenses} list2={account.goals} current={fundsToMove.moveFrom} BTB={account.balance_to_budget}/>
                    <br/>
                    <SelectFunds name="Move Funds To: " onChange={onChange} list1={account.expenses} list2={account.goals} current="BTB" BTB={account.balance_to_budget}/>

                    <ConfirmCancelButtons order={order} disabled={disabled} text="" />
                </form>
            </div>
    )

}
export const UpdateName = (props) => {

    const {user} = useContext(GlobalContext)
    const { register, handleSubmit } = useForm();
    const [name, setName] = useState({first_name: null, last_name: null, placeholder: ""});
    const [disabled, setDisabled] = useState(true);

    console.log('running again')



    const onChange = (e) => {
        setName({...name, [e.target.id]: e.target.value});

        console.log(e.target.value)
        
        if(e.target.value == null){
            setDisabled(true);  

        } else {            
            setDisabled(false);       

        }        

    }

    function onSubmit(e){
        e.preventDefault();

    }

    const order = {type: 'UPDATE_NAME', item: null};

    return ( 
        <div>
            <TitleAndSubtitle title="Update Your Name"/>
            <form onSubmit={handleSubmit(onSubmit)} >

                <label htmlFor="first_name">First Name: {disabled ? "disabled":"not disabled"}</label>
                <input  {...register("first_name")} required onChange={e => onChange(e)} id="first_name" type="text"  placeholder={user.first_name}/>

                <label htmlFor="last_name">Last Name:</label>
                <input {...register("last_name")} required onChange={e => onChange(e)} id="last_name" type="text"  placeholder={user.last_name}/>

                <ConfirmCancelButtons order={order} disabled={disabled}/>
            </form>
        </div>
    )
}
export const DefaultScreen = (props) => {

    const {togglePopup, screen} = useContext(GlobalContext);

    return (
            <div className="setHeight">
                {/* <div>
                    <label htmlFor="expenseName">Expense Name:</label>
                    <input type="text" id="expenseName" placeholder="Enter Expense Name"/>							
                </div>
                <div>
                    <label htmlFor="expenseName">Expense Name:</label>
                    <input type="text" id="expenseName" placeholder="Enter Expense Name"/>							
                </div> */}

            <ul className="selectOptions">
                <li><button>Confirm</button></li>
                <li><button onClick={()=> togglePopup(screen.popupOpen)} className="closeMenu">Cancel</button></li>                    
            </ul>             
            </div>
    )

}



export default DefaultScreen;
