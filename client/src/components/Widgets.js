import {React, useState, useContext} from 'react';
import DayPicker from 'react-day-picker';
import {currencyFormat, addDateSuffix, getDisabledDays} from '../operations/conversions';
import GlobalContext from '../user-context';
import '../css/detail-buttons.css';


export const UpdateAmount = ({title, subtitle, onChanges, currentAmount }) => {


    return (
        <div>                        
            {title ? <h2 className="centerText bold">{title}</h2> : null}
            {subtitle ? <p className="centerText">{subtitle}</p>:null}
            
            <div>
                <br/>
                <label htmlFor="amount">Amount:</label>
                <input required type="text" onChange={e => onChanges(e)} id="title" placeholder={currentAmount}/>							

                <input required min="0" pattern="^[1-9]+" type="number" onChange={e => onChanges(e)} id="amount" placeholder={currentAmount}/>							
                <br/>
            </div>

       
        </div>

    )
}
export const Calendar = ({title, subtitle, setPropertiesToUpdate, propertiesToUpdate }) => {

//     const [newPayday, setPayday] = useState({
//         dueDate: new Date,
//         dueDateLabel: 'no due date here'

// })

    const handleDayClick = (day, modifiers) => {
        if (modifiers.disabled) {
          return;
        }else{
            setPropertiesToUpdate({...propertiesToUpdate, date: modifiers.selected ? propertiesToUpdate.date : day, dateLabel: `the ${addDateSuffix(day)} of the month`})           
        }

    }

      
    const {date} = propertiesToUpdate;

    const year = new Date().getFullYear().toString();
    const endDate = new Date(year + "/12/31");
    const startDate = new Date(year + "/01/01");    
    const disabledDays = getDisabledDays(startDate, endDate);

    return (
        <div className="calendarComponent">                        
            {title ? <h2 className="centerText bold">{title}</h2> : null}
            {subtitle ? <p className="centerText">{subtitle}</p>:null}
            
            <div>
                <DayPicker changeMonth={false} onDayClick={handleDayClick} selectedDays={date} fromMonth={new Date()} toMonth={new Date()} disabledDays={disabledDays}/>
                            {date ? (<p className="centerText instructions">You selected the <span className="bold">{addDateSuffix(date)} </span>of every month.</p>) 
                            : null }
            </div>

       
        </div>

    )
}
export const OptionButtonList = ({options, primaryOption, range}) => {

    return (
        <>
        {options.map((option, i) => 
            <li key={i}>
                 <label className="radioButton" htmlFor={option}>
                     {option}
                     {
                     option === primaryOption ? 
                     (<input type="radio" id={option} name={range} value={option} defaultChecked />) :
                     (<input type="radio" id={option} name={range} value={option} />)
                     }

                 </label>                                       
            </li>
         )}
         </>
    )
}
export const ConfirmCancelButtons = ({order, disabled, text}) => {
    console.log(disabled)
    const {togglePopup, screen, operation} = useContext(GlobalContext);

    if(!text){
        text = "Please complete required fields."; 
    }


    return (
        <ul className="selectOptions">

            <li><button className={disabled ? "disabled":""} onClick={(e) => disabled ? null : operation(order)}>{disabled ? text :"Confirm"}</button></li>
            
            <li><button onClick={()=> togglePopup(screen.popupOpen)} className="closeMenu">Cancel</button></li>                    
        
        </ul>  


    )
}
export const DetailButton = ({title, subtitle, icon, disabled, order, changeModalScreen }) => {

    // onClick={(e) => e.target.disabled ? null : changeModalScreen(order)}
// changeModalScreen(order)
    if(!icon) {
        icon = "icon"
    }   


    return (

            <button disabled={disabled} onClick={() => changeModalScreen(order)} type="button" className={disabled ? "detailsStacked disabled" : "detailsStacked"}>
                <div className={icon}>
                </div>
                <div>                    
                    <p>{title}</p> 
                    <p>{subtitle}</p>
                </div>
            </button> 
    )
}
export const ProfileHeader = ({name, email, subscription, photo, date}) => {

 


    return (
        <div className="summary">
                            
            <div className="photoPlaceholder">
                <p>{name.charAt(0).toUpperCase()}</p>
            </div>

            <div>
                <h2>{name}</h2>
                <p>{subscription}</p>
                <p>Member Since: {date.getFullYear()}</p>                
            </div>

        
        
        </div>
    )

        
}
export const SelectFunds = ({name, list1, list2, current, BTB, onChange}) => {
    const style={backgroundColor: "#fafafa", color: "#313d46"}
    return (
        <div className="moveFundsSelector">
            <label className="textLeft">{name}</label>
            <select onChange={e => onChange(e)} defaultValue={current} style={style} >

                <option key="BTB" value="BTB">{"Balance-To-Budget" + " (" + currencyFormat(BTB) + ")"}</option>

                {list1.map((expense, i) => 
                    
                    <option key={i} value={expense.id}>{expense.title + '   (' + currencyFormat(expense.amountSaved) + ')'}</option>
                
                )}

                {list2.map((goal, i) => 

                    <option key={i} value={goal.id}>{goal.title + '   (' + currencyFormat(goal.amountSaved) + ')'}</option>

                )}
            </select>
        </div>
    )
}
export const TitleAndSubtitle = ({title, subtitle, textLeft }) => {

    return (
        <div>
            <h2 className={textLeft ? "textLeft" : "centerText"}>{title}</h2>
            <p className={textLeft ? "textLeft" : "centerText"}>{subtitle}</p>
        </div>
    )
}



export default UpdateAmount;