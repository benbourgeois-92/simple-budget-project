import '../css/summary-component.css';
import GlobalContext from '.././user-context';
import { useContext} from 'react';

const BalanceSummary = (props) => {

    const { screen, changeModalScreen} = useContext(GlobalContext);

    const notification = {
        message: 'This is working',
        type: 'SUCCESS'
    }
    return (
        <div className="summaryComponent">
            <div className="summarySummary crdStyle">
                <h2>Budget Summary</h2>
                <div>
                    <div className="pieChart">Pie Chart Location</div>
                    <div>
                        <ul>
                            <li>Expense Name Here</li>
                            <li>Expense Name Here</li>
                            <li>Expense Name Here</li>
                            <li>Expense Name Here</li>
                            <button onClick={() => changeModalScreen("DEFAULT")}>Open Popup</button>

                        </ul>
                    </div>

                </div>						 
            </div>
        </div>	
    )

};

export default BalanceSummary;