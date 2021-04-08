import React, {useContext} from 'react'
import '../css/activity-component.css';
import GlobalContext from '../user-context'
import Transaction from './Transaction'



const ActivityCopy = (props) => {

    const {account} = useContext(GlobalContext);
    const days = [ 

        new Date('October 1, 2016 12:00:00 GMT+0000'),
        new Date('October 2, 2016 12:00:00 GMT+0000'),
        new Date('October 3, 2016 12:00:00 GMT+0000'),
        new Date('October 2, 2016 12:00:00 GMT+0000') 

    ];

    const sortedTransactions = account.transactions.sort((a, b) => b.date - a.date)


    console.log(sortedTransactions);



    return (
        <div className="activityComponent crdStyle">
            <div className="activitySummary">
                <h2>Activity</h2>
                <div>
                    <div>
                        <ul>
                            <li><button className="squareIcon sort">Sort Transactions</button></li>
                        </ul>
                    </div>
                </div>
            </div>
           {/* <div className="editTransactionDetails">
                <p>March 9, 4:33pm</p>
                <h2>Transaction Title</h2>
                <p className="transactionValue">$10.69</p>
                <form>
                    <section>
                        <label for="transactionTypes">Edit Transaction Type:</label>
                        <select  id="transactionTypes">
                            <option value="Money Transfers">Money Transfers</option>
                            <option value="Other Income">Other Income</option>
                            <option value="Custom Option">Custom Option</option>
                            <option value="Income">Income</option>
                        </select>								
                    </section>

                    


                    <section>
                        <label for="spendFrom">Spend From:</label>
                        <select id="spendFrom">								
                            <option value="SafeToSpend">Safe-To-Spend</option>
                            <option value="Bills">Bills ($220.00)</option>
                            <option value="Groceries">Groceries ($220.00)</option>
                            <option value="Fun">Fun ($220.00)</option>
                            <option value="SafeToSpend">Safe-To-Spend</option>
                            <option value="Bills">Bills ($220.00)</option>
                            <option value="Groceries">Groceries ($3220.00)</option>
                            <option value="Fun">Fun ($220.00)</option>
                            <option value="SafeToSpend">Safe-To-Spend</option>
                            <option value="Bills">Bills ($220.00)</option>
                            <option value="Groceries">Groceries ($220.00)</option>
                            <option value="Fun">Fun ($2200.00)</option>
                        </select>
                    </section>
                    <section>
                        <label for="transactionNotes">Transaction Notes:</label>
                        <input type="text" id="transactionNotes" placeholder="write notes here!"/>									
                    </section>


                    <input type="submit" value="Save and Close" id="saveAndSubmit"/>
                    <input type="button" value="Close" id="close"/>

            </form>
            </div>*/}

            <div className="activityListview">
                <p className="noTransactions" style={{display:'none'}}>No transactions at this time</p>
                <ul>
                    {
                        sortedTransactions.map((transaction, i, arr)=>{

                            console.log(i)

                            if(i > 1){
                            const previousItem = arr[i - 1];

                                if(transaction.date.getTime() !== previousItem.date.getTime()){
                                    return <>
                                        <div className="transactionDays">
                                            <div className="dateSummary">
                                                <h2>Monday, March 1</h2>
                                            </div>	  
                                        </div>
                                        <Transaction item={transaction} />
                                    </>
                                } else {

                                    <Transaction item={transaction} />

                                }
                            }
    
                        })
                    }
                    
                    
    

                </ul>

          

                {/*  */}

            </div>
        </div>
    );

};

export default ActivityCopy;