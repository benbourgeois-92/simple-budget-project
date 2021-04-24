import {React, useState} from 'react'
import '../css/detail-buttons.css';
import {currencyFormat, addDateSuffix, month} from '../operations/conversions';


export const StackedButton = (props) => {

    const {disabled } = props;
    let buttonStatus = 'detailsStacked disabled';

    // const handleClick = () => {

    //     disabled ? buttonStatus = buttonStatus + ' shaking' : null;
    // }



    return (

        <button type="button" className={disabled ? buttonStatus : "detailsStacked" }>
            <div className="icon arrowRight">

            </div>
            <div>
                <p>Money In</p> 
                <p>Payday</p>
            </div>
        </button>

    )
}

export default StackedButton;