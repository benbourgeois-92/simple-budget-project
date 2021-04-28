import React, {useContext} from 'react';
import GlobalContext from '../user-context';

export const ConfirmCancelButtons = (props) => {

    const {togglePopup, screen, operation} = useContext(GlobalContext);
    const {order, disabled} = props;




    return (
        <ul className="selectOptions">

            <li><button className={disabled ? "disabled":""} onClick={(e) => disabled ? null : operation(order)}>{disabled ? "Please complete required fields.":"Confirm"}</button></li>
            
            <li><button onClick={()=> togglePopup(screen.popupOpen)} className="closeMenu">Cancel</button></li>                    
        
        </ul>  


    )
}

export default ConfirmCancelButtons;