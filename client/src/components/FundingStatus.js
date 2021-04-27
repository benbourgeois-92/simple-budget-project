import React from 'react';
import {currencyFormat, addDateSuffix, month} from '../operations/conversions';

const FundingStatus = (props) => {

    const spanStyles = props.spanStyles;
    const amount = props.amount;
    const moneyOut = props.moneyOut;
    let fundingStatus, spendingStatus = '';

    if(props.moneyIn === 'On Payday'){
        fundingStatus = (<span>{currencyFormat(amount)}/Paycheck</span>);
    }else {
        fundingStatus = (<span style={spanStyles}>{props.moneyIn}</span>);
    }

    if(props.moneyOut === 'No Automatic Spending'){
        spendingStatus = (<span style={spanStyles}>{moneyOut}</span>)
    } else {
        spendingStatus = (<span>{moneyOut}</span>)
    }




    return <p>{fundingStatus} &bull; {spendingStatus}</p>;

}

export default FundingStatus;