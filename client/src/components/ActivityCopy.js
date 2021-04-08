import React, {useContext} from 'react'
import '../css/activity-component.css';
import GlobalContext from '../user-context'
import Transaction from './Transaction'
import {MuuriComponent} from 'muuri-react'



const ActivityCopy = (props) => {



    const children =          (<ul>
    <li>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
    <li>Hello</li>
    <li>Hello</li>                            
</ul>);

    return (
        <div className="activityComponent crdStyle">
            <div className="activitySummary">
                <h2>ActivityCopy</h2>
                <div>
                    <div>
                        <ul>
                            <li><button className="squareIcon sort">Sort Transactions</button></li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="activityListview">
                <p className="noTransactions" style={{display:'none'}}>No transactions at this time</p>
                <ul>
                    <MuuriComponent dragEnabled>
                        {children}
                    </MuuriComponent>
                </ul>
            </div>
        </div>
    );

};

export default ActivityCopy;