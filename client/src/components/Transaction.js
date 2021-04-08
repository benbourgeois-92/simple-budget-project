import React, {useContext} from 'react';
import GlobalContext from '../user-context';
import currencyFormat from '../operations/conversions'

const Transaction = (props) => {

    const {changeModalScreen} = useContext(GlobalContext);

    const {title, amount, spentFrom, note, type, date} = props.item;
    
    let adjustedAmount = currencyFormat(amount);

    return (
        <li className="individualTransaction">
            <button onClick={()=> changeModalScreen("UPDATE_TRANSACTION")}>
                <div>
                    <h2>{title}</h2>
                    <p>Spent from <span>{spentFrom}</span></p>
                </div>
                <div>
                    <p className="transactionValue credit">{adjustedAmount}</p>
                    <p>{type}</p>
                    {note ? <p>{note}</p> : null}
                </div>
            </button>
        </li>
    )


}

export default Transaction;
