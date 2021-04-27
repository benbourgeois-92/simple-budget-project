import BalanceSummary from '../components/BalanceSummary.js';
import Activity from '../components/Activity.js'

import '../css/main.css';
import React from 'react';

class Dashboard extends React.Component {


    render() {
        return(
            <div>
                <div>
                </div>
                <div>
                    <BalanceSummary/>
                </div>
                {/* <div>
                    <TextContent/>
                </div> */}
                <div>
                    <Activity />
                </div>

                
            </div>
        );
    }
        
};

export default Dashboard;